import { CartItem } from '../types/CartItem';
import { Discount } from '../types/Discount';

export function calculateFinalPrice(cart: CartItem[], discounts: Discount[]): number {
  let total = cart.reduce((sum, item) => sum + item.price, 0);

  const coupon = discounts.find(d => d.type === 'coupon');
  if (coupon?.subtype === 'fixed' && coupon.amount) {
    total -= coupon.amount;
  } else if (coupon?.subtype === 'percentage' && coupon.percent) {
    total *= (1 - coupon.percent / 100);
  }

  const onTop = discounts.find(d => d.type === 'on_top');
  if (onTop?.subtype === 'category_percent' && onTop.percent && onTop.category) {
    const catTotal = cart
      .filter(item => item.category === onTop.category)
      .reduce((sum, item) => sum + item.price, 0);
    total -= (catTotal * onTop.percent) / 100;
  }

  const seasonal = discounts.find(d => d.type === 'seasonal');
  if (seasonal?.every && seasonal.discount) {
    const steps = Math.floor(total / seasonal.every);
    total -= steps * seasonal.discount;
  }

  return Math.max(0, parseFloat(total.toFixed(2)));
}

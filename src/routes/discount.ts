import { Router, Request, Response } from 'express';
import { CartItem } from '../types/CartItem';
import { Discount } from '../types/Discount';
import { calculateFinalPrice } from '../services/discountService';

const router = Router();

router.post('/calculate-discount', (req: Request, res: Response) => {
  try {
    const cart: CartItem[] = req.body.cart;
    const discounts: Discount[] = req.body.discounts;

    if (!cart || !Array.isArray(cart)) {
      return res.status(400).json({ error: 'Invalid or missing cart' });
    }

    if (!discounts || !Array.isArray(discounts)) {
      return res.status(400).json({ error: 'Invalid or missing discounts' });
    }

    const finalPrice = calculateFinalPrice(cart, discounts);
    return res.json({ finalPrice });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;

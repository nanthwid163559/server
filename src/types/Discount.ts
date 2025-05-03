export type DiscountCategory = 'coupon' | 'on_top' | 'seasonal';

export interface Discount {
  type: DiscountCategory;
  subtype?: string;
  amount?: number;
  percent?: number;
  category?: string;
  points?: number;
  every?: number;
  discount?: number;
}

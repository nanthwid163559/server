# Backend (Express + TypeScript)
API คำนวณราคาสุทธิหลังส่วนลด

```bash
cd server
npm install
npm run dev
```

```example body request for calculate-discount
{
  "cart": [
    { "name": "Item A", "price": 100, "quantity": 2 },
    { "name": "Item B", "price": 50, "quantity": 1 }
  ],
  "discounts": [
    { "code": "DISC10", "amount": 10, "type": "coupon" }
  ]
}
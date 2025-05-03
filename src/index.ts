import express from 'express';
import discountRoutes from './routes/discount';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', discountRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import productRoutes from './routes/productRoutes.js';
import favoriteRoutes from './routes/favoriteRoutes.js';
import ratingRoutes from './routes/ratingRoutes.js';
import cartRoutes from './routes/cartRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/favorites', favoriteRoutes);
app.use('/api/ratings', ratingRoutes);
app.use('/api/cart', cartRoutes);

app.get('/', (req, res) => {
  res.send('API is running');
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

export default app;

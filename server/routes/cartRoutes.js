import express from 'express';
const router = express.Router();

// Mock temporal del carrito
let cart = [];

router.get('/', (req, res) => {
  res.json(cart);
});

router.post('/', (req, res) => {
  const newItem = req.body;
  cart.push(newItem);
  res.status(201).json(newItem);
});

router.delete('/', (req, res) => {
  cart = [];
  res.status(200).json({ message: 'Carrito limpiado' });
});

export default router;

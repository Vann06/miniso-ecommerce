
import express from 'express';
import Product from '../models/productModel.js';

const router = express.Router();

// obtener todos los productos
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// crear un producto
router.post('/', async (req, res) => {
    try {
        const nuevo = new Product(req.body);
        const guardado = await nuevo.save();
        res.status(201).json(guardado);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// obtener un producto por id
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Actualizar favorito
router.patch('/:id/favorite', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { favorite: req.body.favorite },
      { new: true }
    );
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar favorito', error });
  }
});

export default router;
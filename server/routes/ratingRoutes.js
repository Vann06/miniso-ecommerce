
import express from 'express';
import { Rating } from '../models/ratingModel.js';

const router = express.Router();

// agregar un rating a un producto
router.post('/', async (req, res) => {
    try {
        const nuevo = new Rating(req.body);
        const guardado = await nuevo.save();
        res.status(201).json(guardado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


//obtener rating de un producto
router.get('/:id_product', async (req, res) => {
    try {
        const ratings = await Rating.find({ id_product: req.params.id_product }).populate('id_user', 'name');
        if (!ratings) {
            return res.status(404).json({ message: 'Ratings not found' });
        }
        res.json(ratings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
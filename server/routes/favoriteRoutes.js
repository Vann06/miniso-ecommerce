
import express from 'express';
import { Favorite } from '../models/favoritesModel.js';

const router = express.Router();

// marcar un producto como favorito
router.post('/', async (req, res) => {
    try {
        const nuevo = new Favorite(req.body);
        const guardado = await nuevo.save();
        res.status(201).json(guardado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//obtener todos los favoritos de un usuario
router.get('/:id_user', async (req, res) => {
    try {
        const favoritos = await Favorite.find({ id_user: req.params.id_user }).populate('id_product');
        res.json(favoritos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
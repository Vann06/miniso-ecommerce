import express from 'express';
const router = express.Router();

// Ruta temporal de prueba
router.get('/', (req, res) => {
  res.json({ message: 'Ruta de favoritos funcionando ✅' });
});

export default router;

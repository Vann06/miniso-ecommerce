import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from '../models/productModel.js';

dotenv.config();

const productosOnePiece = [
  {
    name: 'Vaso de Plastico de 640 Ml y Sombrero Serie One Piece Rojo',
    description: 'Vaso de colección de Monkey D. Luffy. Detalles increíbles y acabado premium.',
    price: 299.99,
    stock: 10,
    imageUrl: 'https://res.cloudinary.com/dxjrdqbio/image/upload/v1747682242/263385-1600-1600_g7usng.webp',
    category: 'Pachones',
    rating: 4.9
  },
  {
    name: 'Taza Sombrero de Paja',
    description: 'Taza inspirada en el sombrero de paja de Luffy. Ideal para café, té o sake pirata.',
    price: 89.99,
    stock: 20,
    imageUrl: 'https://res.cloudinary.com/dxjrdqbio/image/upload/v1747682242/957777de4e8d7439bef56daddbfae227_giptlp.jpg',
    category: 'Tazas',
    rating: 4.5
  },
  {
    name: 'Peluche Chopper Kawaii',
    description: 'Peluche adorable de Tony Tony Chopper con acabado suave. Ideal para mochilas o llaves.',
    price: 49.99,
    stock: 30,
    imageUrl: 'https://res.cloudinary.com/dxjrdqbio/image/upload/v1744950806/llavero_chopper_jshguv.jpghttps://res.cloudinary.com/dxjrdqbio/image/upload/v1747682242/264054-1200-1200_ibs55d.webp',
    category: 'decoracion',
    rating: 4.7
  },
  {
    name: 'Camiseta Zoro Santoryu',
    description: 'Camiseta negra con diseño del estilo de tres espadas de Roronoa Zoro. Tallas S a XL.',
    price: 129.99,
    stock: 15,
    imageUrl: 'https://res.cloudinary.com/dxjrdqbio/image/upload/v1747682242/61vQ1o8-KxL._AC_UL600_SR600_600__nx6qpy.jpg',
    category: 'ropa',
    rating: 4.8
  },
  {
    name: 'Almohada Poster Mugiwaras Wanted',
    description: 'Poster decorativo con las recompensas de la tripulación completa del Sombrero de Paja.',
    price: 69.99,
    stock: 25,
    imageUrl: 'https://res.cloudinary.com/dxjrdqbio/image/upload/v1747682242/D_NQ_NP_845779-MLM79914354577_102024-O-cojin-suave-cartel-se-busca-one-piece-mugiwaras-40cm-miniso_jqd8u9.webp',
    category: 'decoración',
    rating: 4.6
  }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Product.deleteMany();
    await Product.insertMany(productosOnePiece);
    console.log('Productos de One Piece insertados con éxito');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Error al insertar productos:', err);
    mongoose.disconnect();
  });

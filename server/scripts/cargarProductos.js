import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from '../models/productModel.js';

dotenv.config();
const productosOnePiece = [
  {
    name: 'Vaso de Plastico One Piece Rojo',
    description: 'Vaso de colección de Monkey D. Luffy. 640 ML  Detalles increíbles y acabado premium.',
    price: 39.99,
    stock: 10,
    imageUrl: 'https://res.cloudinary.com/dxjrdqbio/image/upload/v1747682242/263385-1600-1600_g7usng.webp',
    category: 'Pachones',
    rating: 5,
    favorite: true,
    discount: 19.99,
  },
  {
    name: 'Taza Sombrero de Paja',
    description: 'Taza inspirada en el sombrero de paja de Luffy. Ideal para café, té o sake pirata.',
    price: 89.99,
    stock: 20,
    imageUrl: 'https://res.cloudinary.com/dxjrdqbio/image/upload/v1747682242/957777de4e8d7439bef56daddbfae227_giptlp.jpg',
    category: 'Tazas',
    rating: 2,
    favorite: false,
    discount: 0.00,
  },
  {
    name: 'Peluche Chopper Kawaii',
    description: 'Peluche adorable de Tony Tony Chopper con acabado suave. Ideal para mochilas o llaves.',
    price: 49.99,
    stock: 30,
    imageUrl: 'https://res.cloudinary.com/dxjrdqbio/image/upload/v1747682242/264054-1200-1200_ibs55d.webp',
    category: 'decoracion',
    rating: 5,
    favorite: true,
    discount: 0.00,
  },
  {
    name: 'Camiseta Zoro Santoryu',
    description: 'Camiseta negra con diseño del estilo de tres espadas de Roronoa Zoro. Tallas S a XL.',
    price: 129.99,
    stock: 15,
    imageUrl: 'https://res.cloudinary.com/dxjrdqbio/image/upload/v1747682242/61vQ1o8-KxL._AC_UL600_SR600_600__nx6qpy.jpg',
    category: 'ropa',
    rating: 1,
    favorite: true,
    discount: 0.00,
  },
  {
    name: 'Almohada Poster Mugiwaras Wanted',
    description: 'Poster decorativo con las recompensas de la tripulación completa del Sombrero de Paja.',
    price: 49.99,
    stock: 25,
    imageUrl: 'https://res.cloudinary.com/dxjrdqbio/image/upload/v1747682242/D_NQ_NP_845779-MLM79914354577_102024-O-cojin-suave-cartel-se-busca-one-piece-mugiwaras-40cm-miniso_jqd8u9.webp',
    category: 'decoracion',
    rating: 3,
    favorite:false,
    discount: 0.00,
  },
  {
    name: 'Peluche de Kuromi',
    description: 'Peluche adorable de Kuromi de Sanrio muy suave',
    price: 89.99,
    stock: 15,
    imageUrl: 'https://res.cloudinary.com/dxjrdqbio/image/upload/v1748040382/Kuromi_pfgw8s.png',
    category: 'decoracion',
    rating: 2,
    favorite: true,
    discount: 81.00,
  },
  {
    name: 'Llavero de Peluche Bloque de Hierba Serie Minecraft',
    description: 'Miniso trae para ti este lindo Llavero de Peluche Bloque de Hierba Serie Minecraft',
    price: 25.00,
    stock:50,
    imageUrl: 'https://res.cloudinary.com/dxjrdqbio/image/upload/v1748040640/Cubo_p2zhlr.png',
    category: 'llavero',
    rating: 3,
    favorite: false,
    discount: 0.00,
  },
  {
    name: 'Set de Stickers de Hello Kitty',
    description: 'Stickers de Hello Kitty para decorar cuadernos, botellas o laptops.',
    price: 29.99,
    stock: 100,
    imageUrl: 'https://res.cloudinary.com/dxjrdqbio/image/upload/v1748041240/50-PCS_1_rmztu8.webp',
    category: 'papelería',
    rating: 3,
    favorite: true,
    discount: 0.00,
  },
  {
    name: 'Lámpara LED de My Melody',
    description: 'Lámpara de escritorio con diseño adorable de My Melody, recargable.',
    price: 89.99,
    stock: 8,
    imageUrl: 'https://res.cloudinary.com/dxjrdqbio/image/upload/v1748041237/D_Q_NP_677648-MLU73803899618_012024-O_pyio4w.webp',
    category: 'iluminación',
    rating: 2,
    favorite: false,
    discount: 81.00,
  },
  {
    name: 'Almohada Creeper Minecraft',
    description: 'Cojín cuadrado con forma de Creeper, suave y cómodo.',
    price: 69.99,
    stock: 14,
    imageUrl: 'https://res.cloudinary.com/dxjrdqbio/image/upload/v1748041234/images_saxbnh.jpg',
    category: 'decoracion',
    rating: 3,
    favorite: false,
    discount: 0.00,
  },
  {
    name: 'Mini Mochila de Hello Kitty',
    description: 'Pequeña mochila rosada con estampado de Hello Kitty, ideal para paseos.',
    price: 229.99,
    stock: 12,
    imageUrl: 'https://res.cloudinary.com/dxjrdqbio/image/upload/v1748041234/download_ir2jtv.jpg',
    category: 'accesorios',
    rating: 4,
    favorite: true,
  },
  {
    name: 'Set de Minifiguras Steve y Alex - Minecraft',
    description: 'Mini figuras articuladas de Steve y Alex para colección.',
    price: 79.50,
    stock: 35,
    imageUrl: 'https://res.cloudinary.com/dxjrdqbio/image/upload/v1748041235/61r70Y9CO3L_mcgzoe.jpg',
    category: 'figuras',
    rating: 1,
    favorite: false,
    discount: 50.00,
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

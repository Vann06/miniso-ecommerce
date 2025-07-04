import React, { useState } from 'react';
import axios from 'axios';
import heartEmpty from '../assets/heart-empty.png';
import heartFull from '../assets/heart-full.png';
import api from '../api';


export default function FavoriteButton({ productId, favorite = false }) {
  const [favorito, setFavorito] = useState(favorite);

  const toggleFavorito = async () => {
    try {
      const newState = !favorito;
      setFavorito(newState);
     
  await api.patch(`/products/${productId}/favorite`, {
    favorite: newState,
  });

    } catch (error) {
      console.error('Error al actualizar favorito:', error);
    }
  };

  return (
    <button 
      className="favorite-inline-btn" 
      onClick={toggleFavorito}
      title="Agregar a favoritos"
    >
      <img
        src={favorito ? heartFull : heartEmpty}
        alt="Favorito"
        className="heart-inline-icon"
      />
    </button>
  );
}

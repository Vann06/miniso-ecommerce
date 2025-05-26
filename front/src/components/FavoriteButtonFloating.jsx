import React,{ useState } from 'react';
import axios from 'axios';
import heartEmpty from '../assets/heart-empty.png';
import heartFull from '../assets/heart-full.png';
import api from '../api';

export default function FavoriteButtonFloating({ productId, favorite = false }) {
  const [favorito, setFavorito] = useState(favorite);

  const toggleFavorito = async (e) => {
    e.stopPropagation();
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
    <button className="favorite-floating-btn" onClick={toggleFavorito}>
      <img
        src={favorito ? heartFull : heartEmpty}
        alt="Favorito"
        className="heart-floating-icon"
      />
    </button>
  );
}

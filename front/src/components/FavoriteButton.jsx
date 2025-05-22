import React, { useState } from 'react';
import heartEmpty from '../assets/heart-empty.png';
import heartFull from '../assets/heart-full.png';

export default function FavoriteButton() {
  const [favorito, setFavorito] = useState(false);
  const toggleFavorito = () => setFavorito(!favorito);

  return (
    <button className="favorite-icon" onClick={toggleFavorito}>
      <img
        src={favorito ? heartFull : heartEmpty}
        alt="Favorito"
        className="heart-icon"
      />
    </button>
  );
}

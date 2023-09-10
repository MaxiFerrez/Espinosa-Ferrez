import React from 'react';
import './Tarjetas.css';
export default function Tarjetas({Data}) {
  return (
    <div className='tarjeta'>
        <h2 className='tarjeta-h2'>{Data.name}</h2>
        <img src={Data.image} alt="Imagen del personaje" />
    </div>
  )
}

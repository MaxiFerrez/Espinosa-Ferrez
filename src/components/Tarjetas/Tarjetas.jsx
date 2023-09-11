import React, { useState } from 'react';
import './Tarjetas.css';
import DetallePersonajes from '../DetallePersonajes/DetallePersonajes';

export default function Tarjetas({Data}) {
  const [mostrarDetalle, setMostrarDetalle] = useState(false);

  const abrirDetalle = () => {
    setMostrarDetalle(true);
  };

  return (
    <div className='tarjeta' onClick={abrirDetalle}>
        <h2 className='tarjeta-h2'>{Data.Nombre}</h2>
        <img src={Data.Imagen} alt="Imagen" />
        {mostrarDetalle && <DetallePersonajes Dato={Data} />}
    </div>
  )
}


import React from 'react'
import { useLocation } from 'react-router-dom';

const DetallePersonajes = () => {
  const location = useLocation();
  const { data } = location.state;

  return (
    <div>
      <h2>{data.Nombre}</h2>
      <p>{data.Descripcion}</p>
      <img src={data.Imagen} alt="Imagen del personaje" />
      {/* Otras propiedades del personaje */}
    </div>
  );
};

export default DetallePersonajes;

import React from 'react';
import './TarjetaLugares';
export default function TarjetasLugares({Data}) {
  return (
    <div/*  className='tarjeta' */>
        <h2 className='tarjetaLugar-h2'>{Data.name}</h2>
        {/* <img src={Data.image} alt="Imagen" /> */}
    </div>
  )
}
import React from 'react';
import './TarjetaTemporadas';
export default function TarjetaTemporadas({Data}) {
  return (
    <>
    <div className='tarjeta'>
        <h2 >Temporada: {Data.Temporada} Episodio: {Data.Episodios}</h2>
    </div>
    </>
  )
}
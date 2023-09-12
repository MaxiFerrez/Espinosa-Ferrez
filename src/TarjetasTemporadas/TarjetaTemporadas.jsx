import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './TarjetaTemporadas';

export default function TarjetaTemporadas({Data}) {
  let params = useParams();
  console.log(params);
  return (
    <>
    <div className='tarjeta'>
        <h2 >Temporada: {Data.Temporada} Episodio: {Data.Episodios}</h2>
        
         <Link to= {`/temporadas/${Data.id}`}><button>Ver mas</button></Link>
    </div>
    </>
  )
}
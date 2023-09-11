import React, { useEffect,useState } from 'react'
import { GetLugares } from '../../api';
import TarjetasLugares from '../../TarjetasLugares/TarjetaLugares';

import './Lugares.css';


export default function Lugares() {
    const [lugares, setLugares] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await GetLugares();
            setLugares(data);
          } catch (error) {
            console.error('Error al obtener los lugares', error);
          }
        };
    
        fetchData();
      }, []);
      
      console.log(lugares);
  return (
    <>
    <h1>Lugares</h1>
    <div className='contenedor-tarjetas'>
        {lugares.slice(0, 10).map((Lugares)=>(<TarjetasLugares key={Lugares.id} Data={Lugares}/>))}
    </div>
    </>
  )
}

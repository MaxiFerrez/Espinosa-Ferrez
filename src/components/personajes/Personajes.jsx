import React, { useEffect,useState } from 'react'
import { GetPersonajes } from '../../api';
import Tarjetas from '../Tarjetas/Tarjetas';

import './Personajes.css';


export default function Personajes() {
    const [personajes, setPersonajes] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await GetPersonajes();
            setPersonajes(data);
          } catch (error) {
            console.error('Error al obtener los personajes', error);
          }
        };
    
        fetchData();
      }, []);
      
      //console.log(personajes);
  return (
    <>
    <h1>Personajes</h1>
    <div className='contenedor-tarjetas'>
        {personajes.slice(0, 10).map((Personajes)=>(<Tarjetas key={Personajes.id} Data={Personajes}/>))}
    </div>
    </>
  )
}

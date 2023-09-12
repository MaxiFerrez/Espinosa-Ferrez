import React, { useEffect,useState } from 'react'
import { GetTemporadas } from '../../api';
import Navbar from '../navbar/Navbar'
import TarjetaTemporadas from '../../TarjetasTemporadas/TarjetaTemporadas';
import './Temporadas.css';

export default function Temporadas() {
    const [temporadas, setTemporadas] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await GetTemporadas();
            setTemporadas(data);
          } catch (error) {
            console.error('Error al obtener los Temporadas', error);
          }
        };
    
        fetchData();
      }, []);
      
      console.log(temporadas);
      
  return (
    <>
    <Navbar></Navbar>
  <h1>Temporadas</h1>
    <div className='contenedor-tarjetas'>
        {temporadas.map((Temporadas)=>(<TarjetaTemporadas key={Temporadas.id} Data={Temporadas}/>))}
    </div>
    </>
  )
}

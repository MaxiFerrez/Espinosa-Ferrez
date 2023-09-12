
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { GetTemporadaShow } from '../../api';
import Navbar from '../navbar/Navbar'

const DetallePersonajes = () => {
  let { id } = useParams();
  console.log(id);
  const [temporadaid, setid] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            
            const data = await GetTemporadaShow(id);
            setid(data);
          } catch (error) {
            console.error('Error al obtener los personajes', error);
          }
        };
    
        fetchData();
      }, []);
      
      console.log(temporadaid);
  return (
    <>
    <Navbar></Navbar>
    <div>
      <h2>Detalle Temporadas</h2>
      <p>Temporada: {temporadaid.Temporada}</p>
      <p>Episodios: {temporadaid.Episodios}</p>
      <p>Primera Emision: {temporadaid.Posicion_Primera_emision}</p>
      <p>Ultima Emision: {temporadaid.Ultima_emision}</p>
      <p>Audiencia Promedio: {temporadaid.Audiencia_promedio}</p>
    </div>
    </>
  );
};

export default DetallePersonajes;

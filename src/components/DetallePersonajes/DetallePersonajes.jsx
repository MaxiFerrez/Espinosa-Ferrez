
import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom';
import { GetTemporadaShow } from '../../api';
import Navbar from '../navbar/Navbar'
import './DetallePersonajes.css';

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
    <div className='tarj-completa'> 
      <h2>Detalle Temporadas</h2>
      <h3>Temporada: {temporadaid.Temporada}</h3>
      <h3>Episodios: {temporadaid.Episodios}</h3>
      <h3>Primera Emision: {temporadaid.Posicion_Primera_emision}</h3>
      <h3>Ultima Emision: {temporadaid.Ultima_emision}</h3>
      <h3>Audiencia Promedio: {temporadaid.Audiencia_promedio}</h3>
    </div>
    </>
  );
};

export default DetallePersonajes;

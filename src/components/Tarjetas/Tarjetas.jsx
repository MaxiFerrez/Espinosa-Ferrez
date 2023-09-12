import React, { useState } from 'react';
import './Tarjetas.css';
import DetallePersonajes from '../DetallePersonajes/DetallePersonajes';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';

const Tarjetas = ({ Data }) => {
  // Usa el hook useState para inicializar el estado
  const [abierto, setAbierto] = useState(false);

  const abrirModal = () => {
    setAbierto(!abierto);
  } 

  return (
    <>    
      <div className='tarjeta'>
        <h2 className='tarjeta-h2'>{Data.Nombre}</h2>
        <img src={Data.Imagen} alt="Imagen" />
        <br />
        <button onClick={abrirModal}>Ver detalle</button>
      </div>
      <div>
        <Modal isOpen={abierto} className='Modal'>
          <ModalBody>
            <h2>{Data.Nombre}</h2>
            <p>Genero: {Data.Genero}</p>
            <p>{Data.Historia}</p>
            <p>Estado: {Data.Estado} </p>
            <p>Ocupacion: {Data.Ocupacion}</p>
          
          </ModalBody>
          <ModalFooter>
          <button onClick={abrirModal}>Cerrar</button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}

export default Tarjetas;

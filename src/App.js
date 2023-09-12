
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Personajes from './components/personajes/Personajes';
import Login from './components/login/Login';
import Temporadas from './components/Temporadas/Temporadas';
import TarjetaTemporadas from './TarjetasTemporadas/TarjetaTemporadas';
import DetallePersonajes from './components/DetallePersonajes/DetallePersonajes';

function RoutesApp() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/temporadas" element={<Temporadas />} />
        <Route path="/temporadas/:id" element={<DetallePersonajes />} />

      </Routes>
 

    </>

  );
}
  function Routerwrapper() {
    return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
    )
}

export default Routerwrapper;

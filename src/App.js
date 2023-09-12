
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Personajes from './components/personajes/Personajes';
import Login from './components/login/Login';
import DetallePersonajes from './components/DetallePersonajes/DetallePersonajes';
import Temporadas from './components/Temporadas/Temporadas';

function RoutesApp() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Login />} />
        {/* <Route path="/personajes/:id" component={<DetallePersonajes />} /> */}
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/temporadas" element={<Temporadas />} />

      </Routes>
      <div >Footer</div>

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

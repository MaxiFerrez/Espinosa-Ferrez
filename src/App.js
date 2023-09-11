
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Personajes from './components/personajes/Personajes';
import Login from './components/login/Login';
import Lugares from './components/Lugares/Lugares';
import DetallePersonajes from './components/DetallePersonajes/DetallePersonajes';

function RoutesApp() {
  return (
    <>
      <div >NAVBAR</div>

      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/personajes/:id" component={<DetallePersonajes />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/lugares" element={<Lugares />} />

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

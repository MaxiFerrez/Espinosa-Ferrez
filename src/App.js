
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Personajes from './components/personajes/Personajes';
import Login from './components/login/Login';

function RoutesApp() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/personajes" element={<Personajes />} />

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

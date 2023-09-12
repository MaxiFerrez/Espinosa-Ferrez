import React from 'react';
import './Navbar.css';
import simpson from '../../img/gif2.gif';

function Navbar() {
  return (
    <nav className="navbar">
       <div className="logo-nav">
        <img src={simpson} alt="Mi Logo" />
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="/personajes" className="navbar-link">Personajes</a>
        </li>
        <li className="navbar-item">
          <a href="/temporadas" className="navbar-link">Tempordas</a> 
        </li>
        <li className="navbar-item">
          <a href="/" className="navbar-link">salir</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

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
          <a href="/inicia" className="navbar-link">Api1</a>
        </li>
        <li className="navbar-item">
          <a href="/hola" className="navbar-link">Api2</a>
        </li>
        <li className="navbar-item">
          <a href="/" className="navbar-link">salir</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

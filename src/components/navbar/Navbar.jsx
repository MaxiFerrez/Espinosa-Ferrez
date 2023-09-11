import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="/inicia" className="navbar-link">Api1</a>
        </li>
        <li className="navbar-item">
          <a href="/hola" className="navbar-link">Api2</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

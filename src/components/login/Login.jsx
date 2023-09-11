import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    console.clear(); // Borra la consola antes de imprimir la nueva contraseña
    console.log(newPassword);
  };

  return (
    <div className="login">
      <form className="formulario">
        <h2>Iniciar Sesión</h2>
        <div className="input-form">
          <label htmlFor="username">Usuario</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="input-form">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button  className="login-button">Iniciar Sesión</button>
        <div className="forgot-password">
          <a href="#">Olvidé mi contraseña</a>
        </div>
      </form>
    </div>
  );
}

export default Login;

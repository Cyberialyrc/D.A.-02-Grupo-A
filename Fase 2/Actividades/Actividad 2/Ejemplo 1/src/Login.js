import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // Estado para manejar el mensaje
  const [isError, setIsError] = useState(false); // Estado para manejar si es error o éxito

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === '' || password === '') {
      setMessage('Error: Por favor, ingresa tu nombre de usuario y contraseña.');
      setIsError(true); // Marca como error
    } else {
      setMessage('Login exitoso!');
      setIsError(false); // Marca como éxito
      // Aquí puedes agregar la lógica de autenticación real
      console.log('Usuario:', username);
      console.log('Contraseña:', password);
      // Limpiar los campos después de iniciar sesión
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="username">Nombre de Usuario</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Ingresa tu nombre de usuario"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>
        <button type="submit" className="login-btn">Iniciar Sesión</button>
      </form>
      {message && (
        <p className={`message ${isError ? 'error' : 'success'}`}>{message}</p>
      )}
    </div>
  );
};

export default Login;

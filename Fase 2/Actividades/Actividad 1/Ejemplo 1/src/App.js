/*************************************************************************************************
ARCHIVO		: App.js
AUTOR		: Lujan Biamonte Percy Aaron
FECHA		: 06/10/2024
DESCRIPCIÓN	: Archivo principal de la página, donde se configura las rutas principales, anidadas y protegidas. Utilizando React Router para manejar la navegación y el enrutamiento dinámico.
*************************************************************************************************/
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Posts from './Posts';
import Post from './Post';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts/:postId" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
/*************************************************************************************************
ARCHIVO		: App.js
AUTOR		: GARZÓN MENDOZA ANA PAULA VIVIANA
FECHA		: 06/10/2024
DESCRIPCIÓN	: Archivo principal de la página, donde se usa react context.
*************************************************************************************************/
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Posts from './Posts';
import Post from './Post';
import { ThemeProvider } from './ThemeContext';
import ThemeToggle from './ThemeToggle';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ThemeToggle /> 
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/posts/:postId" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

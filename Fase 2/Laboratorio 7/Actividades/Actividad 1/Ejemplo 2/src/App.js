/*************************************************************************************************
ARCHIVO		: App.js
AUTOR		: Ricardo Gabriel Manrique Silva
FECHA		: 06/10/2024
DESCRIPCIÓN	: Archivo principal de la página, donde se configura las rutas principales, anidadas y protegidas. Utilizando React Router para manejar la navegación y el enrutamiento dinámico.
*************************************************************************************************/
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import Admin from './pages/Admin';
import NoMatch from './pages/NoMatch';
import AdminRoute from './components/AdminRoute';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Ruta del Index */}
          <Route path="courses" element={<Courses />}> {/* Ruta para la lista de cursos */}
            <Route path=":courseId" element={<CourseDetails />} /> {/* Ruta para los detalles de un curso */}
          </Route>
          <Route path="admin" element={<AdminRoute />}> {/* Ruta para admin */}
            <Route index element={<Admin />} />
          </Route>
          <Route path="*" element={<NoMatch />} /> {/* Ruta para 404 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
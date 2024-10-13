/*************************************************************************************************
ARCHIVO		: Course.js
AUTOR		: Ricardo Gabriel Manrique Silva
FECHA		: 06/10/2024
DESCRIPCIÓN	: Archivo encargado de mostrar la lista de cursos con enlaces dinámicos que lleva a los detalles de cada uno, através de su "courseID"
*************************************************************************************************/
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Courses = () => {
  // Lista de cursos con ID y nombre
  const courseList = [
    { id: 1, name: 'Desarrollo de Aplicaciones' },
    { id: 2, name: 'Computación en Red III' },
    { id: 3, name: 'Infraestrucutra de tecnologías de la información' },
  ];

  return (
    <div className="courses-container">
      <h2>Cursos</h2>
      <ul className="course-list">
        {/* Recorre la lista de cursos y genera un enlace para cada curso */}
        {courseList.map(course => (
          <li key={course.id}>
            <Link to={`${course.id}`}>{course.name}</Link>
          </li>
        ))}
      </ul>
      {/* Renderiza las rutas anidadas, como los detalles del curso */}
      <Outlet />
    </div>
  );
};

export default Courses;
/*************************************************************************************************
ARCHIVO		: CourseDetails.js
AUTOR		: Ricardo Gabriel Manrique Silva
FECHA		: 06/10/2024
DESCRIPCIÓN	: Archivo encargado de mostrar los detalles/información sobre un curso en específico.
*************************************************************************************************/
import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  // Obtiene el parámetro dinámico de la URL (courseId)
  const { courseId } = useParams();

  // Detalles de los cursos almacenados en un objeto
  const courseDetails = {
    1: { name: 'Desarrollo de Aplicaciones', description: 'Aprende a crear aplicaciones web.' },
    2: { name: 'Computación en Red III', description: 'Estudia el diseño, implementación y gestión de redes informáticas.' },
    3: { name: 'Infraestrucutra de tecnologías de la información', description: 'Conoce cómo gestionar infraestructuras de TI modernas y seguras.' },
  };

  // Busca los detalles del curso basado en el courseId
  const course = courseDetails[courseId];

  return (
    <div className="course-details">
      {/* Si existe el curso, muestra su información, si no, muestra un mensaje de error */}
      {course ? (
        <>
          <h3>{course.name}</h3>
          <p>{course.description}</p>
        </>
      ) : (
        <p>Curso no encontrado</p>
      )}
    </div>
  );
};

export default CourseDetails;
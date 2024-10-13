import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <main>
      <h2>Raspberry Pi</h2>
      <p>
        La Raspberry Pi es una serie de pequeñas computadoras de placa única desarrolladas en el Reino Unido por la Fundación Raspberry Pi para promover la enseñanza de informática básica en las escuelas y países en desarrollo. A lo largo de los años, estas placas han evolucionado significativamente, permitiendo realizar proyectos de hardware como servidores, robots, estaciones meteorológicas y mucho más.
      </p>
      <h3>Modelos Populares</h3>
      <ul>
        <li>Raspberry Pi 4 Model B</li>
        <li>Raspberry Pi 3 Model B+</li>
        <li>Raspberry Pi Zero W</li>
        <li>Raspberry Pi 400</li>
      </ul>
      <h3>Aplicaciones Comunes</h3>
      <p>
        Las placas de Raspberry Pi son muy versátiles y se utilizan comúnmente en proyectos de:
      </p>
      <ul>
        <li>Automatización del hogar</li>
        <li>Servidor multimedia</li>
        <li>Prototipos de IoT (Internet de las Cosas)</li>
        <li>Juegos retro con RetroPie</li>
      </ul>
    </main>
  );
};

export default MainContent;

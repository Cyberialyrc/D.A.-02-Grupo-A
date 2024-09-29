import React from 'react';
import ComponenteA from './components/ComponenteA';
import ComponenteB from './components/ComponenteB';
import ComponenteC from './components/ComponenteC';
import './components/ComponenteA.css';
import './components/ComponenteB.css';
import './components/ComponenteC.css';

function App() {
    return (
        <div>
            <ComponenteA 
                titulo="Bienvenido a la Tienda Virtual" 
                descripcion="Explora una amplia variedad de productos de alta calidad, desde tecnología hasta moda." 
            />
            <ComponenteB 
                subtitulo="Ofertas Especiales" 
                contenido="Aprovecha nuestras ofertas del día: hasta un 50% de descuento en artículos seleccionados." 
            />
            <ComponenteC datos={datosEjemplo} />
        </div>
    );
}

const datosEjemplo = [
    { titulo: 'Laptop Gamer', descripcion: 'Potente laptop con GPU dedicada, ideal para juegos y diseño gráfico.' },
    { titulo: 'Auriculares Bluetooth', descripcion: 'Sonido envolvente y batería de larga duración, perfectos para escuchar música.' },
    { titulo: 'Cámara Digital', descripcion: 'Captura imágenes de alta resolución, ideal para fotógrafos aficionados y profesionales.' },
];

export default App;

import React from 'react';

function ComponenteB(props) {
    return (
        <div className="componente-b">
            <h2>{props.subtitulo}</h2>
            <p>{props.contenido}</p>
        </div>
    );
}

export default ComponenteB;

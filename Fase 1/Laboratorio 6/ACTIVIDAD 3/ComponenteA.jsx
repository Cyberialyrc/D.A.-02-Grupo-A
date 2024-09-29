import React from 'react';

function ComponenteA(props) {
    return (
        <div className="componente-a">
            <h1>{props.titulo}</h1>
            <p>{props.descripcion}</p>
        </div>
    );
}

export default ComponenteA;

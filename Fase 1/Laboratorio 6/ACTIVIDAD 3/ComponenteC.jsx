import React from 'react';

function ComponenteC({ datos }) {
    return (
        <div className="componente-c">
            {datos.map((item, index) => (
                <div key={index}>
                    <h3>{item.titulo}</h3>
                    <p>{item.descripcion}</p>
                </div>
            ))}
        </div>
    );
}

export default ComponenteC;

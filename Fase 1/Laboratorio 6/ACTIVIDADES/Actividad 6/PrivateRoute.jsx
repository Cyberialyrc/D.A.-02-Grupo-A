import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Componente de ruta privada
function PrivateRoute({ component: Component, ...rest }) {
    const isAuthenticated = false; // Cambiar a true si el usuario está autenticado

    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
            }
        />
    );
}

export default PrivateRoute;

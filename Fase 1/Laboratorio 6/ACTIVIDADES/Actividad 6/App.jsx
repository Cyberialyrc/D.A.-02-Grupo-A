import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Inicio from './Inicio';
import Acerca from './Acerca';
import Productos from './Productos';
import Perfil from './Perfil';
import PrivateRoute from './PrivateRoute';

// Componente principal
function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/acerca">Acerca de</Link>
                <Link to="/productos">Productos</Link>
                <Link to="/perfil">Perfil</Link>
            </nav>

            <Switch>
                <Route exact path="/" component={Inicio} />
                <Route path="/acerca" component={Acerca} />
                <Route path="/productos" component={Productos} />
                <PrivateRoute path="/perfil" component={Perfil} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

// Exportar componente principal
export default App;

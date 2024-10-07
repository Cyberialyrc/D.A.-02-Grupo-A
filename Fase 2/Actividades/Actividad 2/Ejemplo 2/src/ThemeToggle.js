/*************************************************************************************************
ARCHIVO		: ThemeToggle.js
AUTOR		: GARZÓN MENDOZA ANA PAULA VIVIANA
FECHA		: 06/10/2024
DESCRIPCIÓN	: Componente para mostrar el tema actual y poder altenarlo.
*************************************************************************************************/import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: '20px', textAlign: 'center' }}>
            <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
            <button onClick={toggleTheme}>
                Toggle Theme
            </button>
        </div>
    );
};

export default ThemeToggle;

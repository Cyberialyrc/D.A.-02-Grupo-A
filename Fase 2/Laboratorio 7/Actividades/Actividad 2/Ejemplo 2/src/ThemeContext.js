/*************************************************************************************************
ARCHIVO		: ThemeContext.js
AUTOR		: GARZÓN MENDOZA ANA PAULA VIVIANA
FECHA		: 06/10/2024
DESCRIPCIÓN	: Archivo donde define el contexto que almacena el tema.
*************************************************************************************************/
import React, { createContext, useState } from 'react';

// Crear el contexto
export const ThemeContext = createContext();

// Proveedor de contexto
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

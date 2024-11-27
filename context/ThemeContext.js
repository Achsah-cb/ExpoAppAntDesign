import React, { createContext, useState } from 'react';

// Create the Theme Context
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // State to manage the theme colors
    const [theme, setTheme] = useState({
        primaryColor: '#FFB200', // Default Primary Color
        secondaryColor: '#F9FBE7', // Default Secondary Color
    });

    // Function to update the theme colors
    const updateTheme = (newTheme) => {
        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, updateTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

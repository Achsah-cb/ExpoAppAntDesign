import React, { createContext, useContext } from 'react';

export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const theme = {
    colors: {
      background: '#FCF2D6',
      text: '#474646',
      primary: '#EDD06A',
      secondary: '#C29225',
    },
    fontsize: {
      small: 16,
      medium: 18,
      large: 24,
    },
    fontfamily: {
      regular: "Montserrat-Regular",
      bold: "Montserrat-Bold",
      light: "Montserrat-Light",
      medium: "Montserrat-Medium",
      semibold: "Montserrat-SemiBold"
    }
  };

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

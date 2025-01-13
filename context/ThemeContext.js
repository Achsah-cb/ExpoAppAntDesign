import React, { createContext, useContext } from 'react';

export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const theme = {
    colors: {
      background: '#D9D9D9', // background light pink color
      text: '#FFFFFF',
      primary: '#FF2A64', // pink color
      gold: '#E8B006',
      cyan:'#E8B006'
    },
    fontsize: {
      smaller: 10,
      small: 12,
      medium: 16,
      large: 32,
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

import React, { createContext, useContext } from 'react';

export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const theme = {
    colors: {
      background: '#D9D9D9', // background light pink color
      text: '#FFFFFF',  // white text color
      primary: '#FF2A64', // pink color
      gold: '#E8B006', // gold color for few words in a screen
      cyan:'#E8B006'  // cyan color for few words in a screen
      // You can add other colors as well here, following the above pattern
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

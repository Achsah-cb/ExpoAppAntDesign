import React, { createContext, useContext, useMemo, useState } from 'react';

export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const theme = {
    colors: {
      background: '#FFFFFF', // background light pink color
      text: '#1C1C1C',  // white text color
      primary: '#FF2A64', // pink color
      gold: '#E8B006', // gold color for few words in a screen
      cyan:'#E8B006',  // cyan color for few words in a screen
      blue:'#2A4EA8',  // blue color for few words in a screen
      pink:'#ED4B82', // pink color for few words in a screen
      grey: '#D9D9D9', 
      orange:'#FF8000',  // orange color for few words in a screen
      blueGreen: '#26A69A', // blue-green color for few words in a screen
      btnText:'#FFFFFF',// button text color
      white:'#D9D9D9',
      subText:'#909090',
      // You can add other colors as well here, following the above pattern
    },
    fontsize: {
      smaller: 10,
      small: 14,
      medium: 16,
      medium2: 26,
      medium3: 22,
      large: 32,
    },
    fontfamily: {
      regular: "Montserrat-Regular",
      bold: "Montserrat-Bold",
      light: "Montserrat-Light",
      medium: "Montserrat-Medium",
      semibold: "Montserrat-SemiBold"
    },
    border:{
      borderradius: 14.13,
    }
  };

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
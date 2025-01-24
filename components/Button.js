import React, { useContext } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { responsiveWidth, responsiveHeight } from '../styles/responsiveUtil';

const ButtonComponent = ({ onPress }) => { // Accept onPress as a prop
  const theme = useContext(ThemeContext);

  return (
    <TouchableOpacity
      style={[styles.Button, { backgroundColor: theme.colors.primary, borderRadius: theme.border.borderradius }]}
      onPress={() => { // Trigger the onPress prop
        console.log('Button pressed'); // Debug log
        if (onPress) {
          onPress();
        }
      }}
    >
      <Text
        style={[
          styles.buttonText,
          {
            color: theme.colors.btnText,
            fontSize: theme.fontsize.medium,
            fontFamily: theme.fontfamily.semibold,
          },
        ]}
      >
        continue
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  continuebtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
  },
  Button: {
    width: responsiveWidth(80),
    height: responsiveHeight(6),
    marginTop: responsiveHeight(7),
    shadowColor: '#FF2A64',
    shadowOffset: { width: 0, height: responsiveWidth(6) },
    shadowOpacity: 0.7,
    shadowRadius: responsiveWidth(5),
    elevation: 10,
    borderWidth: responsiveWidth(0),
    alignItems: 'center',
    justifyContent: 'center', // Center text vertically
  },
});

export default ButtonComponent;

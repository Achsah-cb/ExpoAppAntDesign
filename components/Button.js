import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { responsiveWidth, responsiveHeight } from '../styles/responsiveUtil';
import { Button } from '@ant-design/react-native';

const ButtonComponent = () => {
    const theme = useContext(ThemeContext);

    return (
        <View>
            <Button style={[styles.Button, { backgroundColor: theme.colors.primary, borderRadius: theme.border.borderradius }]}>
            <Text style={[styles.buttonText, { color: theme.colors.btnText, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.semibold }]}>continue</Text>
          </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    continuebtn: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        padding: 15
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
    alignItems: 'center'
      },
})

export default ButtonComponent;
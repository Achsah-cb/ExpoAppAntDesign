import React from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import AppLogo from '../assets/image-svg/splashlogo.svg';

const { width, height } = Dimensions.get('window');
const scale = size => (width / 375) * size;

const HeaderLogo = () => {
    <View style={styles.logo}><AppLogo /></View>
}

const styles= StyleSheet.create({
    logo: {
        flexGrow: 1,
        marginTop: height * 0.05,
        width: scale(115),
        height:scale(43),
        alignSelf: 'center',
        alignItems: 'center',
      }
})

export default HeaderLogo;
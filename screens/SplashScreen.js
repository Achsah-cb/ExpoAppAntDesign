import React, { useEffect } from "react";
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SplashLogo from '../assets/image-svg/splashlogo.svg';

const CustomSplashScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('SignUpScreen');
        }, 3000);
    }, []);

    return (
        <View style={styles.container}>
            <SplashLogo />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FCF2D6'
    }
})

export default CustomSplashScreen;
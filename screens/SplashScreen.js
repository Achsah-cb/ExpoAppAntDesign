import React, { useEffect } from "react";
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SplashLogo from '../assets/image-svg/splashlogo.svg';

const SplashScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('PreferenceScreen');
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
        backgroundColor: '##fff5bf'
    }
})

export default SplashScreen;
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppLogo from '../assets/image-svg/splashlogo.svg';
import LoginBg from '../assets/image-svg/LoginBg.svg';
import styles from '../styles/SignUpStyle';

const SignUpScreen = ({ navigation }) => {

    const handleSliderChange = (value) => {
        if (value[0] === 1) {
            navigation.navigate('LoginScreen');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.logo}><AppLogo width={115} height={43} /></View>

            <View style={styles.imagesContainer}>
                <LoginBg style={styles.wave} />
            </View>

            <View>
                <Text style={styles.subTitle}>
                    Discover Love Where Your Story Begins.
                </Text>
                <Text style={styles.description}>
                    Join us to discover your ideal partner and ignite the sparks of romance in your journey.
                </Text>
            </View>

            <TouchableOpacity style={styles.LoginwithPhoneContainer} onPress={() => navigation.navigate('LoginScreen')}>
                <View style={styles.iconView}>
                    <Icon name='phone' size={20} 
                            color='#FFB200' 
                            style={styles.phoneIcon} />
                </View>
                    <View style={styles.buttonView}>
                    <Text style={styles.buttonText}>
                        Login with Phone
                    </Text>
                    </View>
            
            </TouchableOpacity>

            <Text style={styles.footerText}>
                Don't have an account?{' '}
                <Text style={styles.signUpText} onPress={() => alert('Sign Up')}>
                    Sign Up
                </Text>
            </Text>
        </ScrollView>
    );
};

export default SignUpScreen;

import React, { useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppLogo from '../assets/image-svg/splashlogo.svg';
import LoginBg from '../assets/image-svg/LoginBg.svg';
import styles from '../styles/SignUpStyle';
import { ThemeContext } from '../context/ThemeContext';

const SignUpScreen = ({ navigation }) => {
    const { theme } = useContext(ThemeContext); // Get theme from ThemeContext

    return (
        <ScrollView contentContainerStyle={[styles.container, { backgroundColor: theme.secondaryColor }]}>
            {/* Logo */}
            <View style={styles.logo}>
                <AppLogo width={115} height={43} />
            </View>

            {/* Background Image */}
            <View style={styles.imagesContainer}>
                <LoginBg style={styles.wave} />
            </View>

            {/* Title & Description */}
            <View>
                <Text style={styles.subTitle}>Discover Love Where Your Story Begins.</Text>
                <Text style={styles.description}>
                    Join us to discover your ideal partner and ignite the sparks of romance in your journey.
                </Text>
            </View>

            {/* Login with Phone Button */}
            <TouchableOpacity
                style={[styles.LoginwithPhoneContainer, { backgroundColor: theme.primaryColor }]}
                onPress={() => navigation.navigate('LoginScreen')}
            >
                <View style={[styles.iconView, { backgroundColor: theme.secondaryColor }]}>
                    <Icon name="phone" size={20} color={theme.primaryColor} style={styles.phoneIcon} />
                </View>
                <View style={styles.buttonView}>
                    <Text style={[styles.buttonText, { color: theme.secondaryColor }]}>Login with Phone</Text>
                </View>
            </TouchableOpacity>

            {/* Footer */}
            <Text style={styles.footerText}>
                Don't have an account?{' '}
                <Text
                    style={[styles.signUpText, { color: theme.primaryColor }]}
                    onPress={() => navigation.navigate('YourNameScreen')}
                >
                    Sign Up
                </Text>
            </Text>
        </ScrollView>
    );
};

export default SignUpScreen;

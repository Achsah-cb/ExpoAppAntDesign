import React, { useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppLogo from '../assets/image-svg/splashlogo.svg';
import LoginBg from '../assets/image-svg/LoginBg.svg';
import styles from '../styles/SignUpStyle';
import { ThemeContext } from '../context/ThemeContext';

const SignUpScreen = ({ navigation }) => {
  const theme  = useContext(ThemeContext);

  if (!theme) {
    console.error('Theme context is not provided.');
    return null;
  }

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: theme.colors.background }]}>
      
      <View style={styles.imagesContainer}>
        <LoginBg style={styles.wave} />
      </View>

      <View>
        <Text style={[styles.subTitle, { fontFamily: theme.fontfamily.semibold, color: theme.colors.text }]}>
          Discover Love Where Your Story Begins.
        </Text>
        <Text style={[styles.description, { fontFamily: theme.fontfamily.regular, color: theme.colors.text }]}>
          Join us to discover your ideal partner and ignite the sparks of romance in your journey.
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.LoginwithPhoneContainer, { backgroundColor: theme.colors.primary }]}
        onPress={() => navigation.navigate('LoginScreen')}
      >
          <Icon name="phone" size={20} color={theme.colors.text} style={styles.phoneIcon} />
        <View style={styles.buttonView}>
          <Text style={[styles.buttonText, { color: theme.colors.text, fontFamily: theme.fontfamily.semibold }]}>
            Login with Phone
          </Text>
        </View>
      </TouchableOpacity>

      <Text style={[styles.footerText, { fontFamily: theme.fontfamily.regular, color: theme.colors.text, fontSize: theme.fontsize.medium }]}>
        Don't have an account?{' '}
        <Text
          style={[styles.signUpText, { color: theme.colors.text, fontFamily: theme.fontfamily.semibold, fontSize: theme.fontsize.medium }]}
          onPress={() => navigation.navigate('YourNameScreen')}
        >
          Sign Up
        </Text>
      </Text>
    </ScrollView>
  );
};

export default SignUpScreen;
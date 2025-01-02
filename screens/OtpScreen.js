import React, { useState, useRef, useContext } from 'react';
import { View, Text,ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { ThemeContext } from '../context/ThemeContext';
import styles from '../styles/OtpStyle';

const OtpScreen = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '']);

  const theme = useContext(ThemeContext);

  if (!theme) {
    console.error('Theme context is not provided.');
    return null;
  }

  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleInputChange = (text, index) => {
    if (/^\d$/.test(text) || text === '') {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      if (text !== '' && index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleResendCode = () => {
    setOtp(['', '', '', '']);
    inputRefs[0].current.focus();
    console.log('Resend OTP Code');
  };

  const handleVerify = () => {
    console.log('OTP Entered:', otp.join(''));
    navigation.navigate('BirthStoryZodiac');
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrowleft" size={styles.backButtonIconSize} style={[{ color: theme.colors.secondary }]} />
        </TouchableOpacity>

        <View style={[styles.progressBarContainer, { backgroundColor: theme.colors.primary }]}>
          <View style={[styles.progressBar, { backgroundColor: theme.colors.secondary }]} />
        </View>
      </View>

      <View style={styles.InnerContainer}>
        <Text style={[styles.title, { fontFamily: theme.fontfamily.bold, color: theme.colors.text, fontSize: theme.fontsize.large }]}>Verification Code</Text>
        <Text style={[styles.subtitle, { fontFamily: theme.fontfamily.regular, color: theme.colors.text }]}>Please enter code we just sent to</Text>
        <Text style={styles.phoneNumber}>+91 99292 77633</Text>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={inputRefs[index]}
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleInputChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              returnKeyType={index < otp.length - 1 ? 'next' : 'done'}
            />
          ))}
        </View>
      </View>
      <Text style={[styles.resendText, { fontFamily: theme.fontfamily.semibold, color: theme.colors.text }]}>Didn't receive OTP?</Text>
      <TouchableOpacity onPress={handleResendCode}>
        <Text style={[styles.resendButton, { fontFamily: theme.fontfamily.semibold, color: theme.colors.secondary }]}>Resend Code</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.verifyButton, { color: theme.colors.text, backgroundColor: theme.colors.primary }]} onPress={handleVerify}>
        <Text style={[{ fontFamily: theme.fontfamily.semibold, fontSize: theme.fontsize.medium }]}>Verify</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default OtpScreen; 
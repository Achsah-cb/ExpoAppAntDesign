import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import styles from '../styles/OtpStyle';
import { ThemeContext } from '../context/ThemeContext';
import { LinearGradient } from 'expo-linear-gradient';

const OtpScreen = () => {
  const { theme } = useContext(ThemeContext);
  const [code, setCode] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(75);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(prevTimer => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  const handleCodeChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const handleContinue = async () => {
    const fullCode = code.join('');
    try {
      const response = await axios.post('https://your-backend-api.com/verify-code', {
        phone: '+14151234567', // Replace with the actual phone number
        code: fullCode,
      });
      if (response.data.success) {
        Alert.alert('Success', 'Code verified successfully.');
        // Navigate to the next screen if needed
      } else {
        Alert.alert('Error', response.data.message || 'Invalid code.');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred. Please try again.');
    }
  };

  const handleResendCode = async () => {
    try {
      const response = await axios.post('https://your-backend-api.com/send-code', {
        phone: '+14151234567', // Replace with the actual phone number
      });
      if (response.data.success) {
        setTimer(75); // Reset timer
        Alert.alert('Success', 'Verification code sent.');
      } else {
        Alert.alert('Error', 'Failed to send verification code.');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred. Please try again.');
    }
  };

  return (
    <LinearGradient
      colors={[theme.gradient.start, theme.gradient.end]}
      style={styles.container}
    >
      <Text style={[styles.title, { color: theme.colors.globaltext }]}>
        Code <Text style={styles.bold}>Verification</Text>
      </Text>
      <Text style={[styles.subtitle, { color: theme.colors.placeholder }]}>
        Please enter the code we just sent to
      </Text>
      <Text style={[styles.phoneNumber, { color: theme.colors.primary }]}>
        +1 415-123-4567
      </Text>
      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={[styles.codeInput, { borderColor: theme.colors.border, color: theme.colors.globaltext }]}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleCodeChange(index, value)}
          />
        ))}
      </View>
      <Text style={[styles.resendText, { color: theme.colors.placeholder }]}>
        Resend code in {Math.floor(timer / 60)}:{('0' + (timer % 60)).slice(-2)}
      </Text>
      <TouchableOpacity onPress={handleResendCode} disabled={timer > 0}>
        <Text style={[styles.resendLink, { color: theme.colors.placeholder }]}>
          Didn't receive code? <Text style={styles.resendCode}>Resend code</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.continueButton, { backgroundColor: theme.colors.primary }]} onPress={handleContinue}>
        <Text style={[styles.continueButtonText, { color: theme.colors.buttonText }]}>Continue</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default OtpScreen;
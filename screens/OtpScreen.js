import React, { useState, useContext, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { Back } from "../components/icons";
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import ButtonComponent from '../components/Button';
import { ThemeContext } from '../context/ThemeContext';
import styles from '../styles/OtpStyle';
import axios from 'axios';

const OtpScreen = ({ route, navigation }) => {
  const theme = useContext(ThemeContext);
  const { phoneNumber, countryCode, from } = route.params; // "from" determines navigation flow
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(120); // Timer for 2 minutes
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]); // To handle input box refs for auto-focus

  // Timer Logic
  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(countdown);
    }
  }, [timer]);

  const formatPhoneNumber = (phone) => phone.replace(/\s+/g, '');

  // Resend OTP
  const resendOtp = async () => {
    try {
      setLoading(true);
  
      const payload = {
        phone: formatPhoneNumber(phoneNumber.trim()), // Trim and remove spaces
        countryCode: countryCode.trim(), // Ensure countryCode is clean
      };
  
      console.log('Resend OTP Payload:', payload); // Debugging payload
  
      const response = await axios.post('http://13.48.178.236:3000/user/resend-otp', payload);
      console.log('Resend OTP Response:', response.data);
  
      if (response.status === 201) {
        Alert.alert('Success', 'OTP resent successfully');
        setTimer(120); // Reset the timer
      } else {
        Alert.alert('Error', 'Failed to resend OTP');
      }
    } catch (error) {
      console.error('Error resending OTP:', error?.response?.data || error.message); // Debugging error
      Alert.alert('Error', 'Failed to resend OTP. Try again later.');
    } finally {
      setLoading(false);
    }
  };
  
  const verifyOtp = async () => {
    if (otp.length !== 6) {
      Alert.alert('Error', 'Please enter a valid 6-digit OTP');
      return;
    }
  
    try {
      setLoading(true);
  
      const payload = {
        phone: formatPhoneNumber(phoneNumber.trim()), // Trim and remove spaces
        countryCode: countryCode.trim(), // Ensure countryCode is clean
        userOtp: otp.trim(), // Ensure OTP is clean
      };
  
      console.log('Verify OTP Payload:', payload); // Debugging payload
  
      const response = await axios.post('http://13.48.178.236:3000/user/verify-otp', payload);
      console.log('Verify OTP Response:', response.data);
  
      if (response.status === 201) {
        const { message, token } = response.data; // Destructure response fields
  
        if (token) {
          Alert.alert('Success', message); // Show a success message to the user
          console.log('Navigation Condition:', { from });
  
          // Navigate based on "from" and presence of the token
          if (from === 'SignInScreen') {
            console.log('Navigating to YourNameScreen');
            navigation.navigate('YourNameScreen', { token }); // Pass token to NameScreen
          } else if (from === 'LoginScreen') {
            console.log('Navigating to ChatLandingScreen');
            navigation.navigate('ChatLandingScreen', { token }); // Pass token to HomeScreen
          }
        } else {
          Alert.alert('Error', 'Failed to verify OTP');
        }
      } else {
        Alert.alert('Error', response.data?.message || 'Invalid OTP');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error?.response?.data || error.message); // Debugging error
      Alert.alert('Error', 'Failed to verify OTP. Try again later.');
    } finally {
      setLoading(false);
    }
  };
  
  

  // Handle OTP Input Focus and Styling
  const handleOtpChange = (value, index) => {
    const newOtp = otp.split('');
    newOtp[index] = value;

    if (value) {
      if (index < 5) {
        inputRefs.current[index + 1]?.focus(); // Move to the next input
      }
    } else if (!value && index > 0) {
      inputRefs.current[index - 1]?.focus(); // Move to the previous input on backspace
    }

    setOtp(newOtp.join(''));
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && index > 0 && !otp[index]) {
      inputRefs.current[index - 1]?.focus(); // Focus on previous input
    }
  };

  return (
    <LinearGradient
      colors={['#EFE6FD', '#FFF9E6', '#FDE9EF']}
      locations={[0, 0.48, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
          {/* Back Button */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
              <Back />
            </TouchableOpacity>
          </View>

          {/* Title Section */}
          <View style={styles.itemContainer}>
            <View style={styles.titleContainer}>
              <Text style={[styles.title, { color: theme.colors.text, fontSize: theme.fontsize.large, fontFamily: theme.fontfamily.bold }]}>
                <Text style={[styles.title, { color: theme.colors.cyan, fontSize: theme.fontsize.large, fontFamily: theme.fontfamily.bold }]}>code</Text> verification
              </Text>
              <Text style={[styles.subtitle, { color: theme.colors.subText, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.semibold }]}>
              please enter the code we just sent to
              </Text>
              <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={[styles.phoneNumber, { color: theme.colors.cyan, fontFamily: theme.fontfamily.semibold }]}>
                  {countryCode} {phoneNumber}
                </Text>
                <Icon name="edit" size={16} color='#1C1C1C' />
              </TouchableOpacity>
            </View>

            {/* OTP Input */}
            <View style={[styles.otpInputContainer, { fontFamily: theme.fontfamily.medium2, color: theme.colors.text, borderRadius: theme.border.borderradius }]}>
              {[...Array(6)].map((_, index) => (
                <TextInput
                  key={index}
                  style={[
                    styles.otpInput,
                    {
                      borderColor: otp[index] ? theme.colors.grey : theme.colors.text, // Change border color
                    },
                    {borderRadius: theme.border.borderradius2 }
                  ]}
                  maxLength={1}
                  keyboardType="number-pad"
                  ref={(ref) => (inputRefs.current[index] = ref)} // Assign ref
                  value={otp[index] || ''}
                  onChangeText={(e) => handleOtpChange(e, index)}
                />
              ))}
            </View>

            {/* Timer and Resend Code */}
            <View style={styles.timerContainer}>
              {timer > 0 ? (
                <Text style={[styles.timer, { color: theme.colors.subText, fontSize: theme.fontsize.small, fontFamily: theme.fontfamily.semibold }]}>
                  resend code in <Text style={{ color: theme.colors.primary }}>{Math.floor(timer / 60)}:{String(timer % 60).padStart(2, '0')}</Text>
                </Text>
              ) : (
                <Text style={[{ color: theme.colors.text, fontSize: theme.fontsize.small, fontFamily: theme.fontfamily.semibold }]}>
                didn't receive code? {' '}
                <TouchableOpacity onPress={resendOtp} disabled={loading}>
                  <Text style={[styles.resendCode, { color: theme.colors.primary, fontFamily: theme.fontfamily.semibold }]}>resend code</Text>
                </TouchableOpacity>
                </Text>
              )}
            </View>
          </View>

          {/* Continue Button */}
          <View style={styles.continuebtn}>
            <ButtonComponent onPress={verifyOtp} />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default OtpScreen;
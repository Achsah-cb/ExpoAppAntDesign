import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, ActivityIndicator, Alert, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput from 'react-native-international-phone-number';
import axios from 'axios';
import { ThemeContext } from '../context/ThemeContext';
import styles from '../styles/SignInStyle';

const SignInScreen = ({ navigation }) => {
  const theme  = useContext(ThemeContext);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);

  if (!theme) {       // (!theme || !theme.gradient)
    console.error('Theme or theme.gradient is not defined.');
    return null;
  }

  const handleSelectedCountry = (country) => setSelectedCountry(country);

  const handlePhoneNumberChange = (phone) => setPhoneNumber(phone);

  const sendOtp = async () => {
    if (!selectedCountry || phoneNumber.length < 10) {
      Alert.alert('Error', 'Please enter a valid phone number and select a country code.');
      return;
    }

    setLoading(true);

    const payload = {
      phone: phoneNumber,
      countryCode: selectedCountry.callingCode,
    };

    try {
      const response = await axios.post('{{base_url}}/send-otp', payload, {
        headers: { 'Content-Type': 'application/json' },
      });

      setLoading(false);

      if (response.status === 200) {
        Alert.alert('Success', 'OTP sent successfully!');
        navigation.navigate('OtpScreen', { phoneNumber, countryCode: selectedCountry.callingCode });
      } else {
        Alert.alert('Error', 'Failed to send OTP. Please try again.');
      }
    } catch (error) {
      setLoading(false);
      console.error('Error sending OTP:', error);
      Alert.alert('Error', 'Failed to send OTP. Please check your connection and try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.keyboardAvoidingView}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <AntDesign name="back" size={30} color={theme.colors.globaltext} />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color: theme.colors.gold, fontFamily: theme.fontfamily.bold }]}>
            sign in
          </Text>
          <Text style={[styles.title, { color: theme.colors.globaltext, fontFamily: theme.fontfamily.bold }]}>
            with phone number
          </Text>
          <Text style={[styles.description, { color: theme.colors.placeholder, fontFamily: theme.fontfamily.semibold }]}>
            enter your number to receive a code.
          </Text>
        </View>

        <View style={[styles.phoneInputWrapper, {fontFamily: theme.fontfamily.light, color: theme.colors.text}]}>
          <PhoneInput
            value={phoneNumber}
            onChangePhoneNumber={handlePhoneNumberChange}
            selectedCountry={selectedCountry}
            onChangeSelectedCountry={handleSelectedCountry}
            placeholder="enter phone number"
            placeholderTextColor={theme.colors.placeholder}
            selectionColor={theme.colors.gold}
            modalStyles={{ backgroundColor: theme.colors.primary, fontFamily: theme.fontfamily.bold, }} // Customize modal background
            modalSearchInputSelectionColor={theme.colors.gold}
            modalNotFoundCountryMessage="Country not found"
            modalSearchInputPlaceholderTextColor={theme.colors.placeholder}
            textInputStyle={{
              color: theme.colors.text, // Text color
              fontFamily: theme.fontfamily.light, // Font family
            }}
            containerStyle={{
              borderWidth: 1,
              borderColor: theme.colors.gold, // Border color
              borderRadius: 10, // Rounded corners
              padding: 10, // Padding inside the input container
            }}
            flagButtonStyle={{
              backgroundColor: theme.colors.gold, // Flag button background color
              borderRadius: 20, // Round the flag button
            }}
            dropdownStyle={{
              backgroundColor: theme.colors.primary, // Dropdown background color
              borderRadius: 10, // Rounded corners for dropdown
            }}
          />
        </View>

        <TouchableOpacity
          style={[styles.continueButtonText, { backgroundColor: theme.colors.primary, color: theme.colors.globaltext }]}
          onPress={sendOtp}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator size="small" color={theme.colors.globaltext} />
          ) : (
            <Text style={[styles.buttonText, { color: theme.colors.buttontext, fontFamily: theme.fontfamily.semibold }]}>
              continue
            </Text>
          )}
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignInScreen;
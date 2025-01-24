import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, Alert, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Back } from "../components/icons";
import PhoneInput from 'react-native-international-phone-number';
import ButtonComponent from '../components/Button';
import axios from 'axios';
import { ThemeContext } from '../context/ThemeContext';
import styles from '../styles/SignInStyle';

const SignInScreen = ({ navigation }) => {
  const theme = useContext(ThemeContext);
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
    console.log('sendOtp triggered'); // Verify button is working
  
    if (!selectedCountry || phoneNumber.length < 10) {
      Alert.alert('Error', 'Please enter a valid phone number and select a country code.');
      return;
    }
  
    const payload = {
      phone: phoneNumber,
      countryCode: selectedCountry?.callingCode,
    };
  
    console.log('Payload:', payload); // Log payload
  
    setLoading(true);
  
    try {
      const response = await fetch('http://13.48.178.236:3000/user/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
  
      console.log('Response:', response); // Log raw response
      const data = await response.json();
      console.log('Response Data:', data); // Log parsed response
  
      setLoading(false);
  
      if (response.status === 201 || response.status === 200) {
        Alert.alert('Success', 'OTP sent successfully!');
        console.log('Navigation:', navigation); // Debug navigation
        navigation.navigate('OtpScreen', { phoneNumber, countryCode: selectedCountry.callingCode, from: 'SignInScreen' });
      } else {
        Alert.alert('Error', data?.message || 'Failed to send OTP. Please try again.');
      }
    } catch (error) {
      setLoading(false);
      console.error('Fetch Error:', error.message); // Log errors
      Alert.alert('Error', 'Failed to send OTP. Please check your connection and try again.');
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
        <SafeAreaView style={{ flex: 1 }} >
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}><Back /></TouchableOpacity>
            </View>

            <View style={styles.itemContainer}>
              <View style={styles.titleContainer}>
                <Text style={[styles.title, { color: theme.colors.gold, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }]}>
                  sign up{' '}<Text style={[styles.title, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }]}>
                    with phone{' '}{' '}{' '} number
                  </Text>
                </Text>
                <View>
                  <Text style={[styles.subtitle, { color: theme.colors.subText, fontFamily: theme.fontfamily.semibold, fontSize: theme.fontsize.medium }]}>
                    enter your number to receive the code.
                  </Text>
                </View>
              </View>


              <View style={[styles.phoneInputContainer, { fontFamily: theme.fontfamily.medium2, color: theme.colors.text, borderRadius: theme.border.borderradius }]}>
                <PhoneInput
                  value={phoneNumber}
                  onChangePhoneNumber={handlePhoneNumberChange}
                  selectedCountry={selectedCountry}
                  onChangeSelectedCountry={handleSelectedCountry}
                  placeholder="enter phone number"
                  placeholderTextColor={theme.colors.subText}
                  selectionColor={theme.colors.gold}
                  modalStyles={{ backgroundColor: theme.colors.primary, fontFamily: theme.fontfamily.semibold, }} // Customize modal background
                  modalSearchInputSelectionColor={theme.colors.gold}
                  modalNotFoundCountryMessage="Country not found"
                  modalSearchInputPlaceholderTextColor={theme.colors.subText}
                  textInputStyle={{
                    color: theme.colors.text, // Text color
                    fontFamily: theme.fontfamily.light, // Font family
                  }}
                  containerStyle={{
                    borderWidth: 1,
                    borderColor: theme.colors.gold, // Border color
                    borderRadius: theme.border.borderradius, // Rounded corners
                  }}
                  flagButtonStyle={{
                    backgroundColor: theme.colors.gold, // Flag button background color
                    borderRadius: theme.border.borderradius, // Round the flag button
                  }}
                  dropdownStyle={{
                    backgroundColor: theme.colors.primary, // Dropdown background color
                    borderRadius: theme.border.borderradius,
                    fontFamily: theme.fontfamily.medium2 // Rounded corners for dropdown
                  }}
                />
              </View>
            </View>
            <View style={styles.continuebtn}>
              <ButtonComponent onPress={sendOtp} />
            </View>
          </KeyboardAvoidingView>
    </SafeAreaView>
    </LinearGradient>
  );
};

export default SignInScreen;
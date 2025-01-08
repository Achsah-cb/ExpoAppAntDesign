import React, { useContext } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Button, InputItem } from "@ant-design/react-native";
import CountryPicker from "react-native-country-picker-modal";
import Icon from "react-native-vector-icons/FontAwesome";
import { ThemeContext } from '../context/ThemeContext';
import styles from "../styles/LoginStyle";
import AppLogoSvg from "../assets/image-svg/applogo.svg";

const LoginScreen = ({ navigation }) => {
    const [countryCode, setCountryCode] = React.useState("US");
    const [callingCode, setCallingCode] = React.useState("1");
    const [phoneNumber, setPhoneNumber] = React.useState("");

    const theme = useContext(ThemeContext);

    if (!theme) {
        console.error('Theme context is not provided.');
        return null;
    }

    const handleContinue = () => {
        navigation.navigate("OtpScreen", {
            phoneNumber: `+${callingCode}${phoneNumber}`,
        });
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            {/* Logo Section */}
            {/* <View style={styles.logo}><AppLogoSvg /></View> */}
            <View style={styles.innerContainer}>
                <View style={styles.titleView}><Text style={[styles.title, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }]}>My Phone Number is</Text></View>
                <Text style={[styles.description, { fontFamily: theme.fontfamily.regular, color: theme.colors.text }]}>
                    We'll need your phone number to send an OTP for verification.
                </Text>
                <View style={styles.phoneInputContainer}>
                    <TouchableOpacity style={styles.countryPicker}>
                        <CountryPicker
                            countryCode={countryCode}
                            withFilter
                            withFlag
                            withCallingCode
                            onSelect={(country) => {
                                setCountryCode(country.cca2);
                                setCallingCode(country.callingCode[0]);
                            }}
                            containerButtonStyle={styles.countryPicker}
                        />
                        <Text style={styles.callingCode}>+{callingCode}</Text>
                    </TouchableOpacity>
                    <Icon name="angle-down" size={16} color="#888" style={styles.downArrow} />
                    <TextInput
                        keyboardType="numeric"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        placeholder="Enter phone number"
                        style={[styles.phoneInput, { fontFamily: theme.fontfamily.regular, fontSize: theme.fontsize.medium }]}
                    />
                </View>

                <TouchableOpacity style={[styles.continueButton, { backgroundColor: theme.colors.primary }]} onPress={handleContinue}>
                    <Text style={[ { color: theme.colors.text, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.semibold }]}>Continue</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Text style={[styles.footerText, { fontFamily: theme.fontfamily.regular, color: theme.colors.text, fontSize: theme.fontsize.medium }]}>Don't have an account?
                    <Text style={[styles.signUpText, { color: theme.colors.text, fontFamily: theme.fontfamily.semibold, fontSize: theme.fontsize.medium }]} onPress={() => navigation.navigate("YourNameScreen")}> Sign up</Text>
                </Text>
            </View>
        </View>
    );
};

export default LoginScreen;

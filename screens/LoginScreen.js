import React, { useEffect } from "react";
import { View , Text, TouchableOpacity,TextInput } from "react-native";
import { Button, InputItem } from "@ant-design/react-native";
import CountryPicker from "react-native-country-picker-modal";
import Icon from "react-native-vector-icons/FontAwesome";
import AppLogo from "../assets/image-svg/splashlogo.svg";
import styles from "../styles/LoginStyle";

const LoginScreen = ({ navigation }) => {
    const [countryCode, setCountryCode] = React.useState("US");
    const [callingCode, setCallingCode] = React.useState("1");
    const [phoneNumber, setPhoneNumber] = React.useState("");

    const handleContinue = () => {
        navigation.navigate("OtpScreen", {
            phoneNumber: `+${callingCode}${phoneNumber}`,
        });
    };

    return (
        <View style={styles.container}>
            {/* Logo Section */}
            <View style={styles.logo}><AppLogo width={115} height={43} /></View>
            <View style={styles.innerContainer}>
            <View style={styles.titleView}><Text style={styles.title}>Let's start with your phone number</Text></View>
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
                    <TextInput keyboardType="numeric" value={phoneNumber} onChange={value => setPhoneNumber(value)} placeholder="Enter phone number" style={styles.phoneInput} />
            </View>

            <Button style={styles.continueButton} onPress={handleContinue}>
                <Text style={styles.continueButtonText}>Continue</Text>
            </Button>

            <View style={styles.orDivider}>
                <View style={styles.dividerLine} />
                <Text style={styles.orText}>or</Text>
                <View style={styles.dividerLine} />
            </View>

            <TouchableOpacity style={styles.socialButton}>
                <Icon name="facebook" size={20} color="#3b5998" style={styles.socialIcon} />
                <Text style={styles.socialButtonText}>Login with Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
                <Icon name="google" size={20} color="#db4437" style={styles.socialIcon} />
                <Text style={styles.socialButtonText}>Login with Google</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Don't have an account?
                    <Text style={styles.signUpText} onPress={() => navigation.navigate("Name")}> Sign up</Text>
                </Text>
            </View>
        </View>
    );
}

export default LoginScreen;
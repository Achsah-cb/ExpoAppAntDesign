import React, { useState, useContext } from "react";
import { View, Text, KeyboardAvoidingView, TouchableOpacity, Alert, TextInput, Keyboard, Platform } from "react-native";
import { Button } from '@ant-design/react-native';
import { UserContext } from "../context/UserContext";
import styles from "../styles/YourNameStyle";
import { ThemeContext } from '../context/ThemeContext';
import { Back } from "../components/icons";
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";

export default function YourNameScreen({ navigation }) {
    const theme = useContext(ThemeContext);
    const { updateUserData } = useContext(UserContext);
    const [userName, setUserName] = useState('');

    const handleSubmit = () => {
        if (!userName) {
            Alert.alert("Please enter the username.");
        } else {
            updateUserData('username', userName);
            navigation.navigate('DoBScreen');
        }
    };

    return (
        // linear gradient
        <LinearGradient
            colors={['#EFE6FD', '#FFF9E6', '#FDE9EF']}
            locations={[0, 0.48, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ flex: 1 }} 
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                        <Back />
                    </TouchableOpacity>
                </View>

                <View style={styles.progressContainer}>
                    <View style={styles.progressBar}>
                        <View style={[styles.progress, { backgroundColor: theme.colors.primary }]}></View>
                        <View style={styles.progress}></View>
                        <View style={styles.progress}></View>
                        <View style={styles.progress}></View>
                        <View style={styles.progress}></View>
                        <View style={styles.progress}></View>
                        <View style={styles.progress}></View>
                    </View>
                </View>

                <View style={styles.itemContainer}>
                    <View style={styles.textContainer}>
                        <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }]}>
                            <Text style={{ color: theme.colors.primary, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }}>what </Text>should we
                        </Text>
                        <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }]}>call you?</Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="enter your name here"
                            style={[styles.Input, { fontFamily: theme.fontfamily.regular, fontSize: theme.fontsize.medium }]}
                            value={userName}
                            onChangeText={setUserName}
                            onSubmitEditing={Keyboard.dismiss} // Dismiss keyboard on submit
                        />
                    </View>

                    {/* Continue Button */}
                    <KeyboardAvoidingView
                        style={styles.buttonContainer}
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        keyboardVerticalOffset={Platform.OS === 'ios' ? 230 : 330}
                    >
                        <Button
                            style={[styles.Button, { backgroundColor: theme.colors.primary }]}
                            onPress={handleSubmit}>
                            <Text style={[styles.buttonText, { color: theme.colors.btnText, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.semibold }]}>
                                Continue
                            </Text>
                        </Button>
                    </KeyboardAvoidingView>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}

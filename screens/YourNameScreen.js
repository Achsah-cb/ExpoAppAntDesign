import React, { useState, useContext, useEffect } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Alert, TextInput,  } from "react-native";
import { Button } from '@ant-design/react-native';
import { Ionicons } from 'react-native-vector-icons';
import { UserContext } from "../context/UserContext";
import * as Font from 'expo-font';
import styles from "../styles/YourNameStyle";
import { ThemeContext } from '../context/ThemeContext';


export default function YourNameScreen({ navigation }) {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const theme = useContext(ThemeContext);
    const { updateUserData } = useContext(UserContext);
    const [userName, setUserName] = useState('');

    const handleSubmit = () => {
        if (!userName) {
            Alert.alert("Please enter the username.")
        } else {
            updateUserData('username', userName);
            navigation.navigate('DoBScreen')
        }
    }
    const loadFonts = async () => {
        await Font.loadAsync({
            Montserrat: require('../assets/fonts/Montserrat-Regular.ttf'),
            'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
        });
        setFontsLoaded(true);
    };

    useEffect(() => {
        loadFonts();
    }, []);


    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}><Ionicons name="chevron-back" size={20} color="#D48806"/></TouchableOpacity>
            </View>
            <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                    <View style={styles.progress}></View>
                </View>
            </View>

            <View style={styles.itemContainer}>

                <Text style={[styles.mainText,  { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }]}>What's Your Name?</Text>
                <Text style={[styles.text,{ fontFamily: theme.fontfamily.regular, color: theme.colors.text }]}>Let's Go To Know Each other</Text>

                <TextInput placeholder="Enter your name"
                    style={[styles.Input, { fontFamily: theme.fontfamily.regular, fontSize: theme.fontsize.medium }]}
                    value={userName}
                    onChangeText={setUserName} />
                <Button style={[styles.Button,  { backgroundColor: theme.colors.primary }]} onPress={handleSubmit}><Text style={[styles.buttonText, { color: theme.colors.text, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.semibold }]}>Continue</Text></Button>
                {/*just for navigation purpose*/}
                {/*<TouchableOpacity style={{ top: 300, }} onPress={() => navigation.navigate('MainTabs')}><Text style={{ color: 'blue', fontStyle: 'italic' }}>Skip</Text></TouchableOpacity>*/}
                
            </View>
        </SafeAreaView>
    )
}

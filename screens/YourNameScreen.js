import React, { useState, useContext, useEffect } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Alert, TextInput,  } from "react-native";
import { Button } from '@ant-design/react-native';
import { Ionicons } from 'react-native-vector-icons';
import { UserContext } from "../context/UserContext";
import * as Font from 'expo-font';
import styles from "../styles/YourNameStyle";


export default function YourNameScreen({ navigation }) {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    const { updateUserData } = useContext(UserContext);
    const [userName, setUserName] = useState('');

    const handleSubmit = () => {
        if (!userName) {
            Alert.alert("Please enter the username.")
        } else {
            updateUserData('username', userName);
            navigation.navigate('EmailScreen')
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
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}><Ionicons name="chevron-back" size={20} /></TouchableOpacity>
            </View>
            <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                    <View style={styles.progress}></View>
                </View>
            </View>

            <View style={styles.itemContainer}>

                <Text style={styles.mainText}>What's Your Name?</Text>
                <Text style={styles.text}>Let's Go To Know Each other</Text>

                <TextInput placeholder="Enter your name"
                    style={styles.Input}
                    value={userName}
                    onChangeText={setUserName} />
                <Button style={styles.Button} onPress={handleSubmit}><Text style={styles.buttonText}>Continue</Text></Button>
                {/*just for navigation purpose*/}
                <TouchableOpacity style={{ top: 300, }} onPress={() => navigation.navigate('ChatScreen')}><Text style={{ color: 'blue', fontStyle: 'italic' }}>Go to ChatScreen</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

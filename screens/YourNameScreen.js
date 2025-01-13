import React, { useState, useContext, useEffect } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Alert, TextInput,  } from "react-native";
import { Button } from '@ant-design/react-native';
import { Ionicons } from 'react-native-vector-icons';
import { UserContext } from "../context/UserContext";
import * as Font from 'expo-font';
import styles from "../styles/YourNameStyle";
import { ThemeContext } from '../context/ThemeContext';
import { Back } from "../components/icons";


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
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}><Back/></TouchableOpacity>
            </View>
            <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                    <View style={[styles.progress, {backgroundColor:"#FF2A64"}]}></View>
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
                <Text style={[styles.mainText,  { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }]}>
                    <Text style={{color: theme.colors.primary, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large}}>what </Text>should we</Text>
                <Text style={[styles.mainText,  { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }]}>call you?</Text>
                <Text style={[styles.text,{ fontFamily: theme.fontfamily.regular, color: theme.colors.text }]}>enter your number to receive an code.</Text>
                </View>
                <TextInput placeholder="enter your name here"
                    style={[styles.Input, { fontFamily: theme.fontfamily.regular, fontSize: theme.fontsize.small }]}
                    value={userName}
                    onChangeText={setUserName} />
                <Button style={[styles.Button,  { backgroundColor: theme.colors.primary }]} onPress={handleSubmit}><Text style={[styles.buttonText, { color: theme.colors.btn, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.semibold }]}>continue</Text></Button>
                {/*just for navigation purpose*/}
                {/*<TouchableOpacity style={{ top: 300, }} onPress={() => navigation.navigate('MainTabs')}><Text style={{ color: 'blue', fontStyle: 'italic' }}>Skip</Text></TouchableOpacity>*/}
                
            </View>
        </SafeAreaView>
    )
}

import React, { useState, useContext} from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Alert, TextInput } from "react-native";
import { Button } from '@ant-design/react-native';
import { Ionicons } from 'react-native-vector-icons';
import { UserContext } from "../UserContext";
import styles from "../styles/YourNameStyle";

export default function YourNameScreen({navigation}){

    const { updateUserData } = useContext(UserContext);
    const [userName, setUserName] = useState('');

    const handleSubmit = () => {
        if (!userName){
            Alert.alert("Please enter the username.")
        }else{
            updateUserData('username', userName);
            navigation.navigate('EmailScreen')
        }
    }
    
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}><Ionicons name="arrow-back-outline" size={30} /></TouchableOpacity>
            <View style={styles.progressBar}><View style={styles.progress}></View></View>
            </View>

            <View style={styles.itemContainer}>
            
                <Text style={styles.mainText}>What's Your Name?</Text>
                <Text style={styles.text}>Let's Go To Know Each other</Text>
        
                <TextInput placeholder="Enter your name" 
                style={styles.Input}
                value={userName}
                onChangeText={setUserName}/>
                <Button style={styles.Button} onPress={handleSubmit}><Text style={styles.buttonText}>Continue</Text></Button>
            </View>
        </SafeAreaView>
    )
}

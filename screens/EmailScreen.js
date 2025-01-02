import React, { useState, useContext} from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Alert, TextInput } from "react-native";
import { Button } from '@ant-design/react-native';
import { Ionicons } from 'react-native-vector-icons';
import { UserContext } from "../context/UserContext";
import styles from '../styles/EmailStyle';

export default function EmailScreen({navigation}){

    const [email, setEmail] = useState("");
    const { updateUserData } = useContext(UserContext);

    const validateEmail = (email) => {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return regex.test(email);
    };
  
   
    const handleSubmit = () => {
      if (!validateEmail(email)) {
        Alert.alert("Invalid Email", "Please enter a valid email address.");
      } else {
        updateUserData('email',email)
        navigation.navigate('DoBScreen')
      }
    };

    return(
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

                <Text style={styles.mainText}>Email Address</Text>
                <Text style={styles.text}>We'll need your email to stay in touch</Text>
        
                <TextInput placeholder="Enter your email" 
                type="email" style={styles.Input} value={email}
                onChangeText={(text) => setEmail(text)}/>

            <Button style={styles.Button} onPress={handleSubmit}><Text style={styles.buttonText}>Continue</Text></Button>
            </View>
        </SafeAreaView>
    )
}

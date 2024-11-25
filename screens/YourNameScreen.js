import React, { useState, useContext} from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Platform, Alert } from "react-native";
import { Input, Button } from '@ant-design/react-native'
import { Ionicons } from 'react-native-vector-icons';
import { UserContext } from "../UserContext";
export default function YourNameScreen({navigation}){

    const { updateUserData } = useContext(UserContext);
    const [userName, setUserName] = useState('');

    const handleSubmit = () => {
        if (!userName){
            Alert.alert("Please enter the username.")
        }else{
            updateUserData('username', userName);
            navigation.navigate('Email')
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
        
                <Input placeholder="Enter your name" 
                style={styles.Input}
                value={userName}
                onChangeText={setUserName}/>
                <Button style={styles.Button} onPress={handleSubmit}><Text style={styles.buttonText}>Continue</Text></Button>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F9FBE7'
        
    },
    itemContainer:{
       alignItems:'center' ,
       margin:20,
       marginTop:10
       
    },
    Input:{
        width:325,
        height:56,
        borderRadius:20,
        backgroundColor:'white',
        borderColor:'#FFB200',
        borderWidth:1,
        marginTop:30,
        padding:10
    },
    Button:{
        width: 325,
        height: 56,
        borderRadius:20,
        backgroundColor:'#FFB200',
        borderColor:'#FFB200',
        marginTop:25,
    },
    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:18
    },
    mainText:{
        fontSize:24,
        fontWeight:'500',
        padding:10,
    },
    text:{
        fontSize:14,
    },
    header:{
        flexDirection:'row',
        ...Platform.select({ ios :{marginTop:0, }, android :{marginTop:30}})
    },
    backBtn:{
        margin:20,
        width:40,
        height:40,
        
    },
    progressBar:{
        backgroundColor:'#FFEC9E',
        width:180,
        height:8,
        borderRadius:50,
        margin:30,
        
    },
    progress:{
        backgroundColor:'#FFB200',
        width:45,
        height:8,
        borderRadius:50
    }
})
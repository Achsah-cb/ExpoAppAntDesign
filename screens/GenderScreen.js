import { useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Platform, Alert } from "react-native";
import { Button } from '@ant-design/react-native';
import { Ionicons } from 'react-native-vector-icons';
import { UserContext } from "../UserContext";

export default function GenderScreen({navigation}){

    const [isActive, setIsActive] = useState(null);
    const { updateUserData } = useContext(UserContext);

    const handleSubmit = () => {
        if (!isActive) {
            Alert.alert("Select your gender.");
        } else {
            const gender = isActive === 'button1' ? 'Male' : 'Female';
            updateUserData('gender', gender)
            navigation.navigate("LookingForScreen");
        }
    };
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.backBtn}><Ionicons name="arrow-back-outline" size={30}/></TouchableOpacity>
            <View style={styles.progressBar}><View style={styles.progress}></View></View>
            </View>
            <View style={styles.itemContainer}>
            
                <Text style={styles.mainText}>What's Your Gender?</Text>
                <Text style={styles.text}>Tell us about your gender</Text>
        
                <TouchableOpacity style={[styles.genderButton, isActive === 'button1' && styles.activeBtn]} onPress={()=>setIsActive('button1')}>
                    <Ionicons name="male" size={40} padding={20}/>
                    <Text style={{fontWeight:'500',fontSize:15}}>Male</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.genderButton, isActive === 'button2' && styles.activeBtn]} onPress={()=>setIsActive('button2')}>
                    <Ionicons name="female" size={40} padding={20}/>
                    <Text style={{fontWeight:'500',fontSize:15}}>Female</Text>
                    </TouchableOpacity>

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
    Button:{
        width: 325,
        height: 56,
        borderRadius:20,
        backgroundColor:'#FFB200',
        borderColor:'#FFB200',
        position:'relative',
        ...Platform.select({android:{top:50}, ios:{top:135}})
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
        marginBottom:40
    },
    genderButton:{
        width:160,
        height:160,
        borderRadius:100,
        margin:20,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },
    activeBtn:{
        backgroundColor:'#FFB200',
    },
    backBtn:{
        margin:20,
        width:40,
        height:40,
        
    },
    header:{
        flexDirection:'row',
        ...Platform.select({ ios :{marginTop:0, }, android :{marginTop:30}})
    },
    progressBar:{
        backgroundColor:'#FFEC9E',
        width:180,
        height:8,
        borderRadius:50,
        margin:30
    },
    progress:{
        backgroundColor:'#FFB200',
        width:112.5,
        height:8,
        borderRadius:50
    }
})
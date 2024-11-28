import { useState, useContext } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, Alert, Dimensions } from "react-native";
import { Button } from '@ant-design/react-native';
import { Ionicons } from 'react-native-vector-icons';
import { UserContext } from "../context/UserContext";
import styles from "../styles/GenderStyle";

const { width, height } = Dimensions.get('window');
export const responsiveWidth = (percentage) => (width * percentage) / 100;

export default function GenderScreen({navigation}){
    
    const iconSize = responsiveWidth(10)

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
                    <Ionicons name="male" size={iconSize} padding={20}/>
                    <Text style={{fontWeight:'500',fontSize:responsiveWidth(3)}}>Male</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.genderButton, isActive === 'button2' && styles.activeBtn]} onPress={()=>setIsActive('button2')}>
                    <Ionicons name="female" size={iconSize} padding={20}/>
                    <Text style={{fontWeight:'500',fontSize:responsiveWidth(3)}}>Female</Text>
                </TouchableOpacity>      
            </View>
            <View style={styles.continuebtn}>
                <Button style={styles.Button} onPress={handleSubmit}><Text style={styles.buttonText}>Continue</Text></Button>
            </View>
        </SafeAreaView>
    )
}

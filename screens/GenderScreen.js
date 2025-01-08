import { useState, useContext } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, Alert, Dimensions } from "react-native";
import { Button } from '@ant-design/react-native';
import { Ionicons } from 'react-native-vector-icons';
import { UserContext } from "../context/UserContext";
import styles from "../styles/GenderStyle";
import { ThemeContext } from '../context/ThemeContext';

const { width, height } = Dimensions.get('window');
export const responsiveWidth = (percentage) => (width * percentage) / 100;

export default function GenderScreen({navigation}){
    
    const iconSize = responsiveWidth(10)
    const theme = useContext(ThemeContext);
    const [isActive, setIsActive] = useState(null);
    const { updateUserData } = useContext(UserContext);

    const handleSubmit = () => {
        if (!isActive) {
            Alert.alert("Select your gender.");
        } else {
            const gender = isActive === 'button1' ? 'Male' : 'Female';
            updateUserData('gender', gender)
            navigation.navigate("TimesScreen");
        }
    };
    return(
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
            
            <Text style={[styles.mainText,  { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }]}>What's Your Gender?</Text>
            <Text style={[styles.text,{ fontFamily: theme.fontfamily.regular, color: theme.colors.text }]}>Tell us about your gender</Text>
        
                <TouchableOpacity style={[styles. genderButton,{ backgroundColor: theme.colors.primary }, isActive === 'button1' && { backgroundColor: theme.colors.secondary }]} onPress={()=>setIsActive('button1')}>
                    <Ionicons name="male" size={iconSize} padding={20}/>
                    <Text style={[{fontWeight:'500',fontSize:responsiveWidth(3)},{ color: theme.colors.text, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.semibold }]}>Male</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles. genderButton,{ backgroundColor: theme.colors.primary }, isActive === 'button2' && { backgroundColor: theme.colors.secondary }]} onPress={()=>setIsActive('button2')}>
                    <Ionicons name="female" size={iconSize} padding={20}/>
                    <Text style={[{fontWeight:'500',fontSize:responsiveWidth(3)},{ color: theme.colors.text, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.semibold }]}>Female</Text>
                </TouchableOpacity>      
            </View>
            <View style={styles.continuebtn}>
            <Button style={[styles.Button,  { backgroundColor: theme.colors.primary }]} onPress={handleSubmit}><Text style={[styles.buttonText, { color: theme.colors.text, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.semibold }]}>Continue</Text></Button>
            </View>
        </SafeAreaView>
    )
}

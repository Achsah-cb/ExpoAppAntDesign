import { useState, useContext } from "react";
import { View, Text, TouchableOpacity, Alert, Dimensions } from "react-native";
import { Button } from '@ant-design/react-native';
import { UserContext } from "../context/UserContext";
import styles from "../styles/GenderStyle";
import { ThemeContext } from '../context/ThemeContext';
import { Back } from "../components/icons";
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get('window');
export const responsiveWidth = (percentage) => (width * percentage) / 100;

export default function GenderScreen({ navigation }) {

    const theme = useContext(ThemeContext);
    const [isActive, setIsActive] = useState(null);
    const { updateUserData } = useContext(UserContext);
    const buttonSize = responsiveWidth(5);

    const handleSubmit = () => {
        if (!isActive) {
            Alert.alert("Select your gender.");
        } else {
            let gender;
            switch (isActive) {
                case 'button1':
                    gender = 'Women';
                    break;
                case 'button2':
                    gender = 'Men';
                    break;
                case 'button3':
                    gender = 'Nonbinary';
                    break;
                default:
                    gender = 'Unknown';
                    break;
            }
            updateUserData('gender', gender)
            navigation.navigate("HeightScreen");
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
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}><Back /></TouchableOpacity>
            </View>
            {/* Progress bar */}
            <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                    <View style={[styles.progress, { backgroundColor: theme.colors.primary }]}></View>
                    <View style={[styles.progress, { backgroundColor: theme.colors.gold }]}></View>
                    <View style={[styles.progress, { backgroundColor: theme.colors.blue }]}></View>
                    <View style={styles.progress}></View>
                    <View style={styles.progress}></View>
                    <View style={styles.progress}></View>
                    <View style={styles.progress}></View>
                </View>
            </View>
            <View style={styles.itemContainer}>
                <View style={styles.textContainer}>
                    <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }]}>
                        <Text style={{ color: theme.colors.blue, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }}>what's </Text>your</Text>
                    <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }]}>gender?</Text>
                    <Text style={[styles.text, { fontFamily: theme.fontfamily.semibold, color: theme.colors.subText, marginTop:8, opacity:0.8 }]}>let us know your gender.</Text>
                </View>
                {/* Women */}
                <TouchableOpacity style={[styles.genderButton, { backgroundColor: theme.colors.background }, isActive === 'button1' && { borderColor: theme.colors.blue, borderWidth:responsiveWidth(0.5) }]} onPress={() => setIsActive('button1')}>
                    <Text style={[{ fontWeight: '500', fontSize: responsiveWidth(3) }, { color: theme.colors.text, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.semibold }, isActive === 'button1' && { color: theme.colors.text }]}>Women</Text>
                    <View style={[{width:buttonSize,
                            height:buttonSize,
                            borderWidth:responsiveWidth(0.1),
                            borderColor:"#00000",
                            borderRadius:buttonSize/2}, isActive === 'button1' && {borderWidth:responsiveWidth(0.5),borderColor:"#FFFFFF",backgroundColor: theme.colors.blue}]}></View>
                </TouchableOpacity>
                {/* Men */}
                <TouchableOpacity style={[styles.genderButton, { backgroundColor: theme.colors.background  }, isActive === 'button2' && { borderColor: theme.colors.blue, borderWidth:responsiveWidth(0.5) }]} onPress={() => setIsActive('button2')}>
                    <Text style={[{ fontWeight: '500', fontSize: responsiveWidth(3) }, { color: theme.colors.text, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.semibold }, isActive === 'button2' && { color: theme.colors.text }]}>Men</Text>
                    <View style={[{width:buttonSize,
                            height:buttonSize,
                            borderWidth:responsiveWidth(0.1),
                            borderColor:"#00000",
                            borderRadius:buttonSize/2}, isActive === 'button2' && {borderWidth:responsiveWidth(0.5),borderColor:"#FFFFFF",backgroundColor: theme.colors.blue}]}></View>
                </TouchableOpacity>
                {/* Nonbinary */}
                <TouchableOpacity style={[styles.genderButton, { backgroundColor: theme.colors.background  }, isActive === 'button3' && { borderColor: theme.colors.blue, borderWidth:responsiveWidth(0.5) }]} onPress={() => setIsActive('button3')}>
                    <Text style={[{ fontWeight: '500', fontSize: responsiveWidth(3) }, { color: theme.colors.text, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.semibold }, isActive === 'button3' && { color: theme.colors.text }]}>Nonbinary</Text>
                    <View style={[{width:buttonSize,
                            height:buttonSize,
                            borderWidth:responsiveWidth(0.1),
                            borderColor:"#00000",
                            borderRadius:buttonSize/2}, isActive === 'button3' && {borderWidth:responsiveWidth(0.5),borderColor:"#FFFFFF",backgroundColor: theme.colors.blue}]}></View>
                </TouchableOpacity>
            </View>
            {/* continue button */}
            <View style={styles.continuebtn}>
                <Button style={[styles.Button, { backgroundColor: theme.colors.primary }]} onPress={handleSubmit}>
                    <Text style={[styles.buttonText, { color: theme.colors.btnText, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.semibold }]}>Continue</Text>
                </Button>
            </View>
        </SafeAreaView>
    </LinearGradient>
    )
}

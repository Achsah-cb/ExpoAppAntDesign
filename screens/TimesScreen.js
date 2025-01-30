import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { Button } from '@ant-design/react-native';
import { UserContext } from "../context/UserContext";
import styles from "../styles/TimesStyle";
import { ThemeContext } from '../context/ThemeContext';
import { Back, Afternoon, Morning, Evening, Night } from "../components/icons";
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";

export default function TimesScreen({ navigation }) {

    const [selectItem, setSelectItem] = useState(null);
    const { updateUserData } = useContext(UserContext);
    const theme = useContext(ThemeContext);

    const handleSubmit = () => {
        if (!selectItem) {
            Alert.alert("Please select your preferred timing.");
        } else {
            let timing;
            switch (selectItem) {
                case 'slot1':
                    timing = 'Morning';
                    break;
                case 'slot2':
                    timing = 'Afternoon';
                    break;
                case 'slot3':
                    timing = 'Evening';
                    break;
                case 'slot4':
                    timing = 'Night';
                    break;
                default:
                    timing = 'Unknown';
                    break;
            }
            updateUserData('preffered_time_call', timing)
            navigation.navigate("InterestScreen");
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
            {/* progress bar */}
            <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                    <View style={[styles.progress, { backgroundColor: theme.colors.primary }]}></View>
                    <View style={[styles.progress, { backgroundColor: theme.colors.gold }]}></View>
                    <View style={[styles.progress, { backgroundColor: theme.colors.blue }]}></View>
                    <View style={[styles.progress, { backgroundColor: theme.colors.orange }]}></View>
                    <View style={[styles.progress, { backgroundColor: theme.colors.pink }]}></View>
                    <View style={styles.progress}></View>
                    <View style={styles.progress}></View>
                </View>
            </View>

            <View style={styles.itemContainer}>
                <View style={styles.textContainer}>
                    <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }]}>
                        <Text style={{ color: theme.colors.pink, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }}>when </Text>can</Text>
                    <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }]}>take the call?</Text>
                    <Text style={[styles.text, { fontFamily: theme.fontfamily.semibold, color: theme.colors.subText, marginTop:8, opacity:0.8 }]}>Choose a time when you’re free</Text>
                    <Text style={[styles.text, { fontFamily: theme.fontfamily.semibold, color: theme.colors.subText, opacity:0.8 }]}>to take the call.</Text>
                </View>
            </View>
            {/* Time slots */}
            <View style={styles.timeContainer}>
                <View style={styles.slot1n2}>
                    {/* morning */}
                    <TouchableOpacity style={[styles.slots, selectItem === 'slot1' && {borderColor: theme.colors.pink, borderWidth:2, borderRadius:20}]} onPress={() => setSelectItem('slot1')}>
                        <Morning />
                    </TouchableOpacity>
                    {/* afternoon */}
                    <TouchableOpacity style={[styles.slots, selectItem === 'slot2' && {borderColor: theme.colors.pink, borderWidth:2, borderRadius:20}]} onPress={() => setSelectItem('slot2')}>
                        <Afternoon />
                    </TouchableOpacity>
                </View>
                <View style={styles.slot3n4}>
                    {/* evening */}
                    <TouchableOpacity style={[styles.slots, selectItem === 'slot3' && {borderColor: theme.colors.pink, borderWidth:2, borderRadius:20}]} onPress={() => setSelectItem('slot3')}>
                        <Evening />
                    </TouchableOpacity>
                    {/* night */}
                    <TouchableOpacity style={[styles.slots, selectItem === 'slot4' && {borderColor: theme.colors.pink, borderWidth:2, borderRadius:20}]} onPress={() => setSelectItem('slot4')}>
                        <Night />
                    </TouchableOpacity>
                </View>
            </View>
            {/* continue button */}
            <View style={styles.continuebtn}>
                <Button style={[styles.Button, { backgroundColor: theme.colors.primary }]} onPress={handleSubmit}>
                    <Text style={[styles.buttonText, { color: theme.colors.btnText, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.semibold }]}>Continue</Text>
                </Button>
            </View>
        </SafeAreaView>
        </LinearGradient>
    );
}

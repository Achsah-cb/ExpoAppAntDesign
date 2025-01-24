import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { Button } from "@ant-design/react-native";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";
import { Back } from "../components/icons";
import styles from "../styles/DobStyle";
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';

export default function DobScreen({ navigation }) {
    const { updateUserData } = useContext(UserContext);
    const theme = useContext(ThemeContext);

    const [date, setDate] = useState(dayjs());

    const handleSubmit = () => {
        if (!date) {
            Alert.alert("Please select your complete date of birth.");
            return;
        }
        updateUserData("dob", date.format("YYYY-MM-DD"));
        navigation.navigate("GenderScreen");
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
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                        <Back />
                    </TouchableOpacity>
                </View>

                <View style={styles.progressContainer}>
                    <View style={styles.progressBar}>
                        <View style={[styles.progress, { backgroundColor: "#FF2A64" }]}></View>
                        <View style={[styles.progress, { backgroundColor: theme.colors.gold }]}></View>
                        <View style={styles.progress}></View>
                        <View style={styles.progress}></View>
                        <View style={styles.progress}></View>
                        <View style={styles.progress}></View>
                        <View style={styles.progress}></View>
                    </View>
                </View>

                <View style={styles.itemContainer}>
                    <View style={styles.textContainer}>
                        <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }]}>
                            <Text style={{ color: "#F39C12" }}>what’s </Text>your date
                        </Text>
                        <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }]}>
                            of birth?
                        </Text>
                        <Text style={[styles.text, { fontFamily: theme.fontfamily.semibold, color: theme.colors.subText, marginTop: 8, opacity: 0.8 }]}>
                            we need this to verify your age
                        </Text>
                        <Text style={[styles.text, { fontFamily: theme.fontfamily.semibold, color: theme.colors.subText, opacity: 0.8 }]}>
                            and personalize your experience.
                        </Text>
                    </View>
                     {/* date picker */}
                    <View style={styles.datepicker}>
                        <DateTimePicker
                            mode="single"
                            date={date}
                            onChange={(params) => setDate(params.date)}
                            headerButtonsPosition="right"
                            headerButtonColor="blue"
                            calendarTextStyle={{fontWeight:'600', fontFamily:'Montserrat-SemiBold'}}
                            selectedTextStyle={{color:'blue', fontWeight:'700', fontFamily:'Montserrat-SemiBold'}}
                            selectedItemColor="#C4D9FF"
                            monthContainerStyle={{color:'#000000', opacity:0.5}}
                            todayContainerStyle={{backgroundColor:'#ffffff', borderColor:"#ffffff"}}
                            todayTextStyle={{color:'blue'}}
                            />
                    </View>

                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        style={[styles.Button, { backgroundColor: theme.colors.primary }]}
                        onPress={handleSubmit}
                    >
                        <Text style={[styles.buttonText, { color: theme.colors.btnText, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.semibold }]}>
                            continue
                        </Text>
                    </Button>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}

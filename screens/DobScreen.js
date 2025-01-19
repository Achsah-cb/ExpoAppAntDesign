import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { Button } from "@ant-design/react-native";
import { Picker } from "@react-native-picker/picker";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";
import { Back } from "../components/icons";
import styles from "../styles/DobStyle";
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";

export default function DobScreen({ navigation }) {
    const { updateUserData } = useContext(UserContext);
    const theme = useContext(ThemeContext);

    const [selectedYear, setSelectedYear] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");
    const [selectedDay, setSelectedDay] = useState("");

    const years = Array.from({ length: 100 }, (_, i) => (new Date().getFullYear() - i).toString());
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sept", "Oct", "Nov", "Dec",
    ];
    const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());

    const handleSubmit = () => {
        if (!selectedYear || !selectedMonth || !selectedDay) {
            Alert.alert("Please select your complete date of birth.");
            return;
        }
        const monthIndex = months.indexOf(selectedMonth) + 1;
        const formattedDate = `${selectedYear}-${String(monthIndex).padStart(2, "0")}-${selectedDay.padStart(2, "0")}`;
        updateUserData("dob", formattedDate);
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
                    <Text style={[styles.text, { fontFamily: theme.fontfamily.semibold, color: theme.colors.subText, marginTop:8, opacity:0.8 }]}>
                        we need this to verify your age
                    </Text>
                    <Text style={[styles.text, { fontFamily: theme.fontfamily.semibold, color: theme.colors.subText, opacity:0.8 }]}>
                        and personalize your experience.
                    </Text>
                </View>
            <View style={styles.datepicker}>
                {/* Dropdown for Year */}
                <View style={styles.pickerWrapper}>
                <Picker
                    selectedValue={selectedYear}
                    onValueChange={(itemValue) => setSelectedYear(itemValue)}
                    style={styles.picker} 
                    itemStyle={{ fontWeight:'500'}}
                >
                    <Picker.Item label="Year" value="" />
                    {years.map((year) => (
                        <Picker.Item key={year} label={year} value={year} />
                    ))}
                </Picker>
                </View>
                {/* Dropdown for Month */}
                <View style={styles.pickerWrapper}>
                <Picker
                    selectedValue={selectedMonth}
                    onValueChange={(itemValue) => setSelectedMonth(itemValue)}
                    style={styles.picker}
                    itemStyle={{ fontWeight:'500'}}
                >
                    <Picker.Item label="Month" value="" />
                    {months.map((month) => (
                        <Picker.Item key={month} label={month} value={month} />
                    ))}
                </Picker>
                </View>

                {/* Dropdown for Day */}
                <View style={styles.pickerWrapper}>
                <Picker
                    selectedValue={selectedDay}
                    onValueChange={(itemValue) => setSelectedDay(itemValue)}
                    style={styles.picker}
                    itemStyle={{ fontWeight:'500'}}
                >
                    <Picker.Item label="Day" value="" />
                    {days.map((day) => (
                        <Picker.Item key={day} label={day} value={day} />
                    ))}
                </Picker>
                </View>
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

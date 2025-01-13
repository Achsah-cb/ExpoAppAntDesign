import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, Animated, SafeAreaView, Alert } from "react-native";
import { Button } from "@ant-design/react-native";
import { Ionicons } from "react-native-vector-icons";
import DatePicker from '@dietime/react-native-date-picker';
import { UserContext } from "../context/UserContext";
import ScrollPicker from "react-native-wheel-scrollview-picker";
import styles from "../styles/DobStyle";
import { ThemeContext } from '../context/ThemeContext';
import { Back } from "../components/icons";

export default function DobScreen({ navigation }) {
    const { updateUserData } = useContext(UserContext);
    const [date, setDate] = useState();

    const [selectAge, setSelectAge] = useState(18);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const theme = useContext(ThemeContext);

    const ages = Array.from({ length: 70 - 18 + 1 }, (_, i) => i + 18);

    const handleSelectAge = (age) => {
        setSelectAge(age);
    };

    const handleSubmit = () => {
        if (!selectAge) {
            Alert.alert("Select your age.");
        } else {
            updateUserData("age", selectAge);
            navigation.navigate("GenderScreen");
        }
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}><Back /></TouchableOpacity>
            </View>
            <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                    <View style={[styles.progress, { backgroundColor: "#FF2A64" }]}></View>
                    <View style={[styles.progress, { backgroundColor: "#F39C12" }]}></View>
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
                        <Text style={{ color: "#F39C12", fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }}>what’s </Text>your date</Text>
                    <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }]}>of birth?</Text>
                    <Text style={[styles.text, { fontFamily: theme.fontfamily.regular, color: theme.colors.text }]}>we need this to verify your age</Text>
                    <Text style={[styles.text, { fontFamily: theme.fontfamily.regular, color: theme.colors.text }]}>and personalize your experience.</Text>
                </View>
                <View style={styles.scrollpicker}>
                    <DatePicker
                        value={date}
                        onChange={(value) => setDate(value)}
                        format="yyyy-mm-dd"
                        style={styles.datepicker}
                    />
                    {/*<ScrollPicker
                        dataSource={ages}
                        selectedIndex={ages.indexOf(Number(selectAge))}
                        renderItem={(data, index) => {
                            const isSelected = selectAge === data;
                            const distanceFromSelected = Math.abs(index - ages.indexOf(Number(selectAge)));
                            const opacity = distanceFromSelected === 0 ? 1 : 0.9 - (distanceFromSelected / 7);
                            const scale = distanceFromSelected === 0 ? 1.5 : 1.2 - (distanceFromSelected / 7) * 0.7;

                            return (
                                <Animated.Text
                                    style={[
                                        styles.itemText,
                                        {
                                            opacity,
                                            transform: [
                                                {
                                                    scale,
                                                },
                                            ],
                                            color: isSelected ? "#D5912E" : "#000",
                                        },
                                    ]}
                                >
                                    {data}
                                </Animated.Text>
                            );
                        }}
                        onValueChange={handleSelectAge}
                        wrapperHeight={400} // Height of the wrapper
                        itemHeight={60} // Height of each item in the picker
                        highlightColor="#D5912E"
                        highlightBorderWidth={3}
                        wrapperBackground="#FCF2D6"
                    />*/}
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Button style={[styles.Button, { backgroundColor: theme.colors.primary }]} onPress={handleSubmit}><Text style={[styles.buttonText, { color: theme.colors.btn, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.semibold }]}>continue</Text></Button>
            </View>
        </SafeAreaView>
    );
}

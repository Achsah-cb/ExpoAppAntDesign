import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, Animated, SafeAreaView, Alert } from "react-native";
import { Button } from "@ant-design/react-native";
import { Ionicons } from "react-native-vector-icons";
import { UserContext } from "../context/UserContext";
import ScrollPicker from "react-native-wheel-scrollview-picker";
import styles from "../styles/DobStyle";
import { ThemeContext } from '../context/ThemeContext';

export default function DobScreen({ navigation }) {
    const { updateUserData } = useContext(UserContext);
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
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}><Ionicons name="chevron-back" size={20} color="#D48806"/></TouchableOpacity>
            </View>
            <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                    <View style={styles.progress}></View>
                </View>
            </View>
            <View style={styles.itemContainer}>
                <Text style={[styles.mainText,  { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }]}>How Old Are You?</Text>
                <Text style={[styles.text,{ fontFamily: theme.fontfamily.regular, color: theme.colors.text }]}>Please provide your age in years</Text>
                <View style={styles.box}></View>
                <View style={styles.scrollpicker}>
                   
                    <ScrollPicker
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
                    />
                </View>
            </View>
            <View style={styles.buttonContainer}>
            <Button style={[styles.Button,  { backgroundColor: theme.colors.primary }]} onPress={handleSubmit}>
                <Text style={[styles.buttonText, { color: theme.colors.text, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.semibold }]}>Continue
                    </Text></Button>
            </View>
        </SafeAreaView>
    );
}

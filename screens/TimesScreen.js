import React, { useState, useContext } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Alert } from "react-native";
import { Button } from '@ant-design/react-native';
import { Ionicons } from 'react-native-vector-icons';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { UserContext } from "../context/UserContext";
import styles from "../styles/TimesStyle";
import { ThemeContext } from '../context/ThemeContext';

export default function TimesScreen({ navigation }) {
    const [selectItem, setSelectItem] = useState(null);
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(24);
    const { updateUserData } = useContext(UserContext);
    const theme = useContext(ThemeContext);

    // Fixed time points
    const timeSlots = [
        { label: "9 AM", value: 0 },
        { label: "12 PM", value: 6 },
        { label: "4 PM", value: 12 },
        { label: "8 PM", value: 18 },
        { label: "11 PM", value: 24 }
    ];

    // Define the timing slots
    const handleSelect = (value) => {
        setSelectItem(value);
        switch (value) {
            case "Mid-morning (9 AM - 12 PM)":
                setStartTime(0);
                setEndTime(6);
                break;
            case "Afternoon (12 PM - 4 PM)":
                setStartTime(6);
                setEndTime(12);
                break;
            case "Evening (4 PM - 8 PM)":
                setStartTime(12);
                setEndTime(18);
                break;
            case "Late evening (8 PM - 11 PM)":
                setStartTime(18);
                setEndTime(24);
                break;
            case "No specific preference, anytime works!":
                setStartTime(0);
                setEndTime(24);
                break;
            default:
                setStartTime(0);
                setEndTime(24);
        }
    };

    // Handle slider value change
    const handleSliderChange = (values) => {
        setStartTime(values[0]);
        setEndTime(values[1]);

        // Automatically select the radio button based on slider values
        if (values[0] >= 0 && values[0] < 6) {
            setSelectItem("Mid-morning (9 AM - 12 PM)");
        } else if (values[0] >= 6 && values[0] < 12) {
            setSelectItem("Afternoon (12 PM - 4 PM)");
        } else if (values[0] >= 12 && values[0] < 18) {
            setSelectItem("Evening (4 PM - 8 PM)");
        } else if (values[0] >= 18 && values[0] < 24) {
            setSelectItem("Late evening (8 PM - 11 PM)");
        } else {
            setSelectItem("No specific preference, anytime works!");
        }
    };

    const handleSubmit = () => {
        if (!selectItem) {
            Alert.alert("Please select your preferred timing.");
        } else {
            updateUserData('preferred Timing', selectItem);
            navigation.navigate("InterestScreen");
        }
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}><Ionicons name="chevron-back" size={20} color="#D48806" /></TouchableOpacity>
            </View>
            <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                    <View style={styles.progress}></View>
                </View>
            </View>
            <View style={styles.itemContainer}>
                <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }]}>Availability Timings</Text>
                <Text style={[styles.mainText2, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }]}>For Matchmaking</Text>

                {/* MultiSlider to select time range */}
                <View>
                    <MultiSlider
                        values={[startTime, endTime]}  // Dynamically controlled by selected time slot
                        sliderLength={300}
                        min={0}
                        max={24}
                        step={6}  // Fixed step to only allow values at predefined time slots
                        onValuesChange={handleSliderChange} // Call the new function on slider change
                        selectedStyle={{ backgroundColor: "#428BC1" }}
                        unselectedStyle={{ backgroundColor: "#D4D3D0" }}
                        trackStyle={{
                            height: 8,
                            borderRadius: 8,
                            backgroundColor: "#C29225",
                        }}
                        markerStyle={{
                            backgroundColor: '#428BC1',
                            height: 15,
                            width: 15,
                            borderRadius: 10,
                            marginTop: 7
                        }}
                    />
                </View>

                <View style={styles.timeText}>
                    {timeSlots.map((slot, index) => (
                        <Text key={index} style={[styles.timeLabelText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.smaller }]}>
                            {slot.label}
                        </Text>
                    ))}
                </View>

                <Text style={[styles.text, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.medium }]}>Pick your preferred time slot</Text>
                <Text style={[styles.text2, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.medium }]}>for you to connect?</Text>

                <View style={styles.list}>
                    {["Mid-morning (9 AM - 12 PM)", "Afternoon (12 PM - 4 PM)", "Evening (4 PM - 8 PM)", "Late evening (8 PM - 11 PM)", "No specific preference, anytime works!"].map((option, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[styles.radio, selectItem === option && styles.radioSelected]}
                            onPress={() => handleSelect(option)}
                        >
                            <View style={[styles.circle, selectItem === option && styles.circleSelected]} />
                            <Text style={[styles.radioText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.medium }]}>{option}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <View style={styles.continuebtn}>
                <Button style={[styles.Button, { backgroundColor: theme.colors.primary }]} onPress={handleSubmit}>
                    <Text style={[styles.buttonText, { color: theme.colors.text, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.semibold }]}>Continue</Text>
                </Button>
            </View>
        </SafeAreaView>
    );
}

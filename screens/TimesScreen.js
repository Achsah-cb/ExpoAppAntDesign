import React, { useState, useContext } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Alert } from "react-native";
import { Button } from '@ant-design/react-native';
import { Ionicons } from 'react-native-vector-icons';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { UserContext } from "../context/UserContext";
import styles from "../styles/TimesStyle";

export default function TimesScreen({ navigation }) {
    const [selectItem, setSelectItem] = useState(null);
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(24);
    const { updateUserData } = useContext(UserContext);

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

    const handleSubmit = () => {
        if (!selectItem) {
            Alert.alert("Please select your preferred timing.");
        } else {
            updateUserData('preferred Timing', selectItem);
            navigation.navigate("InterestScreen");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}><Ionicons name="chevron-back" size={20} /></TouchableOpacity>
            </View>
            <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                    <View style={styles.progress}></View>
                </View>
            </View>
            <View style={styles.itemContainer}>
                <Text style={styles.mainText}>Availability Timings</Text>
                <Text style={styles.mainText2}>For Matchmaking</Text>

                {/* MultiSlider to select time range */}
                <View style={{ pointerEvents: 'none' }}>
                    <MultiSlider
                        values={[startTime, endTime]}
                        sliderLength={300}
                        min={0}
                        max={24}
                        step={1}
                        isMarkerTouchable={false}
                        onValuesChange={(values) => {
                            setStartTime(values[0]);
                            setEndTime(values[1]);
                        }}
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
                    <Text style={styles.timeLabelText}>9 AM</Text>
                    <Text style={styles.timeLabelText}>11 PM</Text>
                </View>

                <Text style={styles.text}>Pick your preferred time slot</Text>
                <Text style={styles.text2}>for you to connect?</Text>


                <View style={styles.list}>
                    {["Mid-morning (9 AM - 12 PM)", "Afternoon (12 PM - 4 PM)", "Evening (4 PM - 8 PM)", "Late evening (8 PM - 11 PM)", "No specific preference, anytime works!"].map((option, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[styles.radio, selectItem === option && styles.radioSelected]}
                            onPress={() => handleSelect(option)}
                        >
                            <View style={[styles.circle, selectItem === option && styles.circleSelected]} />
                            <Text style={styles.radioText}>{option}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <View style={styles.continuebtn}>
                <Button style={styles.Button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Continue</Text>
                </Button>
            </View>
        </SafeAreaView>
    );
}

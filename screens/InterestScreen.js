import { useState, useContext, useEffect } from "react";
import { View, Text,SafeAreaView, TouchableOpacity, Alert, Dimensions } from "react-native";
import { Button } from '@ant-design/react-native';
import { Ionicons } from 'react-native-vector-icons';
import { UserContext } from "../context/UserContext";
import styles from "../styles/InterestStyle";

const { width, height } = Dimensions.get('window');
export const responsiveWidth = (percentage) => (width * percentage) / 100;

export default function InterestScreen({ navigation }) {
    const iconSize = responsiveWidth(7);

    const interests = [
        { name: "Reading", icons: "book" },
        { name: "Photography", icons: "camera" },
        { name: "Gaming", icons: "game-controller" },
        { name: "Music", icons: "musical-notes" },
        { name: "Travel", icons: "airplane" },
        { name: "Painting", icons: "brush" },
        { name: "Politics", icons: "flag" },
        { name: "Charity", icons: "heart-circle" },
        { name: "Cooking", icons: "restaurant" },
        { name: "Pets", icons: "paw" },
        { name: "Sports", icons: "basketball" },
        { name: "Fashion", icons: "shirt" },
    ];
    const [selected, setSelected] = useState([]);
    const { updateUserData } = useContext(UserContext)

    const toggleInterest = (interest) => {
        setSelected((prev) =>
            prev.includes(interest)
                ? prev.filter((item) => item !== interest)
                : [...prev, interest]
        );
    };

    const handleSubmit = () => {
        if (selected.length < 3) {
            Alert.alert("Select at least 3 interests.");
        } else {
            updateUserData('Interests',selected)
            navigation.navigate("UploadPhotoScreen");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}><Ionicons name="arrow-back-outline" size={30} /></TouchableOpacity>
                <View style={styles.progressBar}><View style={styles.progress}></View></View>
            </View>
            <View style={styles.itemContainer}>

                <Text style={styles.mainText}>Select Up To 3 Interest</Text>
                <Text style={styles.text}>Tell us what piques your curiosity and</Text>
                <Text style={styles.text}>passions</Text>

                <View style={styles.grid}>
                    {interests.map((item) => (
                        <TouchableOpacity
                            key={item.name}
                            style={[
                                styles.interest,
                                selected.includes(item.name) && styles.selected,
                            ]}
                            onPress={() => toggleInterest(item.name)}
                        >
                            <Ionicons
                                name={item.icons}
                                size={iconSize}
                                color={selected.includes(item.name) ? "white" : "#FFB200"}
                            />
                            <Text
                                style={[
                                    styles.interestText,
                                    selected.includes(item.name) && styles.selectedText,
                                ]}
                            >
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <View style={styles.continuebtn}>
                <Button style={styles.button} onPress={handleSubmit}><Text style={styles.buttonText}>Continue</Text></Button>
            </View>
        </SafeAreaView>
    )
}

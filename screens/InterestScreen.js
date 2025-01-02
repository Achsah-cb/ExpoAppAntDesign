import { useState, useContext } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Alert, Dimensions, ScrollView } from "react-native";
import { Button } from '@ant-design/react-native';
import { Ionicons } from 'react-native-vector-icons';
import { UserContext } from "../context/UserContext";
import styles from "../styles/InterestStyle";
import {
    Backpacking, Beaches, Roadtrips, Mountains,
    Ambivert, Introvert, Extrovert, CasualDatting,
    Cycling, Flexible, Friendship, Gym, OpenToAnything,
    Running, SeriousRelationship, Swimming, Vegan, Vegetarian
} from "../components/icons";

const { width } = Dimensions.get('window');
export const responsiveWidth = (percentage) => (width * percentage) / 100;

export default function InterestScreen({ navigation }) {
    const iconSize = responsiveWidth(5);

    const travelAndAdventure = [
        { name: "Backpacking", icons: "Backpacking" },
        { name: "Beaches", icons: "Beaches" },
        { name: "Roadtrips", icons: "Roadtrips" },
        { name: "Mountains", icons: "Mountains" },
    ];
    const fiteness = [
        { name: "Gym", icons: "Gym" },
        { name: "Swimming", icons: "Swimming" },
        { name: "Cycling", icons: "Cycling" },
        { name: "Running", icons: "Running" },
    ];
    const diet = [
        { name: "Vegan", icons: "Vegan" },
        { name: "Vegetarian", icons: "Vegetarian" },
        { name: "Flexible", icons: "Flexible" },
    ];
    const personality = [
        { name: "Ambivert", icons: "Ambivert" },
        { name: "Introvert", icons: "Introvert" },
        { name: "Extrovert", icons: "Extrovert" },
    ];
    const relationship = [
        { name: "Casual Dating", icons: "CasualDatting" },
        { name: "Friendship", icons: "Friendship" },
        { name: "Serious", icons: "SeriousRelationship" },
        { name: "Anything", icons: "OpenToAnything" },
    ];

    const getIcon = (iconName) => {
        switch (iconName) {
            case "Backpacking":
                return <Backpacking width={iconSize} height={iconSize} />;
            case "Beaches":
                return <Beaches width={iconSize} height={iconSize} />;
            case "Roadtrips":
                return <Roadtrips width={iconSize} height={iconSize} />;
            case "Mountains":
                return <Mountains width={iconSize} height={iconSize} />;
            case "Ambivert":
                return <Ambivert width={iconSize} height={iconSize} />;
            case "Introvert":
                return <Introvert width={iconSize} height={iconSize} />;
            case "Extrovert":
                return <Extrovert width={iconSize} height={iconSize} />;
            case "CasualDatting":
                return <CasualDatting width={iconSize} height={iconSize} />;
            case "Cycling":
                return <Cycling width={iconSize} height={iconSize} />;
            case "Flexible":
                return <Flexible width={iconSize} height={iconSize} />;
            case "Gym":
                return <Gym width={iconSize} height={iconSize} />;
            case "OpenToAnything":
                return <OpenToAnything width={iconSize} height={iconSize} />;
            case "Running":
                return <Running width={iconSize} height={iconSize} />;
            case "SeriousRelationship":
                return <SeriousRelationship width={iconSize} height={iconSize} />;
            case "Swimming":
                return <Swimming width={iconSize} height={iconSize} />;
            case "Vegan":
                return <Vegan width={iconSize} height={iconSize} />;
            case "Vegetarian":
                return <Vegetarian width={iconSize} height={iconSize} />;
            case "Friendship":
                return <Friendship width={iconSize} height={iconSize} />;
            default:
                return <Ionicons name="Home" size={iconSize} />;
        }
    };

    const [selected, setSelected] = useState({
        travelAndAdventure: [],
        fiteness: [],
        diet: [],
        personality: [],
        relationship: [],
    });

    const { updateUserData } = useContext(UserContext);

    const toggleInterest = (interest, section) => {
        setSelected((prev) => {
            const selectedList = prev[section] || [];
            let updatedList;

            if (selectedList.includes(interest)) {
                updatedList = selectedList.filter(item => item !== interest);
            } else {
                updatedList = [interest];
            }
            return { ...prev, [section]: updatedList };
        });
    };

    const handleSubmit = () => {

        const allSectionsSelected = Object.values(selected).every(
            (interest) => interest.length > 0
        );

        if (!allSectionsSelected) {
            Alert.alert("Please select at least one interest from each section.");
        } else {

            updateUserData('Interests', selected);
            navigation.navigate("UploadPhotoScreen");
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

                <Text style={styles.mainText}>Your Interests</Text>
                <Text style={styles.text}>Pick 6 things you love, it will help to</Text>
                <Text style={styles.text}>match with people who have similar</Text>
                <Text style={styles.text}>interests</Text>

                <ScrollView style={styles.scrollview}>
                    {/* Travel & Adventure */}
                    <Text style={styles.titleText}>Travel & Adventure</Text>
                    <View style={styles.grid}>
                        <View style={styles.interestSection}>
                            {travelAndAdventure.map((item) => (
                                <TouchableOpacity
                                    key={item.name}
                                    style={[
                                        styles.interest,
                                        selected.travelAndAdventure.includes(item.name) && styles.selected,
                                    ]}
                                    onPress={() => toggleInterest(item.name, "travelAndAdventure")}
                                >
                                    {getIcon(item.icons)}
                                    <Text
                                        style={[
                                            styles.interestText,
                                            selected.travelAndAdventure.includes(item.name) && styles.selectedText,
                                        ]}
                                    >
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    {/* Fitness Goals */}
                    <Text style={styles.titleText}>Fitness Goals</Text>
                    <View style={styles.grid}>
                        <View style={styles.interestSection}>
                            {fiteness.map((item) => (
                                <TouchableOpacity
                                    key={item.name}
                                    style={[
                                        styles.interest,
                                        selected.fiteness.includes(item.name) && styles.selected,
                                    ]}
                                    onPress={() => toggleInterest(item.name, "fiteness")}
                                >
                                    {getIcon(item.icons)}
                                    <Text
                                        style={[
                                            styles.interestText,
                                            selected.fiteness.includes(item.name) && styles.selectedText,
                                        ]}
                                    >
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    {/* Diet Preferences */}
                    <Text style={styles.titleText}>Diet Preferences</Text>
                    <View style={styles.grid}>
                        <View style={styles.interestSection}>
                            {diet.map((item) => (
                                <TouchableOpacity
                                    key={item.name}
                                    style={[
                                        styles.interest,
                                        selected.diet.includes(item.name) && styles.selected,
                                    ]}
                                    onPress={() => toggleInterest(item.name, "diet")}
                                >
                                    {getIcon(item.icons)}
                                    <Text
                                        style={[
                                            styles.interestText,
                                            selected.diet.includes(item.name) && styles.selectedText,
                                        ]}
                                    >
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    {/* Personality Traits */}
                    <Text style={styles.titleText}>Personality Traits</Text>
                    <View style={styles.grid}>
                        <View style={styles.interestSection}>
                            {personality.map((item) => (
                                <TouchableOpacity
                                    key={item.name}
                                    style={[
                                        styles.interest,
                                        selected.personality.includes(item.name) && styles.selected,
                                    ]}
                                    onPress={() => toggleInterest(item.name, "personality")}
                                >
                                    {getIcon(item.icons)}
                                    <Text
                                        style={[
                                            styles.interestText,
                                            selected.personality.includes(item.name) && styles.selectedText,
                                        ]}
                                    >
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    {/* Relationship Preferences */}
                    <Text style={styles.titleText}>Relationship Preferences</Text>
                    <View style={styles.grid}>
                        <View style={styles.interestSection}>
                            {relationship.map((item) => (
                                <TouchableOpacity
                                    key={item.name}
                                    style={[
                                        styles.interest,
                                        selected.relationship.includes(item.name) && styles.selected,
                                    ]}
                                    onPress={() => toggleInterest(item.name, "relationship")}
                                >
                                    {getIcon(item.icons)}
                                    <Text
                                        style={[
                                            styles.interestText,
                                            selected.relationship.includes(item.name) && styles.selectedText,
                                        ]}
                                    >
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.selectOf}><Text style={{ fontSize: responsiveWidth(3.5), fontWeight: "700", color: "#626161" }}>{Object.values(selected).flat().length}/5 Selected</Text></View>
            <View style={styles.continuebtn}>
                <Button style={styles.button} onPress={handleSubmit}><Text style={styles.buttonText}>Continue</Text></Button>
            </View>
        </SafeAreaView>
    );
}

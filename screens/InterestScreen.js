import { useState, useContext } from "react";
import { View, Text, TouchableOpacity, Alert, Dimensions, ScrollView, TextInput, Keyboard } from "react-native";
import { Button } from '@ant-design/react-native';
import { UserContext } from "../context/UserContext";
import styles from "../styles/InterestStyle";
import {
    Music, Gaming, Books, Photography, Swimming, Sports, Cycling, Gym,
    Fashion, Running, Arts, Travel, Animals, Bikes, Business, Nature, Cars,
    Back, Search, Cooking, Painting, Writing, Dancing, Acting, Crafts, Camping, Programming, Politics, Robotics, Food
} from "../components/icons";
import { ThemeContext } from '../context/ThemeContext';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get('window');
export const responsiveWidth = (percentage) => (width * percentage) / 100;

export default function InterestScreen({ navigation }) {
    const iconSize = responsiveWidth(4);
    const theme = useContext(ThemeContext);
    const { updateUserData } = useContext(UserContext);

    const [interest, setInterest] = useState("");
    const [selected, setSelected] = useState({
        hobbies: [],
        interests: [],
        food: [],
    });

   
    const hobbies = [
        { name: "gaming", icons: "Gaming" },
        { name: "travel", icons: "Travel" },
        { name: "cooking", icons: "Cooking" },
        { name: "photography", icons: "Photography" },
        { name: "painting", icons: "Painting" },
        { name: "writing", icons: "Writing" },
        { name: "dancing", icons: "Dancing" },
        { name: "sports", icons: "Sports" },
    ];
    const interests = [
        { name: "acting", icons: "Acting" },
        { name: "crafts", icons: "Crafts" },
        { name: "camping", icons: "Camping" },
        { name: "programming", icons: "Programming" },
        { name: "politics", icons: "Politics" },
        { name: "robotics", icons: "Robotics" },
        { name: "fashion", icons: "Fashion" },
        { name: "sports", icons: "Sports" },
    ];
    const food = [
        { name: "thai", icons: "Food" },
        { name: "italian", icons: "Food" },
        { name: "french", icons: "Food" },
        { name: "mexican", icons: "Food" },
        { name: "japanese", icons: "Food" },

    ];

    // Define an array of predefined border colors
    const interestBorderColors = {
        japanese: theme.colors.pink,
        gaming: theme.colors.blueGreen,
        travel: theme.colors.gold,
        photography: theme.colors.orange,
        painting: theme.colors.blue,
        sports: theme.colors.cyan,
        writing: theme.colors.pink,
        dancing: theme.colors.gold,
        fashion: theme.colors.blueGreen,
        acting: theme.colors.orange,
        crafts: theme.colors.pink,
        programming: theme.colors.blueGreen,
        politics: theme.colors.gold,
        robotics: theme.colors.cyan,
        thai: theme.colors.pink,
        italian: theme.colors.orange,
        french: theme.colors.blueGreen,
        mexican: theme.colors.cyan,
        cooking: theme.colors.gold,
        camping: theme.colors.orange,
    };

    const getIcon = (iconName) => {
        switch (iconName) {
            case "Music":
                return <Music width={iconSize} height={iconSize} />;
            case "Gaming":
                return <Gaming width={iconSize} height={iconSize} />;
            case "Books":
                return <Books width={iconSize} height={iconSize} />;
            case "Photography":
                return <Photography width={iconSize} height={iconSize} />;
            case "Swimming":
                return <Swimming width={iconSize} height={iconSize} />;
            case "Sports":
                return <Sports width={iconSize} height={iconSize} />;
            case "Cycling":
                return <Cycling width={iconSize} height={iconSize} />;
            case "Gym":
                return <Gym width={iconSize} height={iconSize} />;
            case "Fashion":
                return <Fashion width={iconSize} height={iconSize} />;
            case "Running":
                return <Running width={iconSize} height={iconSize} />;
            case "Arts":
                return <Arts width={iconSize} height={iconSize} />;
            case "Travel":
                return <Travel width={iconSize} height={iconSize} />;
            case "Animals":
                return <Animals width={iconSize} height={iconSize} />;
            case "Bikes":
                return <Bikes width={iconSize} height={iconSize} />;
            case "Business":
                return <Business width={iconSize} height={iconSize} />;
            case "Nature":
                return <Nature width={iconSize} height={iconSize} />;
            case "Cars":
                return <Cars width={iconSize} height={iconSize} />;
            case "Cooking":
                return <Cooking width={iconSize} height={iconSize} />;
            case "Painting":
                return <Painting width={iconSize} height={iconSize} />;
            case "Writing":
                return <Writing width={iconSize} height={iconSize} />;
            case "Dancing":
                return <Dancing width={iconSize} height={iconSize} />;
            case "Acting":
                return <Acting width={iconSize} height={iconSize} />;
            case "Crafts":
                return <Crafts width={iconSize} height={iconSize} />;
            case "Camping":
                return <Camping width={iconSize} height={iconSize} />;
            case "Programming":
                return <Programming width={iconSize} height={iconSize} />;
            case "Politics":
                return <Politics width={iconSize} height={iconSize} />;
            case "Robotics":
                return <Robotics width={iconSize} height={iconSize} />;
            case "Food":
                return <Food width={iconSize} height={iconSize} />;
            default:
                return <Text>Icon</Text>;
        }
    };

    const handleSubmit = () => {
        const allSelected = [
            ...selected.hobbies,
            ...selected.interests,
            ...selected.food,
        ];
    
        if (allSelected.length === 0) {
            Alert.alert("Selection Required", "Please select at least one interest.");
            return;
        }
    
        updateUserData("interests", allSelected);
        navigation.navigate("UploadPhotoScreen");
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
                <View style={styles.progressContainer}>
                    <View style={styles.progressBar}>
                        <View style={[styles.progress, { backgroundColor: theme.colors.primary }]}></View>
                        <View style={[styles.progress, { backgroundColor: theme.colors.gold }]}></View>
                        <View style={[styles.progress, { backgroundColor: theme.colors.blue }]}></View>
                        <View style={[styles.progress, { backgroundColor: theme.colors.orange }]}></View>
                        <View style={[styles.progress, { backgroundColor: theme.colors.pink }]}></View>
                        <View style={[styles.progress, { backgroundColor: theme.colors.blueGreen }]}></View>
                        <View style={styles.progress}></View>
                    </View>
                </View>

                {/* <View style={styles.itemContainer}>
                    <View style={styles.textContainer}>
                        <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }]}>
                            <Text style={{ color: theme.colors.blueGreen, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }}>what </Text>do you</Text>
                        <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }]}>love doing?</Text>
                        <Text style={[styles.text, { fontFamily: theme.fontfamily.semibold, color: theme.colors.subText, marginTop: 8, opacity: 0.8 }]}>Select topics you’re passionate</Text>
                        <Text style={[styles.text, { fontFamily: theme.fontfamily.semibold, color: theme.colors.subText, opacity: 0.8 }]}>about.</Text>
                    </View>
                </View> */}
                <View style={styles.interestContainer}>

                    <ScrollView contentContainerStyle={styles.interestsGrid}>
                        <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.medium3, marginTop:responsiveWidth(5) }]}>
                            <Text style={{ color: theme.colors.blueGreen, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.medium3 }}>what </Text>are your hobbies?</Text>
                        {hobbies.map((item) => (
                            <TouchableOpacity
                                key={item.name}
                                style={[
                                    styles.interestItem,
                                    selected.hobbies.includes(item.name) && {
                                        borderColor: interestBorderColors[item.name],
                                        borderWidth: responsiveWidth(0.5),
                                    },
                                ]}
                                onPress={() => {
                                    setSelected((prev) => ({
                                        ...prev,
                                        hobbies: prev.hobbies.includes(item.name)
                                            ? prev.hobbies.filter((i) => i !== item.name)
                                            : [...prev.hobbies, item.name],
                                    }));
                                }}
                            >
                                {getIcon(item.icons)}
                                <Text
                                    style={[
                                        styles.interestText,
                                        selected.hobbies.includes(item.name) && styles.selectedText,
                                    ]}
                                >
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        ))}
                        <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.medium3, marginTop:responsiveWidth(5) }]}>
                            <Text style={{ color: theme.colors.blueGreen, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.medium3 }}>what </Text>are your interests?</Text>
                        {interests.map((item) => (
                            <TouchableOpacity
                                key={item.name}
                                style={[
                                    styles.interestItem,
                                    selected.interests.includes(item.name) && {
                                        borderColor: interestBorderColors[item.name],
                                        borderWidth: responsiveWidth(0.5),
                                    },
                                ]}
                                onPress={() => {
                                    setSelected((prev) => ({
                                        ...prev,
                                        interests: prev.interests.includes(item.name)
                                            ? prev.interests.filter((i) => i !== item.name)
                                            : [...prev.interests, item.name],
                                    }));
                                }}
                            >
                                {getIcon(item.icons)}
                                <Text
                                    style={[
                                        styles.interestText,
                                        selected.interests.includes(item.name) && styles.selectedText,
                                    ]}
                                >
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        ))}
                        <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.medium3, marginTop:responsiveWidth(5) }]}>
                            <Text style={{ color: theme.colors.blueGreen, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.medium3 }}>what's </Text>your food prefrences?</Text>
                        {food.map((item) => (
                            <TouchableOpacity
                                key={item.name}
                                style={[
                                    styles.interestItem,
                                    selected.food.includes(item.name) && {
                                        borderColor: interestBorderColors[item.name],
                                        borderWidth: responsiveWidth(0.5),
                                    },
                                ]}
                                onPress={() => {
                                    setSelected((prev) => ({
                                        ...prev,
                                        food: prev.food.includes(item.name)
                                            ? prev.food.filter((i) => i !== item.name)
                                            : [...prev.food, item.name],
                                    }));
                                }}
                            >
                                {getIcon(item.icons)}
                                <Text
                                    style={[
                                        styles.interestText,
                                        selected.food.includes(item.name) && styles.selectedText,
                                    ]}
                                >
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                </View>
                <View style={styles.continuebtn}>
                    <Button style={[styles.Button, { backgroundColor: theme.colors.primary }]} onPress={handleSubmit}><Text style={[styles.buttonText, { color: theme.colors.btnText, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.semibold }]}>Continue</Text></Button>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}

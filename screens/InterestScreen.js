import { useState, useContext } from "react";
import { View, Text, TouchableOpacity, Alert, Dimensions, ScrollView, TextInput, Keyboard } from "react-native";
import { Button } from '@ant-design/react-native';
import { UserContext } from "../context/UserContext";
import styles from "../styles/InterestStyle";
import {
    Music, Gaming, Books, Photography, Swimming, Sports, Cycling, Gym,
    Fashion, Running, Arts, Travel, Animals, Bikes, Business, Nature, Cars,
    Back, Search
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
        allInterests: [],
    });

    const allInterests = [
        { name: "music", icons: "Music" },
        { name: "gaming", icons: "Gaming" },
        { name: "book", icons: "Books" },
        { name: "photography", icons: "Photography" },
        { name: "swimming", icons: "Swimming" },
        { name: "sports", icons: "Sports" },
        { name: "cycling", icons: "Cycling" },
        { name: "gym", icons: "Gym" },
        { name: "fashion", icons: "Fashion" },
        { name: "running", icons: "Running" },
        { name: "arts", icons: "Arts" },
        { name: "travel", icons: "Travel" },
        { name: "animals", icons: "Animals" },
        { name: "bikes", icons: "Bikes" },
        { name: "business", icons: "Business" },
        { name: "nature", icons: "Nature" },
        { name: "cars", icons: "Cars" },
    ];

    // Define an array of predefined border colors
    const interestBorderColors = {
        music: theme.colors.pink,
        gaming: theme.colors.blueGreen,
        book: theme.colors.gold,
        photography: theme.colors.orange,
        swimming: theme.colors.blue,
        sports: theme.colors.cyan,
        cycling: theme.colors.pink,
        gym: theme.colors.gold,
        fashion: theme.colors.blueGreen,
        running: theme.colors.orange,
        arts: theme.colors.pink,
        travel: theme.colors.blueGreen,
        animals: theme.colors.gold,
        bikes: theme.colors.cyan,
        business: theme.colors.pink,
        nature: theme.colors.orange,
        cars: theme.colors.blueGreen,
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
            default:
                return <Text>Icon</Text>;
        }
    };

    const handleSubmit = () => {
        if (selected.allInterests.length === 0) {
            Alert.alert("Selection Required", "Please select at least one interest.");
            return;
        }
        updateUserData("Interests", selected.allInterests);
        navigation.navigate("UploadPhotoScreen");
    };

    const filteredInterests = allInterests.filter(({ name }) =>
        name.toLowerCase().includes(interest.toLowerCase())
    );

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

            <View style={styles.itemContainer}>
                <View style={styles.textContainer}>
                    <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }]}>
                        <Text style={{ color: theme.colors.blueGreen, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }}>what </Text>do you</Text>
                    <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }]}>love doing?</Text>
                    <Text style={[styles.text, { fontFamily: theme.fontfamily.semibold, color: theme.colors.subText, marginTop:8, opacity:0.8 }]}>Select topics you’re passionate</Text>
                    <Text style={[styles.text, { fontFamily: theme.fontfamily.semibold, color: theme.colors.subText, opacity:0.8 }]}>about.</Text>
                </View>
            </View>
            <View style={styles.interestContainer}>
                <View style={styles.inputContainer}>
                    <Search style={styles.searchIcon} />
                    <TextInput
                        placeholder="What are you into?"
                        style={[styles.Input, { fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.small }]}
                        value={interest}
                        onChangeText={setInterest}
                        onSubmitEditing={Keyboard.dismiss} // Dismiss keyboard on submit
                    />
                </View>

                <ScrollView contentContainerStyle={styles.interestsGrid}>
                    {filteredInterests.map((item) => (
                        <TouchableOpacity
                            key={item.name}
                            style={[
                                styles.interestItem,
                                selected.allInterests.includes(item.name) && {
                                    borderColor: interestBorderColors[item.name],
                                    borderWidth:responsiveWidth(0.5), 
                                },
                            ]}
                            onPress={() => {
                                setSelected((prev) => ({
                                    allInterests: prev.allInterests.includes(item.name)
                                        ? prev.allInterests.filter((i) => i !== item.name)
                                        : [...prev.allInterests, item.name],
                                }));
                            }}
                        >

                            {getIcon(item.icons)}
                            <Text
                                style={[
                                    styles.interestText,
                                    selected.allInterests.includes(item.name) && styles.selectedText,
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

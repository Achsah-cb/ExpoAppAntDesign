import { useState, useContext } from "react";
import { View, Text, TouchableOpacity, Alert, Dimensions, ScrollView, TextInput, Keyboard } from "react-native";
import { Button } from '@ant-design/react-native';
import { UserContext } from "../context/UserContext";
import styles from "../styles/InterestStyle";
import {
    Music, Gaming, Books, Photography, Swimming, Sports, Cycling, Gym,
    Fashion, Running, Arts, Travel, Animals, Bikes, Business, Nature, Cars,
    Back, Cooking, Painting, Writing, Dancing, Acting, Crafts, Camping,
    Programming, Politics, Robotics, Food, Coffee, Dinner, Outdoor, Movie, Activity,
    MorningTime, NightTime, Dogs, Cats, Nopets, LoveAll, Friendship, Home, Tea, Cocktail,
    Juice, Hobby,
} from "../components/icons"; // Icons
import { ThemeContext } from '../context/ThemeContext';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";
import { se } from "react-day-picker/locale";

const { width } = Dimensions.get('window');
export const responsiveWidth = (percentage) => (width * percentage) / 100;

export default function InterestScreen({ navigation }) {
    
    const iconSize = responsiveWidth(4);
    const theme = useContext(ThemeContext);
    const { updateUserData } = useContext(UserContext);

    const [selected, setSelected] = useState({
        hobbies: [],
        interests: [],
        food: [],
        firstDate: [],
        time: [],
        pets: [],
        weekend: [],
        drink: []
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
    const firstDate = [
        { name: "coffee", icons: "Coffee" },
        { name: "dinner", icons: "Dinner" },
        { name: "outdoor", icons: "Outdoor" },
        { name: "movie", icons: "Movie" },
        { name: "activity", icons: "Activity" },
    ];
    const time = [
        { name: "morning person", icons: "MorningTime" },
        { name: "night owl", icons: "NightTime" },
    ];
    const pets = [
        { name: "dog lover", icons: "Dogs" },
        { name: "cat lover", icons: "Cats" },
        { name: "not a pet person", icons: "Nopets" },
        { name: "love all animals", icons: "LoveAll" },
    ];
    const weekend = [
        { name: "out with friends", icons: "Friendship" },
        { name: "chill at home", icons: "Home" },
        { name: "nature explorer", icons: "Nature" },
        { name: "hobby time", icons: "Hobby" },
    ];
    const drink = [
        { name: "coffee", icons: "Coffee" },
        { name: "tea", icons: "Tea" },
        { name: "cocktail", icons: "Cocktail" },
        { name: "juice or soda", icons: "Juice" },
    ]


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
        food: theme.colors.blueGreen,
        coffee: theme.colors.orange,
        outdoor: theme.colors.pink,
        dinner: theme.colors.blueGreen,
        movie: theme.colors.gold,
        activity: theme.colors.cyan,
        morningTime: theme.colors.pink,
        nightTime: theme.colors.orange,
        dogs: theme.colors.blueGreen,
        Cats: theme.colors.cyan,
        Nopets: theme.colors.gold,
        LoveAll: theme.colors.orange,
        Hobby: theme.colors.pink,
        Friendship: theme.colors.blueGreen,
        Hobby: theme.colors.gold,
        tea: theme.colors.orange,
        cocktail: theme.colors.blue,
        juice: theme.colors.cyan,
        home: theme.colors.pink,
    };
    // for get the icons
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
            case "Coffee":
                return <Coffee width={iconSize} height={iconSize} />;
            case "Dinner":
                return <Dinner width={iconSize} height={iconSize} />;
            case "Outdoor":
                return <Outdoor width={iconSize} height={iconSize} />;
            case "Movie":
                return <Movie width={iconSize} height={iconSize} />;
            case "Activity":
                return <Activity width={iconSize} height={iconSize} />;
            case "MorningTime":
                return <MorningTime width={iconSize} height={iconSize} />;
            case "NightTime":
                return <NightTime width={iconSize} height={iconSize} />;
            case "Dogs":
                return <Dogs width={iconSize} height={iconSize} />;
            case "Cats":
                return <Cats width={iconSize} height={iconSize} />;
            case "Nopets":
                return <Nopets width={iconSize} height={iconSize} />;
            case "LoveAll":
                return <LoveAll width={iconSize} height={iconSize} />;
            case "Friendship":
                return <Friendship width={iconSize} height={iconSize} />;
            case "Hobby":
                return <Hobby width={iconSize} height={iconSize} />;
            case "Coffee":
                return <Coffee width={iconSize} height={iconSize} />;
            case "Tea":
                return <Tea width={iconSize} height={iconSize} />;
            case "Cocktail":
                return <Cocktail width={iconSize} height={iconSize} />;
            case "Juice":
                return <Juice width={iconSize} height={iconSize} />;
            case "Home":
                return <Home width={iconSize} height={iconSize} />;
            default:
                return <Text>Icon</Text>;
        }
    };

    const handleSubmit = () => {
        const allSelected = [
            ...selected.hobbies,
            ...selected.interests,
            ...selected.food,
            ...selected.drink,
            ...selected.firstDate,
            ...selected.pets,
            ...selected.time,
            ...selected.weekend
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
                {/* progress bar */}
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

                {/* interest sections */}
                <View style={styles.interestContainer}>

                    <ScrollView contentContainerStyle={styles.interestsGrid}>
                        {/* hobbies */}
                        <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.medium3, marginTop: responsiveWidth(5) }]}>
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
                        {/* interests */}
                        <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.medium3, marginTop: responsiveWidth(5) }]}>
                            <Text style={{ color: theme.colors.primary, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.medium3 }}>what </Text>are your interests?</Text>
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
                        {/* Food prefernces */}
                        <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.medium3, marginTop: responsiveWidth(5) }]}>
                            <Text style={{ color: theme.colors.gold, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.medium3 }}>what's </Text>your food prefrences?</Text>
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
                        {/* First date */}
                        <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.medium3, marginTop: responsiveWidth(5) }]}>
                            <Text style={{ color: theme.colors.violet, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.medium3 }}>what </Text>your ideal first date?</Text>
                        {firstDate.map((item) => (
                            <TouchableOpacity
                                key={item.name}
                                style={[
                                    styles.interestItem,
                                    selected.firstDate.includes(item.name) && {
                                        borderColor: interestBorderColors[item.name],
                                        borderWidth: responsiveWidth(0.5),
                                    },
                                ]}
                                onPress={() => {
                                    setSelected((prev) => ({
                                        ...prev,
                                        firstDate: prev.firstDate.includes(item.name)
                                            ? prev.firstDate.filter((i) => i !== item.name)
                                            : [...prev.firstDate, item.name],
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
                        {/* are u a? */}
                        <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.medium3, marginTop: responsiveWidth(5) }]}>
                            <Text style={{ color: theme.colors.cyan, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.medium3 }}>are </Text>you a…?                      </Text>
                        {time.map((item) => (
                            <TouchableOpacity
                                key={item.name}
                                style={[
                                    styles.interestItem,
                                    selected.time.includes(item.name) && {
                                        borderColor: interestBorderColors[item.name],
                                        borderWidth: responsiveWidth(0.5),
                                    },
                                ]}
                                onPress={() => {
                                    setSelected((prev) => ({
                                        ...prev,
                                        time: prev.time.includes(item.name)
                                            ? prev.time.filter((i) => i !== item.name)
                                            : [...prev.time, item.name],
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
                        {/* pets */}
                        <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.medium3, marginTop: responsiveWidth(5) }]}>
                            <Text style={{ color: theme.colors.lightBlue, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.medium3 }}>are </Text>you a pet person?</Text>
                        {pets.map((item) => (
                            <TouchableOpacity
                                key={item.name}
                                style={[
                                    styles.interestItem,
                                    selected.pets.includes(item.name) && {
                                        borderColor: interestBorderColors[item.name],
                                        borderWidth: responsiveWidth(0.5),
                                    },
                                ]}
                                onPress={() => {
                                    setSelected((prev) => ({
                                        ...prev,
                                        pets: prev.pets.includes(item.name)
                                            ? prev.pets.filter((i) => i !== item.name)
                                            : [...prev.pets, item.name],
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
                        {/* weekend vibes */}
                        <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.medium3, marginTop: responsiveWidth(5) }]}>
                            <Text style={{ color: theme.colors.blueGreen, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.medium3 }}>what’s </Text>your Weekend vibes?</Text>
                        {weekend.map((item) => (
                            <TouchableOpacity
                                key={item.name}
                                style={[
                                    styles.interestItem,
                                    selected.weekend.includes(item.name) && {
                                        borderColor: interestBorderColors[item.name],
                                        borderWidth: responsiveWidth(0.5),
                                    },
                                ]}
                                onPress={() => {
                                    setSelected((prev) => ({
                                        ...prev,
                                        weekend: prev.weekend.includes(item.name)
                                            ? prev.weekend.filter((i) => i !== item.name)
                                            : [...prev.weekend, item.name],
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
                        {/* drink of choice */}
                        <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.medium3, marginTop: responsiveWidth(5) }]}>
                            <Text style={{ color: theme.colors.darkGold, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.medium3 }}>what’s </Text>your drink of choice?</Text>
                        {drink.map((item) => (
                            <TouchableOpacity
                                key={item.name}
                                style={[
                                    styles.interestItem,
                                    selected.drink.includes(item.name) && {
                                        borderColor: interestBorderColors[item.name],
                                        borderWidth: responsiveWidth(0.5),
                                    },
                                ]}
                                onPress={() => {
                                    setSelected((prev) => ({
                                        ...prev,
                                        drink: prev.drink.includes(item.name)
                                            ? prev.drink.filter((i) => i !== item.name)
                                            : [...prev.drink, item.name],
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
                {/* continue button */}
                <View style={styles.continuebtn}>
                    <Button style={[styles.Button, { backgroundColor: theme.colors.primary }]} onPress={handleSubmit}><Text style={[styles.buttonText, { color: theme.colors.btnText, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.semibold }]}>Continue</Text></Button>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}

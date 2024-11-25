import { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Platform, Alert } from "react-native";
import { Button } from '@ant-design/react-native';
import { Ionicons } from 'react-native-vector-icons';
import { UserContext } from "../UserContext";

export default function InterestScreen({ navigation }) {

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
            navigation.navigate("Upload");
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
                                size={24}
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
                <Button style={styles.button} onPress={handleSubmit}><Text style={styles.buttonText}>Continue</Text></Button>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FBE7',
    },
    itemContainer: {
        alignItems: 'center',
        margin: 20,
        marginTop: 10,
        
    },
    button: {
        width: 325,
        height: 56,
        borderRadius: 20,
        backgroundColor: '#FFB200',
        borderColor: '#FFB200',
        marginTop: 25,
        position: 'relative',
        ...Platform.select({ android: { top: 55 }, ios: { top: 145 } })
    },
    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:18
    },
    mainText: {
        fontSize: 24,
        fontWeight: '500',
        padding: 10,
    },
    text: {
        fontSize: 14,
    },
    backBtn: {
        margin: 20,
        width: 40,
        height: 40,

    },
    header: {
        flexDirection: 'row',
        ...Platform.select({ ios: { marginTop: 0, }, android: { marginTop: 30 } })
    },
    progressBar: {
        backgroundColor: '#FFEC9E',
        width: 180,
        height: 8,
        borderRadius: 50,
        margin: 30
    },
    progress: {
        backgroundColor: '#FFB200',
        width: 160,
        height: 8,
        borderRadius: 50
    },
    grid: { 
        flexDirection: "row", 
        flexWrap: "wrap", 
        justifyContent: "center" 
    },
    interest: {
        backgroundColor:'white',
        borderRadius: 10,
        padding: 15,
        margin: 5,
        width: "30%",
        alignItems: "center",
        flexDirection:'row',
        width: 150,
        alignItems:'center'
        
    },
    selected:{
        backgroundColor:'#FFB200'
    },
    selectedText:{
        color:'white',
        fontWeight:'500'
    },
    interestText:{
        paddingLeft:10
    }
})
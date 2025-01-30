import React, { useState, useContext, useEffect } from "react";
import { View, TouchableOpacity, Text, Image, Alert, ScrollView, Dimensions } from "react-native";
import { Button } from "@ant-design/react-native";
import * as ImagePicker from "expo-image-picker";
import { UserContext } from "../context/UserContext";
import styles from "../styles/UploadStyle";
import { ThemeContext } from '../context/ThemeContext';
import { Back } from "../components/icons";
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function UploadScreen({ navigation }) {
    const { userData } = useContext(UserContext);
    const [selectedImages, setSelectedImages] = useState(Array(3).fill(null));
    const [isLoading, setIsLoading] = useState(false);
    const { updateUserData } = useContext(UserContext);
    const theme = useContext(ThemeContext);
    const [activeIndex, setActiveIndex] = useState(1);

    useEffect(() => {
        // Set the activeIndex to the center image
        const initialIndex = Math.floor(selectedImages.length / 2);
        setActiveIndex(initialIndex);
    }, [selectedImages]);

    const handleChooseImage = async (index) => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permissionResult.granted) {
            alert("Permission to access the media library is required!");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"], // Only select images
            allowsMultipleSelection: true, // Enable multi-selection
            selectionLimit: 3, // Limit the number of images to 6
            quality: 1, // High quality
        });

        if (!result.canceled) {
            const selectedURIs = result.assets.map((asset) => asset.uri);
    
            setSelectedImages(prevImages => {
                const updatedImages = [...prevImages];
                selectedURIs.forEach((uri, idx) => {
                    updatedImages[idx] = uri; 
                });
                return updatedImages;
            });
        }
    };

    const handleSubmit = async () => {
        if (selectedImages.some((image) => image === null)) {
            Alert.alert("Incomplete Upload", "Please upload all the images before proceeding.", [
                { text: "OK" }
            ]);
            return;
        }
    
        updateUserData("images", selectedImages);
        setIsLoading(true);
    
        try {
            const apiUrl = "http://13.48.178.236:3000/user/user-profile"; 
    
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });
    
            const result = await response.json();
            setIsLoading(false);
    
            if (response.ok) {
                Alert.alert("Success", "Data submitted successfully!");
                navigation.navigate("Home");
            } else {
                Alert.alert("Error", result.message || "Submission failed, unexpected response.");
            }
        } catch (error) {
            setIsLoading(false);
    
            if (error.response) {
                Alert.alert("Error", error.response.data.message || "Failed to submit data.");
            } else if (error.request) {
                Alert.alert("Error", "Network error or server not reachable.");
            } else {
                Alert.alert("Error", "An error occurred: " + error.message);
            }
        }
    };

    return (
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
                    {/* <TouchableOpacity onPress={() => navigation.navigate('VerificationScreen')} style={styles.backBtn}><Text>skip</Text></TouchableOpacity> */}
                </View>
                <View style={styles.progressContainer}>
                    {/* progress bar */}
                    <View style={styles.progressBar}>
                        <View style={[styles.progress, { backgroundColor: theme.colors.primary }]}></View>
                        <View style={[styles.progress, { backgroundColor: theme.colors.gold }]}></View>
                        <View style={[styles.progress, { backgroundColor: theme.colors.blue }]}></View>
                        <View style={[styles.progress, { backgroundColor: theme.colors.orange }]}></View>
                        <View style={[styles.progress, { backgroundColor: theme.colors.pink }]}></View>
                        <View style={[styles.progress, { backgroundColor: theme.colors.blueGreen }]}></View>
                        <View style={[styles.progress, { backgroundColor: theme.colors.primary }]}></View>
                    </View>
                </View>

                <View style={styles.itemContainer}>
                    <View style={styles.textContainer}>
                        <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }]}>
                            <Text style={{ color: theme.colors.primary, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }}>upload </Text>your photos</Text>
                        <Text style={[styles.text, { fontFamily: theme.fontfamily.semibold, color: theme.colors.subText, marginTop: 8, opacity: 0.8 }]}>upload at least 3 photos to get </Text>
                        <Text style={[styles.text, { fontFamily: theme.fontfamily.semibold, color: theme.colors.subText, opacity: 0.8 }]}>more matches.</Text>
                    </View>
                    {/* upload container */}
                    <View style={styles.uploadContainer}>
                        <ScrollView
                            horizontal
                            pagingEnabled
                            onScroll={(event) => {
                                const currentIndex = Math.round(
                                    event.nativeEvent.contentOffset.x / width
                                );
                                setActiveIndex(currentIndex); // Update active index for dots
                            }}
                            showsHorizontalScrollIndicator={false}
                            style={styles.slider}
                            contentOffset={{ x: activeIndex * width, y: 0 }} // Center the initial image
                        >
                            {selectedImages.map((uri, index) => (
                                <View key={index} style={styles.sliderItem}>
                                    {uri ? (
                                        <TouchableOpacity onPress={() => handleChooseImage(index)}>
                                            <Image source={{ uri }} style={styles.addButton} />
                                        </TouchableOpacity>
                                    ) : (
                                        <TouchableOpacity
                                            style={styles.addButton}
                                            onPress={() => handleChooseImage(index)}
                                        >
                                            <Text style={{ fontSize: 20, color: "#FF2A64" }}>+</Text>
                                        </TouchableOpacity>
                                    )}
                                </View>
                            ))}
                        </ScrollView>

                        {/* Pagination Dots */}
                        <View style={styles.pagination}>
                            {selectedImages.map((_, index) => (
                                <View
                                    key={index}
                                    style={[styles.dot, activeIndex === index ? styles.activeDot : styles.inactiveDot]}
                                />
                            ))}
                        </View>       
                    </View>
                    <Button style={{ backgroundColor: '#756EF3',  borderRadius:10}} onPress={handleChooseImage}><Text style={{color:theme.colors.btnText, fontFamily: theme.fontfamily.semibold}}>add photos</Text></Button>
                    {/* instruction  */}
                    <View style={styles.instructions}>
                        <Text style={{ color: theme.colors.subText, fontFamily: theme.fontfamily.semibold, fontSize: theme.fontsize.smaller }}>instruction for uploading image</Text>
                        <Text style={{ color: theme.colors.subText, fontFamily: theme.fontfamily.semibold, fontSize: theme.fontsize.smaller }}>1. select a high-quality image (JPEG, PNG, or similar formats).</Text>
                        <Text style={{ color: theme.colors.subText, fontFamily: theme.fontfamily.semibold, fontSize: theme.fontsize.smaller }}>2. ensure the image size is under 5MB.</Text>
                    </View>
                </View>
                {/* continue button */}
                <View style={styles.continuebtn}>
                    <Button style={[styles.Button, { backgroundColor: theme.colors.primary }]} onPress={handleSubmit}>
                        <Text style={[styles.buttonText, { color: theme.colors.btnText, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.semibold }]}>Continue</Text>
                    </Button>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}

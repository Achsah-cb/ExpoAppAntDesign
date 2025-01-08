import React, { useState, useContext } from "react";
import { View, SafeAreaView, TouchableOpacity, Text, Image, Alert } from "react-native";
import { Button } from "@ant-design/react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { UserContext } from "../context/UserContext";
import styles from "../styles/UploadStyle";
import axios from "axios";
import { ThemeContext } from '../context/ThemeContext';

export default function UploadScreen({ navigation }) {
    const { userData } = useContext(UserContext);
    const [selectedImages, setSelectedImages] = useState(Array(6).fill(null));
    const [isLoading, setIsLoading] = useState(false);
    const { updateUserData } = useContext(UserContext);
    const theme = useContext(ThemeContext);

    const handleChooseImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
        if (!permissionResult.granted) {
          alert("Permission to access the media library is required!");
          return;
        }
      
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ["images"], // Only select images
          allowsMultipleSelection: true, // Enable multi-selection
          selectionLimit: 6, // Limit the number of images to 6
          quality: 1, // High quality
        });
      
        if (!result.canceled) {
          const selectedURIs = result.assets.map((asset) => asset.uri);
          setSelectedImages(selectedURIs);
        }
      };
      

    const handleSubmit = async () => {
        if (selectedImages.some((image) => image === null)) {
            Alert.alert("Incomplete Upload", "Please upload all the images before proceeding.", [
                { text: "OK" }
            ]);
            return;
        }

        updateUserData('images', selectedImages);
        setIsLoading(true);

        try {
            const response = await axios.post('https://dating2-theta.vercel.app/user/signup', userData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log("API response:", response);  // Log the response

            setIsLoading(false); // Set loading to false

            if (response.status === 200) {
                Alert.alert('Success', 'Data submitted successfully!');
                navigation.navigate('Home');
            } else {
                Alert.alert('Error', 'Submission failed, unexpected response');
            }
        } catch (error) {
            setIsLoading(false); // Set loading to false on error

            console.error("API error:", error);  // Log error details
            if (error.response) {
                Alert.alert('Error', error.response.data.message || 'Failed to submit data.');
            } else {
                Alert.alert('Error', 'An error occurred: ' + error.message);
            }
        }
    };


    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}><Ionicons name="chevron-back" size={20} /></TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('VerificationScreen')} style={styles.skipBtn}>
                    <Text>Skip</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.progressContainer}>
                <View style={[styles.progressBar, { backgroundColor: theme.colors.primary }]}>
                    <View style={[styles.progress, { backgroundColor: theme.colors.secondary }]}></View>
                </View>
            </View>
            <View style={styles.itemContainer}>
                <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }]}>Upload Your Photo</Text>
                <Text style={[styles.text, { color: theme.colors.text, fontFamily: theme.fontfamily.regular, fontSize: theme.fontsize.medium }]}>Upload photos for your profile.</Text>

                <View style={styles.uploadContainer}>
                    {/* First larger container */}
                    <TouchableOpacity
                        style={styles.BigAddButton}
                        onPress={() => handleChooseImage(0)}
                    >
                        {selectedImages[0] ? (
                            <Image source={{ uri: selectedImages[0] }} style={styles.bigThumbnail} />
                        ) : (
                            <Ionicons name="add-circle" size={50} color="#EDD06A" />
                        )}
                    </TouchableOpacity>
                    <View style={styles.rightSideBtns}>
                        {/* Second container */}
                        <TouchableOpacity
                            style={styles.addButton}
                            onPress={() => handleChooseImage(1)}
                        >
                            {selectedImages[1] ? (
                                <Image source={{ uri: selectedImages[1] }} style={styles.thumbnail} />
                            ) : (
                                <Ionicons name="add-circle" size={50} color="#EDD06A" />
                            )}
                        </TouchableOpacity>

                        {/* Third container */}
                        <TouchableOpacity
                            style={styles.addButton}
                            onPress={() => handleChooseImage(2)}
                        >
                            {selectedImages[2] ? (
                                <Image source={{ uri: selectedImages[2] }} style={styles.thumbnail} />
                            ) : (
                                <Ionicons name="add-circle" size={50} color="#EDD06A" />
                            )}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomSideBtns}>
                        {/* Fourth container */}
                        <TouchableOpacity
                            style={styles.addButton}
                            onPress={() => handleChooseImage(3)}
                        >
                            {selectedImages[3] ? (
                                <Image source={{ uri: selectedImages[3] }} style={styles.thumbnail} />
                            ) : (
                                <Ionicons name="add-circle" size={50} color="#EDD06A" />
                            )}
                        </TouchableOpacity>

                        {/* Fifth container */}
                        <TouchableOpacity
                            style={styles.addButton}
                            onPress={() => handleChooseImage(4)}
                        >
                            {selectedImages[4] ? (
                                <Image source={{ uri: selectedImages[4] }} style={styles.thumbnail} />
                            ) : (
                                <Ionicons name="add-circle" size={50} color="#EDD06A" />
                            )}
                        </TouchableOpacity>

                        {/* Sixth container */}
                        <TouchableOpacity
                            style={styles.addButton}
                            onPress={() => handleChooseImage(5)}
                        >
                            {selectedImages[5] ? (
                                <Image source={{ uri: selectedImages[5] }} style={styles.thumbnail} />
                            ) : (
                                <Ionicons name="add-circle" size={50} color="#EDD06A" />
                            )}
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
            <View style={styles.continuebtn}>
                <Button style={[styles.button, { backgroundColor: theme.colors.primary }]} onPress={handleSubmit}><Text style={[styles.buttonText, { color: theme.colors.text, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.semibold }]}>Continue</Text></Button>

            </View>
        </SafeAreaView>
    );
}

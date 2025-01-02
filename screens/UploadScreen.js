import React, { useState, useContext } from "react";
import { View, SafeAreaView, TouchableOpacity, Text, Image, Alert } from "react-native";
import { Button } from "@ant-design/react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { UserContext } from "../context/UserContext";
import styles from "../styles/UploadStyle";
import axios from "axios";

export default function UploadScreen({ navigation }) {
    const { userData } = useContext(UserContext);
    const [selectedImages, setSelectedImages] = useState(Array(6).fill(null));
    const [isLoading, setIsLoading] = useState(false); // Add loading state
    const { updateUserData } = useContext(UserContext);

    const handleChooseImage = async (index) => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permissionResult.granted) {
            alert("Permission to access the media library is required!");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            const updatedImages = [...selectedImages];
            updatedImages[index] = result.assets[0].uri;
            setSelectedImages(updatedImages);
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
        setIsLoading(true); // Set loading to true
    
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
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}><Ionicons name="chevron-back" size={20} /></TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate('VerificationScreen')} style={styles.skipBtn}>
                    <Text>Skip</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                    <View style={styles.progress}></View>
                </View>
            </View>
            <View style={styles.itemContainer}>
                <Text style={styles.mainText}>Upload Your Photo</Text>
                <Text style={styles.text}>We'd love to see you. Upload a photo for your profile.</Text>

                <View style={styles.uploadContainer}>
                    {selectedImages.map((image, index) => (
                        <TouchableOpacity key={index} style={styles.addButton} onPress={() => handleChooseImage(index)}>
                            {image ? (
                                <Image source={{ uri: image }} style={styles.thumbnail} />
                            ) : (
                                <Ionicons name="add-circle" size={50} color="#EDD06A" />
                            )}
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <View style={styles.continuebtn}>
                <Button style={styles.Button} onPress={handleSubmit} disabled={isLoading}>
                    <Text style={styles.buttonText}>{isLoading ? 'Submitting...' : 'Continue'}</Text>
                </Button>
            </View>
        </SafeAreaView>
    );
}

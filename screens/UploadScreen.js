import React, { useState, useContext } from "react";
import { View, SafeAreaView, TouchableOpacity, Text, Image, Alert } from "react-native";
import { Button } from "@ant-design/react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { UserContext } from "../UserContext";
import styles from "../styles/UploadStyle";

export default function UploadScreen({ navigation }) {
    const { userData } = useContext(UserContext);
    const [selectedImages, setSelectedImages] = useState(Array(6).fill(null));
    const { updateUserData } = useContext(UserContext);

    const handleChooseImage = async (index) => {
    
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permissionResult.granted) {
            alert("Permission to access the media library is required!");
            return;
        }

        
        const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ['images'],
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
        } else {
            updateUserData('images', selectedImages);
            navigation.navigate("Home");
        }

        try {
            const response = await fetch('https://dating2-theta.vercel.app/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                Alert.alert('Success', 'Data submitted successfully!');
            } else {
                Alert.alert('Error', 'Failed to submit data.');
            }
        } catch (error) {
            Alert.alert('Error', 'An error occurred: ' + error.message);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                    <Ionicons name="arrow-back-outline" size={30} />
                </TouchableOpacity>
                <View style={styles.progressBar}>
                    <View style={styles.progress}></View>
                </View>
            </View>

            <View style={styles.itemContainer}>
                <Text style={styles.mainText}>Upload Your Photo</Text>
                <Text style={styles.text}>We'd love to see you. Upload a photo for your dating journey.</Text>

                <View style={styles.uploadContainer}>
                    {selectedImages.map((image, index) => (
                        <TouchableOpacity key={index} style={styles.addButton} onPress={() => handleChooseImage(index)}>
                            {image ? (
                                <Image source={{ uri: image }} style={styles.thumbnail} />
                            ) : (
                                <Ionicons name="add-circle" size={50} color="#FFB200" />
                            )}
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <View style={styles.continuebtn}>
                <Button style={styles.Button} onPress={handleSubmit}><Text style={styles.buttonText}>Continue</Text></Button>
            </View>
        </SafeAreaView>
    );
}


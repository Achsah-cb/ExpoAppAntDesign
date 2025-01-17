import React, { useState, useContext } from "react";
import { View, TouchableOpacity, Text, Image, Alert } from "react-native";
import { Button } from "@ant-design/react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { UserContext } from "../context/UserContext";
import styles from "../styles/UploadStyle";
import axios from "axios";
import { ThemeContext } from '../context/ThemeContext';
import { Back } from "../components/icons";
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";

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
                <TouchableOpacity onPress={() => navigation.navigate('VerificationScreen')} style={styles.backBtn}><Text>skip</Text></TouchableOpacity>
            </View>
            <View style={styles.progressContainer}>
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
                    <Text style={[styles.text, { fontFamily: theme.fontfamily.semibold, color: theme.colors.subText, marginTop:8, opacity:0.8 }]}>upload at least 4 photos to get </Text>
                    <Text style={[styles.text, { fontFamily: theme.fontfamily.semibold, color: theme.colors.subText, opacity:0.8 }]}>more matches.</Text>
                </View>
                <View style={styles.uploadContainer}>
                    {/* First larger container */}
                    <TouchableOpacity
                        style={styles.BigAddButton}
                        onPress={() => handleChooseImage(0)}
                    >
                        {selectedImages[0] ? (
                            <Image source={{ uri: selectedImages[0] }} style={styles.bigThumbnail} />
                        ) : (
                            <Text style={{fontSize:20, color:'#FF2A64'}}>+</Text>
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
                                <Text style={{fontSize:20, color:'#FF2A64'}}>+</Text>
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
                                <Text style={{fontSize:20, color:'#FF2A64'}}>+</Text>
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
                                <Text style={{fontSize:20, color:'#FF2A64'}}>+</Text>
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
                                <Text style={{fontSize:20, color:'#FF2A64'}}>+</Text>
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
                                <Text style={{fontSize:20, color:'#FF2A64'}}>+</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
            <View style={styles.continuebtn}>
                <Button style={[styles.Button, { backgroundColor: theme.colors.primary }]} onPress={handleSubmit}><Text style={[styles.buttonText, { color: theme.colors.btnText, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.semibold }]}>Continue</Text></Button>
            </View>
        </SafeAreaView>
        </LinearGradient>
    );
}

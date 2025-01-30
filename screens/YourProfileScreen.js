import React, { useState, useContext, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, Image, FlatList, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Back, Calender, Edit } from "../components/icons";
import styles from "../styles/YourProfileStyle";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";
import { Button } from "@ant-design/react-native";
import * as ImagePicker from "expo-image-picker";
import ModalDropdown from "react-native-modal-dropdown";
import DateTimePicker from 'react-native-ui-datepicker';
import { TextInputMask } from 'react-native-masked-text';


export default function MyProfileScreen({ navigation }) {
  const theme = useContext(ThemeContext);
  const { userData, updateUserData } = useContext(UserContext);
  const [dob, setDob] = useState(userData.dob ? new Date(userData.dob) : new Date());
  const [showPicker, setShowPicker] = useState(false);

  const genderOptions = ["male", "female", "non-Binary"]; // for gender
  const timeOptions = ["morning", "afternoon", "evening", "night"]; // for preferred time call

  const handleSelectGender = (selectedGender) => {
    updateUserData("gender", selectedGender);
  };

  const handleSelectTime = (selectedTime) => {
    updateUserData("preferred_time_call", selectedTime);
  };

  const handleConfirm = (event, selectedDate) => {
    if (selectedDate) {
      setDob(selectedDate); // Update dob in local state
      updateUserData("dob", selectedDate.toISOString());
      console.log("Updated dob in context:", selectedDate.toISOString());
    }
    setShowPicker(false);
  };

  const formattedDob = dob instanceof Date && !isNaN(dob) ? dob.toLocaleDateString() : '';

  const [date, setDate] = useState('');
  const [isEditable, setIsEditable] = useState(false);

  const handleChange = (value) => {
    setDate(value); // Update date when the user types
    updateUserData("dob", value); // Update userData with new date value
  };

  useEffect(() => {
    // Update date from userData when the component mounts or userData.dob changes
    setDate(userData.dob || '');
  }, [userData.dob]);

  const handleIconPress = () => {
    setIsEditable(true); // Enable editing when the calendar icon is pressed
  };

  const handleAddImage = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permissionResult.granted) {
        alert("Permission to access the gallery is required!");
        return;
      }

      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"], // Only select images
        allowsMultipleSelection: true, // Enable multi-selection
        selectionLimit: 3, // Limit the number of images to 3
        quality: 1, // High quality
      });

      if (!pickerResult.canceled) {
        const newImageUri = pickerResult.assets[0].uri;
        updateUserData("images", [...(userData.images || []), newImageUri]);
      }
    } catch (error) {
      console.error("Error adding image:", error);
    }
  };

  const handleUpdateProfileImage = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permissionResult.granted) {
        Alert.alert("Permission Required", "Please grant permission to access the gallery.");
        return;
      }

      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsMultipleSelection: false,
        quality: 1,
      });

      if (!pickerResult.canceled && pickerResult.assets[0]) {
        const newImageUri = pickerResult.assets[0].uri;
        const updatedImages = [newImageUri, ...(userData.images || []).slice(1)];
        updateUserData("images", updatedImages);
      } else {
        Alert.alert("No image selected", "Please select a valid image.");
      }
    } catch (error) {
      console.error("Error picking image:", error);
      Alert.alert("Error", "An error occurred while selecting the image.");
    }
  };

  const updateUserProfile = async () => {
    try {
      const response = await fetch("http://13.48.178.236:3000/user/user-profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        Alert.alert("Success", "Your profile has been updated!");
      } else {
        Alert.alert("Error", "Failed to update profile. Please try again.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      Alert.alert("Error", "An error occurred while updating your profile.");
    }
  };

  return (
    <LinearGradient
      colors={["#EFE6FD", "#FFF9E6", "#FDE9EF"]}
      locations={[0, 0.48, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backBtn}
          >
            <Back />
          </TouchableOpacity>
          <View style={styles.headerTitle}>
            <Text
              style={{
                color: theme.colors.text,
                fontFamily: theme.fontfamily.semibold,
                fontSize: theme.fontsize.medium,
              }}
            >
              your profile
            </Text>
          </View>
        </View>

        <FlatList
          data={[]}
          contentContainerStyle={styles.MainItems}
          ListHeaderComponent={
            <>
              {/* profile picture */}
              <View style={styles.profilePicture}>
                {userData.images && userData.images.length > 0 ? (
                  <Image
                    source={{ uri: userData.images[0] }}
                    style={styles.profileImage}
                  />
                ) : (
                  <View
                    style={[
                      styles.profileImage,
                      { justifyContent: 'center', alignItems: 'center' },
                    ]}
                  >
                    <Text style={{ color: theme.colors.subText }}>No Image</Text>
                  </View>
                )}
                <TouchableOpacity style={styles.editIcon} onPress={handleUpdateProfileImage}><Edit /></TouchableOpacity>
              </View>

              <View style={styles.detailsSection}>
                {/* Name */}
                <View style={styles.label}>
                  <Text
                    style={{
                      color: theme.colors.text,
                      fontSize: theme.fontsize.medium,
                      fontFamily: theme.fontfamily.semibold,
                      marginBottom: 3,
                    }}
                  >
                    name
                  </Text>
                  <TextInput
                    style={[styles.input, { borderColor: theme.colors.grey, color: theme.colors.text, fontFamily: theme.fontfamily.regular }]}
                    value={userData.name || ""}
                    onChangeText={(value) => updateUserData("name", value)}
                  />
                </View>
                {/* Phone Number */}
                <View style={styles.label}>
                  <Text
                    style={{
                      color: theme.colors.text,
                      fontSize: theme.fontsize.medium,
                      fontFamily: theme.fontfamily.semibold,
                      marginBottom: 3,
                    }}
                  >
                    phone number
                  </Text>
                  <TextInput
                    style={[styles.input, { borderColor: theme.colors.grey, fontFamily: theme.fontfamily.regular }]}
                    value={userData.phoneNumber || ""}
                    onChangeText={(value) => updateUserData("phoneNumber", value)}
                    placeholder="+1 415-123-4567"
                  />
                </View>
                {/* Email */}
                <View style={styles.label}>
                  <Text
                    style={{
                      color: theme.colors.text,
                      fontSize: theme.fontsize.medium,
                      fontFamily: theme.fontfamily.semibold,
                      marginBottom: 3,
                    }}
                  >
                    email
                  </Text>
                  <TextInput
                    style={[styles.input, { borderColor: theme.colors.grey, fontFamily: theme.fontfamily.regular }]}
                    value={userData.email || ""}
                    onChangeText={(value) => updateUserData("email", value)}
                    placeholder="example@gmail.com"
                  />
                </View>
                {/* Date of Birth */}
                <View style={styles.label}>
                  <Text
                    style={{
                      color: theme.colors.text,
                      fontSize: theme.fontsize.medium,
                      fontFamily: theme.fontfamily.semibold,
                      marginBottom: 3,
                    }}
                  >
                    date of birth
                  </Text>
                  <TextInputMask
                    type={'custom'}
                    options={{
                      mask: '99/99/9999', // Date format dd/mm/yyyy
                    }}
                    value={date}
                    onChangeText={handleChange}
                    editable={isEditable} // Set editable based on the state
                    keyboardType="numeric"
                    placeholder="DD/MM/YYYY"
                    style={[styles.input, { borderColor: theme.colors.grey, fontFamily: theme.fontfamily.regular }]}
                  />
                  <TouchableOpacity style={styles.calenderIcon} onPress={handleIconPress} >
                    <Calender width={28} />
                  </TouchableOpacity>
                </View>

                {/* Gender */}
                <View style={styles.label}>
                  <Text
                    style={{
                      color: theme.colors.text,
                      fontSize: theme.fontsize.medium,
                      fontFamily: theme.fontfamily.semibold,
                      marginBottom: 3,
                    }}
                  >
                    gender
                  </Text>
                  <ModalDropdown
                    options={genderOptions}
                    defaultValue={userData.gender || "male"}
                    onSelect={(index, value) => handleSelectGender(value)}
                    initialScrollIndex={genderOptions.indexOf(userData.gender) >= 0 ? genderOptions.indexOf(userData.gender) : 0}
                    style={[styles.dropdown, { borderColor: theme.colors.grey, }]}
                    textStyle={[styles.dropdownText, { fontFamily: theme.fontfamily.regular }]}
                    dropdownStyle={styles.dropdownMenu}
                    dropdownTextStyle={[styles.genderText, { fontFamily: theme.fontfamily.regular }]}
                  />
                </View>
                {/* Height */}
                <View style={styles.label}>
                  <Text
                    style={{
                      color: theme.colors.text,
                      fontSize: theme.fontsize.medium,
                      fontFamily: theme.fontfamily.semibold,
                      marginBottom: 3,
                    }}
                  >
                    height (inch)
                  </Text>
                  <TextInput
                    style={[styles.input, { borderColor: theme.colors.grey, fontFamily: theme.fontfamily.regular }]}
                    value={userData.height || ""}
                    onChangeText={(value) => updateUserData("height", value)}
                  />
                </View>
                {/* Calling Time */}
                <View style={styles.label}>
                  <Text
                    style={{
                      color: theme.colors.text,
                      fontSize: theme.fontsize.medium,
                      fontFamily: theme.fontfamily.semibold,
                      marginBottom: 3,
                    }}
                  >
                    calling time
                  </Text>
                  <ModalDropdown
                    options={timeOptions}
                    defaultValue={userData.preffered_time_call || "morning"}
                    onSelect={(index, value) => handleSelectTime(value)}
                    initialScrollIndex={timeOptions.indexOf(userData.preffered_time_call) >= 0 ? timeOptions.indexOf(userData.preffered_time_call) : 0}
                    style={[styles.dropdown, { borderColor: theme.colors.grey }]}
                    textStyle={[styles.dropdownText, { fontFamily: theme.fontfamily.regular }]}
                    dropdownStyle={styles.dropdownMenuTimes}
                    dropdownTextStyle={[styles.timeText, { fontFamily: theme.fontfamily.regular }]}
                  />
                </View>
                {/* Uploaded photos */}
                <View style={styles.uploadPhotos}>
                  <Text
                    style={{
                      color: theme.colors.text,
                      fontSize: theme.fontsize.medium,
                      fontFamily: theme.fontfamily.semibold,
                      marginBottom: 3,
                    }}
                  >
                    upload photos
                  </Text>
                  <View style={[styles.imageContainer, {
                    height: Math.ceil((userData.images || []).length / 3) * (styles.image.height + 10),
                  },]}>
                    {userData.images && userData.images.length > 0 && (
                      <FlatList
                        data={userData.images}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={false}
                        showsHorizontalScrollIndicator={false}
                        numColumns={3}
                        renderItem={({ item }) => (
                          <Image
                            source={{ uri: item }}
                            style={[styles.image, { width: '30%', margin: 5 }]}
                          />

                        )}
                      />
                    )}

                  </View>
                  {userData.images && userData.images.length < 6 && (
                    <TouchableOpacity
                      style={[styles.addImages, { borderColor: theme.colors.grey, backgroundColor: theme.colors.btnText }]}
                      onPress={handleAddImage}
                    >
                      <Text style={{ color: theme.colors.primary }}>+</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity><Text style={[styles.buttonText, { color: theme.colors.primary, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.regular }]}>restore to default</Text></TouchableOpacity>
                <Button
                  style={[styles.Button, { backgroundColor: theme.colors.primary }]} onPress={updateUserProfile}>
                  <Text style={[styles.buttonText, { color: theme.colors.btnText, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.semibold }]}>
                    update
                  </Text>
                </Button>
              </View>

            </>
          }
        />

      </SafeAreaView>
    </LinearGradient>
  );
}

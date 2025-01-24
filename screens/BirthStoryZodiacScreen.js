import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Back } from "../components/icons";
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";
import axios from 'axios';
import { Picker } from "@react-native-picker/picker";
import styles from "../styles/BirthStoryZodiacStyle";
import ButtonComponent from "../components/Button";
import { AntDesign } from '@expo/vector-icons';

const zodiacSigns = [
  { label: "Select Zodiac Sign", value: "", icon: null },
  { label: "Capricorn", value: "Capricorn", icon: <AntDesign name="star" size={24} color="#4A90E2" /> },
  { label: "Aquarius", value: "Aquarius", icon: <AntDesign name="cloudo" size={24} color="#4A90E2" /> },
  { label: "Pisces", value: "Pisces", icon: <AntDesign name="barschart" size={24} color="#4A90E2" /> },
  { label: "Aries", value: "Aries", icon: <AntDesign name="rocket1" size={24} color="#4A90E2" /> },
  { label: "Taurus", value: "Taurus", icon: <AntDesign name="shoppingcart" size={24} color="#4A90E2" /> },
  { label: "Gemini", value: "Gemini", icon: <AntDesign name="appstore1" size={24} color="#4A90E2" /> },
  { label: "Cancer", value: "Cancer", icon: <AntDesign name="medicinebox" size={24} color="#4A90E2" /> },
  { label: "Leo", value: "Leo", icon: <AntDesign name="heart" size={24} color="#4A90E2" /> },
  { label: "Virgo", value: "Virgo", icon: <AntDesign name="hourglass" size={24} color="#4A90E2" /> },
  { label: "Libra", value: "Libra", icon: <AntDesign name="scale" size={24} color="#4A90E2" /> },
  { label: "Scorpio", value: "Scorpio", icon: <AntDesign name="bug" size={24} color="#4A90E2" /> },
  { label: "Sagittarius", value: "Sagittarius", icon: <AntDesign name="flag" size={24} color="#4A90E2" /> },
];

const BirthStoryZodiacScreen = ({ navigation }) => {
  const { updateUserData } = useContext(UserContext);
  const theme = useContext(ThemeContext);

  const [selectedTime, setSelectedTime] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleConfirm = (event, selectedDate) => {
    setShowPicker(false); // Close picker
    if (selectedDate) {
      const formattedTime = selectedDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setSelectedTime(formattedTime);
      updateUserData("birth_time", formattedTime); // Save in UserContext
    }
  };

  const handleSubmit = async () => {
    if (!selectedTime) {
      Alert.alert("Error", "Please select your birth time!");
      return;
    }

    setLoading(true);

    try {
      const token = "your_token_here"; // Replace with the actual token
      const payload = {
        birth_time: selectedTime,
      };

      const response = await axios.post(
        "http://localhost:3000/user/user-profile",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        Alert.alert("Success", "Birth time saved successfully!");
        navigation.navigate("NextScreen"); // Replace with the next screen name
      } else {
        Alert.alert("Error", "Failed to save birth time!");
      }
    } catch (error) {
      console.error("Error saving birth time:", error.message);
      Alert.alert("Error", "An error occurred while saving birth time.");
    } finally {
      setLoading(false);
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
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
              <Back />
            </TouchableOpacity>
          </View>

          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progress, { backgroundColor: theme.colors.primary }]}></View>
              <View style={[styles.progress, { backgroundColor: theme.colors.grey }]}></View>
              <View style={[styles.progress, { backgroundColor: theme.colors.grey }]}></View>
              <View style={[styles.progress, { backgroundColor: theme.colors.grey }]}></View>
              <View style={[styles.progress, { backgroundColor: theme.colors.grey }]}></View>
              <View style={[styles.progress, { backgroundColor: theme.colors.grey }]}></View>
              <View style={[styles.progress, { backgroundColor: theme.colors.grey }]}></View>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.titleContainer}>
              <Text style={[styles.title, { color: theme.colors.text, fontSize: theme.fontsize.large, fontFamily: theme.fontfamily.bold }]}>
                <Text style={[styles.title, { color: theme.colors.cyan, fontSize: theme.fontsize.large, fontFamily: theme.fontfamily.bold }]}>what's</Text> your birth story?
              </Text>
              <Text style={[styles.subtitle, { color: theme.colors.subText, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.semibold }]}>
                share your birth time to explore your stars.
              </Text>
            </View>

            <View style={styles.timeComponent}>
            <TouchableOpacity
              style={styles.inputBox}
              onPress={() => setShowPicker(true)}
            >
              <Text
                style={[
                  styles.input,
                  {
                    color: selectedTime
                      ? theme.colors.text
                      : theme.colors.placeholder,
                  },
                ]}
              >
                {selectedTime || "Select Time"}
              </Text>
              <AntDesign name="clockcircleo" size={24} color={theme.colors.primary} />
            </TouchableOpacity>
            </View>
            {showPicker && (
            <DateTimePicker
              value={new Date()}
              mode="time"
              is24Hour={false}
              display="default"
              onChange={handleConfirm}
            />
          )}
          </View>

          {/* <View style={styles.itemContainer}>
            <View style={styles.titleContainer}>
              <Text style={[styles.title, { color: theme.colors.text, fontSize: theme.fontsize.large, fontFamily: theme.fontfamily.bold }]}>
                <Text style={[styles.title, { color: theme.colors.cyan, fontSize: theme.fontsize.large, fontFamily: theme.fontfamily.bold }]}>what's</Text> your zodiac sign?
              </Text>
              <Text style={[styles.subtitle, { color: theme.colors.subText, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.semibold }]}>
                unlock your vibe with your zodiac
              </Text>
            </View>

            <View style={styles.timeComponent}>

            </View>
          </View> */}



          {/* Continue Button */}
          <View style={styles.continuebtn}>
            <ButtonComponent onPress={handleSubmit} />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default BirthStoryZodiacScreen;
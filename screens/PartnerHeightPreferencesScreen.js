import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import { ThemeContext } from "../context/ThemeContext";
import styles from "../styles/PartnerHeightPreferencesStyle";

const IdealPartnerPreferencesScreen = ({ navigation }) => {
  const theme = useContext(ThemeContext);
  const [selectedHeight, setSelectedHeight] = useState(null);

  const options = [
    "Shorter Than Me",
    "About The Same Height",
    "Taller Than Me",
  ];

  // const handleSubmit = async () => {
  //   try {
  //     const response = await fetch("https://example.com/api/preferences", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ heightPreference: selectedHeight }),
  //     });
  //     const data = await response.json();
  //     console.log("Submitted successfully", data);
  //     // Navigate to the next screen or handle response
  //   } catch (error) {
  //     console.error("Error submitting data:", error);
  //   }
  // };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrowleft" size={styles.backButtonIconSize} style={[{ color: theme.colors.secondary }]} />
        </TouchableOpacity>

        <View style={[styles.progressBarContainer, { backgroundColor: theme.colors.primary }]}>
          <View style={[styles.progressBar, { backgroundColor: theme.colors.secondary }]} />
        </View>
      </View>

      <View style={styles.InnerContainer}>
      <Text
        style={[
          styles.title,
          { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large },
        ]}
      >
        What Are Your Ideal Partner Preferences?
      </Text>

      {/* Subtitle */}
      <Text
        style={[
          styles.subtitle,
          { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large },
        ]}
      >
        Height
      </Text>

      {/* Options */}
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.option,
            selectedHeight === option && {
              borderColor: theme.colors.secondary,
              backgroundColor: theme.colors.primary,
           },
          ]}
          onPress={() => setSelectedHeight(option)}
        >
          <View
            style={[
              styles.radioCircle,
              selectedHeight === option && {
                backgroundColor: theme.colors.primary,
                borderColor: theme.colors.secondary
              },
            ]}
          />
          <Text
            style={[
              styles.optionText,
              { color: theme.colors.text,
                fontFamily: theme.fontfamily.semibold,
                fontSize: theme.fontsize.medium },
            ]}
          >
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>

      {/* Next Button */}
      <View style={styles.continuebtn}>
        <TouchableOpacity
          style={[styles.nextButton, { backgroundColor: theme.colors.primary }]}
          onPress={() => navigation.navigate('PartnerAgePreferences')}
        >
          <Text
            style={[
              { color: theme.colors.text, fontFamily: theme.fontfamily.semibold, fontSize: theme.fontsize.medium },
            ]}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default IdealPartnerPreferencesScreen;

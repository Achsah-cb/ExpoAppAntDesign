import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Platform,
  ScrollView
} from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import Icon from "react-native-vector-icons/AntDesign";
import { useTheme } from "../context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/PartnerLocationPreferencesStyle";

const PartnerLocationPreferencesScreen = ({navigation}) => {
  const theme = useTheme();
  const [distanceRange, setDistanceRange] = useState([5, 15]);

  const onValuesChange = (values) => {
    setDistanceRange(values);
  };


  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: theme.colors.background },
      ]}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}><Ionicons name="chevron-back" size={20} color="#D48806" /></TouchableOpacity>
      </View>
      <View style={[styles.progressBar]}>
        <View style={[styles.progressContainer, { backgroundColor: theme.colors.primary }]}>
          <View style={[styles.progress, { backgroundColor: theme.colors.secondary }]}></View>
        </View>
      </View>

      {/* Title */}
      <Text
        style={[
          styles.title,
          {
            color: theme.colors.text,
            fontFamily: theme.fontfamily.bold,
          },
        ]}
      >
        What Are Your Ideal Partner Location Preferences?
      </Text>

      {/* Slider */}
      <View style={styles.sliderContainer}>
        <MultiSlider
          values={distanceRange}
          min={0}
          max={25}
          step={5}
          sliderLength={Dimensions.get("window").width * 0.8}
          onValuesChange={onValuesChange}
          selectedStyle={{
            backgroundColor: theme.colors.primary,
          }}
          unselectedStyle={{
            backgroundColor: "#D3D3D3",
          }}
          markerStyle={{
            backgroundColor: theme.colors.primary,
            height: 20,
            width: 20,
          }}
          trackStyle={{
            height: 4,
          }}
        />
        {/* Distance Labels */}
        <View style={styles.distanceLabels}>
          {[0, 5, 10, 15, 20, 25].map((distance, index) => (
            <Text
              key={index}
              style={[
                styles.distanceLabel,
                { fontFamily: theme.fontfamily.medium },
              ]}
            >
              {distance} km
            </Text>
          ))}
        </View>
      </View>

      {/* Next Button */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.nextButton,
            { backgroundColor: theme.colors.primary },
          ]}
        >
          <Text
            style={[
              {
                color: theme.colors.text,
                fontSize: theme.fontsize.medium,
                fontFamily: theme.fontfamily.semibold,
              },
            ]}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )

}
export default PartnerLocationPreferencesScreen;

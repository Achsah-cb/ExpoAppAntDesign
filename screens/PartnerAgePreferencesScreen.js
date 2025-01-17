import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from '../styles/PartnerAgePreferencesStyle';
import { Ionicons } from "@expo/vector-icons";

const PartnerAgePreferencesScreen = ({ navigation = () => { } }) => {
  const theme = useContext(ThemeContext);
  const [ageRange, setAgeRange] = useState([18, 80]);

  if (!theme) {
    console.error('Theme context is missing.');
    return null;
  }

  const handleValuesChange = (values) => {
    setAgeRange(values);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
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
          { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large },
        ]}
      >
        What Are Your Ideal{'\n'}Partner Age Preferences?
      </Text>

      {/* Range Slider */}
      <View style={styles.sliderContainer}>
        <MultiSlider
          values={ageRange}
          onValuesChange={handleValuesChange}
          min={18}
          max={80}
          step={1}
          selectedStyle={{ backgroundColor: theme.colors.primary }}
          unselectedStyle={{ backgroundColor: '#E0E0E0' }}
          trackStyle={{ height: 6, borderRadius: 4 }}
          markerStyle={{
            backgroundColor: theme.colors.primary,
            height: 25,
            width: 25,
          }}
          containerStyle={{ height: 40 }}
          sliderLength={280} // Adjust this value as needed
        />
        {/* Age Labels */}
        <View style={styles.ageLabels}>
          {Array.from({ length: 8 }, (_, i) => 18 + i * 7).map((age) => (
            <Text
              key={age}
              style={[
                styles.ageLabelText,
                { color: theme.colors.text, fontFamily: theme.fontfamily.regular },
              ]}
            >
              {age}
            </Text>
          ))}
        </View>
      </View>

      {/* Next Button */}
      <TouchableOpacity
        style={[styles.nextButton, { backgroundColor: theme.colors.primary }]}
        onPress={() => navigation.navigate('PartnerLocationPreferences')}
      >
        <Text
          style={[
            styles.nextButtonText,
            { color: theme.colors.text, fontFamily: theme.fontfamily.semibold },
          ]}
        >
          Next
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

export default PartnerAgePreferencesScreen;
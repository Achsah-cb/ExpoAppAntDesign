import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { Radio } from '@ant-design/react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";

import styles from '../styles/PartnerLocationPreferencesStyle';

const PartnerLocationPreferencesScreen = ({ navigation }) => {
  const theme = useTheme();
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}><Ionicons name="chevron-back" size={20} color="#D48806" /></TouchableOpacity>
      </View>
      <View style={[styles.progressBar]}>
        <View style={[styles.progressContainer, { backgroundColor: theme.colors.primary }]}>
          <View style={[styles.progress, { backgroundColor: theme.colors.secondary }]}></View>
        </View>
      </View>

      <View style={styles.itemContainer}>
        <Text style={[styles.mainText, { color: theme.colors.text }]}>
          What Are Your Ideal Partner Location Preferences?
        </Text>

        <Radio.Group onChange={setSelectedOption} value={selectedOption}>
          <View style={styles.radioOption}>
            <Radio value="Nearby">Nearby</Radio>
          </View>
          <View style={styles.radioOption}>
            <Radio value="Long-Distance">Long-Distance</Radio>
          </View>
        </Radio.Group>
      </View>

      <View style={styles.continuebtn}>
        <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('YourEducation')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PartnerLocationPreferencesScreen;

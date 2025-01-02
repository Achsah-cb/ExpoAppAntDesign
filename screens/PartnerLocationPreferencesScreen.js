import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { Radio } from '@ant-design/react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from '../styles/PartnerLocationPreferencesStyle';

const PartnerLocationPreferencesScreen = ({ navigation }) => {
  const theme = useTheme();
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color={theme.colors.text} style={styles.backBtn} />
        </TouchableOpacity>
        <View style={styles.progressBar}>
          <View style={[styles.progress, { width: '40%' }]} />
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

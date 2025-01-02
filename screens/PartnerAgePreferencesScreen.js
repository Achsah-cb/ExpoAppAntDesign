import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Radio } from '@ant-design/react-native';
import { AntDesign } from '@expo/vector-icons';
import { ThemeContext } from '../context/ThemeContext';
import styles from '../styles/PartnerAgePreferencesStyle';
import { ScrollView } from 'react-native-gesture-handler';

const PartnerAgePreferencesScreen = ({ navigation }) => {
  const theme  = useContext(ThemeContext);
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView style={[styles.scrolldiv]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color={theme.colors.text} style={styles.backBtn} />
        </TouchableOpacity>
        <View style={styles.progressBar}>
          <View style={[styles.progressxddc, { width: '50%' }]} />
        </View>
      </View>

      <View style={styles.itemContainer}>
        <Text style={[styles.mainText, { color: theme.colors.text }]}>
          What Are Your Ideal Partner Age Preferences?
        </Text>

        <Radio.Group onChange={setSelectedOption} value={selectedOption}>
          <View style={styles.radioOption}>
            <Radio value="18-30">18-30</Radio>
          </View>
          <View style={styles.radioOption}>
            <Radio value="31-40">31-40</Radio>
          </View>
          <View style={styles.radioOption}>
            <Radio value="41+">41+</Radio>
          </View>
        </Radio.Group>
      </View>

      <View style={styles.continuebtn}>
        <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('PartnerLocationPreferences')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PartnerAgePreferencesScreen;
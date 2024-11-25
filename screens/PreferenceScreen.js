import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, Radio } from '@ant-design/react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/PreferenceStyle';
import PreferenceBg from '../assets/image-svg/preferencebg.svg';

const PreferenceScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    'A relationship',
    'Something casual',
    'I’m not sure yet',
    'Prefer not to say',
  ];

  return (
    <View style={styles.container}>
      <Icon 
        name="arrow-back-outline" 
        size={24} 
        color="#000" 
        style={styles.backButton} 
        onPress={() => navigation.goBack()} 
      />

      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar} />
      </View>

      <Text style={styles.title}>I Am Looking For...</Text>
      <Text style={styles.subtitle}>
        Provide us with further insights into your preferences
      </Text>

      <View style={styles.optionsContainer}>
  {options.map((option, index) => (
    <TouchableOpacity
      key={index}
      style={[
        styles.radioItem,
        selectedOption === option && styles.selectedOption,
      ]}
      onPress={() => setSelectedOption(option)}
    >
      <Text
        style={[
          styles.optionText,
          selectedOption === option && styles.selectedOptionText,
        ]}
      >
        {option}
      </Text>
    </TouchableOpacity>
  ))}
</View>


      <View style={styles.backgroundimg}>
        <PreferenceBg width={200} height={200} />
      </View>

      <Button
  type="primary"
  style={styles.continueButton}
  activeStyle={{ backgroundColor: '#dfbe09' }}
  onPress={() => console.log('Selected option:', selectedOption)}
>
  Continue
</Button>
    </View>
  );
};

export default PreferenceScreen;
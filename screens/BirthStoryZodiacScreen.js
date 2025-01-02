import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from "react-native-vector-icons/AntDesign";
import styles from '../styles/BirthStoryZodiacStyle';
import { ThemeContext } from '../context/ThemeContext.js';

const zodiacData = [
  { name: 'Aries', icon: '♈' },
  { name: 'Taurus', icon: '♉ ' },
  { name: 'Gemini', icon: '♊' },
  { name: 'Cancer', icon: '♋' },
  { name: 'Leo', icon: '♌' },
  { name: 'Virgo', icon: '♍' },
  { name: 'Libra', icon: '♎' },
  { name: 'Scorpio', icon: '♏' },
  { name: 'Sagittarius', icon: '♐' },
  { name: 'Capricorn', icon: '♑' },
  { name: 'Aquarius', icon: '♒' },
  { name: 'Pisces', icon: '♓' },
];

const BirthStoryZodiacScreen = ({ navigation }) => {
  const theme = useContext(ThemeContext);
  const [selectedZodiac, setSelectedZodiac] = useState('');
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [birthTime, setBirthTime] = useState({ hour: '09', minute: '30', period: 'AM' });

  if (!theme) {
    console.error('Theme context is not provided.');
    return null;
  }

  const handleTimeChange = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime) {
      const hours = selectedTime.getHours();
      const minutes = selectedTime.getMinutes();
      const period = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours > 12 ? hours - 12 : hours || 12; // Adjust 12-hour format
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

      setBirthTime({
        hour: formattedHours.toString(),
        minute: formattedMinutes.toString(),
        period,
      });
    }
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Icon name="arrowleft" size={styles.backButtonIconSize} style={[{ color: theme.colors.secondary }]} />
        </TouchableOpacity>

        <View style={[styles.progressBar, { backgroundColor: theme.colors.primary }]}>
          <View style={[styles.progress, { backgroundColor: theme.colors.secondary }]} />
        </View>
      </View>

      <View style={styles.InnerContainer}>
        <Text style={[styles.heading, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }]}>
          What's Your Birth Story?
        </Text>
        <Text style={[styles.subHeading, { color: theme.colors.text, fontFamily: theme.fontfamily.light, fontSize: theme.fontsize.regular }]}>
          Born on [date], in [place], ready to explore!
        </Text>

        {/* Time Picker */}
        <View style={styles.timePickerContainer}>
          <TouchableOpacity style={styles.timeBlock} onPress={() => setShowTimePicker(true)}>
            <Text style={[styles.timeText, { color: theme.colors.text, fontFamily: theme.fontfamily.medium }]}>
              {birthTime.hour}
            </Text>
          </TouchableOpacity>
          <Text style={[styles.colon, { color: theme.colors.text }]}>:</Text>
          <TouchableOpacity style={styles.timeBlock} onPress={() => setShowTimePicker(true)}>
            <Text style={[styles.timeText, { color: theme.colors.text, fontFamily: theme.fontfamily.medium }]}>
              {birthTime.minute}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.periodBlock} onPress={() => setShowTimePicker(true)}>
            <Text style={[styles.periodText, { color: theme.colors.text, fontFamily: theme.fontfamily.medium }]}>
              {birthTime.period}
            </Text>
          </TouchableOpacity>
        </View>

        {showTimePicker && (
          <Modal transparent={true} animationType="fade">
            <DateTimePicker
              mode="time"
              value={new Date()}
              is24Hour={false}
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={handleTimeChange}
            />
          </Modal>
        )}
      </View>

      <View style={styles.zodiacParentContainer}>
        <Text style={[styles.zodiacHeading, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }]}>
          Your Zodiac Sign?
        </Text>
        <Text style={[styles.zodiacSubHeading, { color: theme.colors.text, fontFamily: theme.fontfamily.light }]}>
          Are you an Aries, Cancer, or Libra? Let's explore your stars!✨
        </Text>

        <View style={styles.zodiacContainer}>
          {zodiacData.map((zodiac) => (
            <TouchableOpacity
              key={zodiac.name}
              style={[
                styles.zodiacButton,
                selectedZodiac === zodiac.name && { backgroundColor: theme.colors.primary, borderColor: theme.colors.secondary },
              ]}
              onPress={() => setSelectedZodiac(zodiac.name)}
            >
              <Text
                name={zodiac.icon}
                style={[{ fontSize: theme.fontsize.medium }]}
                color={selectedZodiac === zodiac.name ? '#FFF' : theme.colors.text}
              />
              <Text
                style={[
                  styles.zodiacText,
                  { fontFamily: theme.fontfamily.regular, fontSize: theme.fontsize.small },
                  selectedZodiac === zodiac.name && { color: theme.colors.text, fontFamily: theme.fontfamily.semibold },
                ]}
              >
                {zodiac.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Next Button */}
      <View style={styles.nextButtonContainer}>
        <TouchableOpacity style={[styles.nextButton, { backgroundColor: theme.colors.primary, color: theme.colors.text, }]} onPress={() => navigation.navigate('PartnerHeightPreferences')}>
          <Text style={[{ fontFamily: theme.fontfamily.semibold, fontSize: theme.fontsize.medium }]}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default BirthStoryZodiacScreen;
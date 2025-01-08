import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from '@ant-design/react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/LocationStyle';

const LocationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="map-marker" size={100} color="#FF6B6B" />
      </View>

      <Text style={styles.title}>Enable Your Location</Text>

      <Text style={styles.subtitle}>
        Choose your location to start finding people around you.
      </Text>

      <Button
        type="primary"
        style={styles.allowButton}
        // onPress={() => {
        //   // Handle location permission logic
        // }}
      >
        Allow Location Access
      </Button>

      <TouchableOpacity
        style={styles.manualButton}
        // onPress={() => {
        // }}
      >
        <Text style={styles.manualButtonText}>Enter Location Manually</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LocationScreen;

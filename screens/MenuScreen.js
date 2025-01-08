import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import styles from '../styles/MenuStyle';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Chats, Profile, ForYou } from '../components/icons';
import ChatScreen from './ChatScreen';


const ProfileScreen = () => (
  <View style={styles.screen}>
  </View>
);


export default function MenuScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back-outline" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')} style={styles.settingsBtn}>
          <Ionicons name="settings-outline" size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.screen}>
        <View style={styles.profileImage}>

        </View>
        <View style={styles.nameAndAge}>
          <Text style={styles.username}>Maya</Text>
          <Text style={styles.userage}>Age 29</Text>
        </View>
        <View style={styles.premium}>
          <Text style={styles.heading}>Premium</Text>
          <Text>Get all the benefits</Text>
          <Text style={styles.priceLabel}>Get premium of $70</Text>
        </View>
        <View style={styles.containerList}>
          <View style={styles.contents}>
            <ForYou />
            <View>
              <Text style={styles.contentText}>See Who Likes Me</Text>
            </View>
            <Ionicons name="chevron-forward-sharp" size={20} />
          </View>
          <View style={styles.contents}>
            <Ionicons name="eye-sharp" size={30} color='#C29225' />
            <View>
              <Text style={styles.contentText}>Who Sees You</Text>
            </View>
            <Ionicons name="chevron-forward-sharp" size={20} />
          </View>
        </View>
      </View>
    </View>
  );
}

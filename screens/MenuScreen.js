import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import styles from '../styles/MenuStyle';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const ForyouScreen = () => (
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
        <Ionicons name="thumbs-up-sharp" size={30} color='#C29225'></Ionicons>
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
);


const LikedyouScreen = () => (
  <View style={styles.screen}>
  </View>
);

const ChatScreen = () => (
  <View style={styles.screen}>
  </View>
);

const PeopleScreen = () => (
  <View style={styles.screen}>
  </View>
);

const ProfileScreen = () => (
  <View style={styles.screen}>
  </View>
);

const Tab = createBottomTabNavigator();

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

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'For you') {
              iconName = 'heart';
            } else if (route.name === 'Liked you') {
              iconName = 'thumbs-up-sharp';
            } else if (route.name === 'ChatScreen') {
              iconName = 'chatbubbles';
            } else if (route.name === 'People') {
              iconName = 'people';
            } else if (route.name === 'Profile') {
              iconName = 'person-sharp';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#C29225',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="For you" component={ForyouScreen} />
        <Tab.Screen name="Liked you" component={LikedyouScreen} />
        <Tab.Screen name="ChatScreen" component={ChatScreen} />
        <Tab.Screen name="People" component={PeopleScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </View>
  );
}

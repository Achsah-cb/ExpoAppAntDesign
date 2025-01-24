import { View, Text } from 'react-native'
import React from 'react'
import styles from '../styles/ForyouStyle';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Foryou() {
  return (
    <LinearGradient
      colors={['#EFE6FD', '#FFF9E6', '#FDE9EF']}
      locations={[0, 0.48, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <View><Text>For You Screen</Text></View>
      </SafeAreaView>
    </LinearGradient>
  )
}
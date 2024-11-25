import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import OtpScreen from './screens/OtpScreen';
import PreferenceScreen from './screens/PreferenceScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} styles={styles.container} options={{ headerShown: false }} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} styles={styles.container} options={{ headerShown: false }} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} styles={styles.container} options={{ headerShown: false }} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} styles={styles.container} options={{ headerShown: false }} />
      {/* <Stack.Screen name="PreferenceScreen" component={PreferenceScreen} styles={styles.container} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

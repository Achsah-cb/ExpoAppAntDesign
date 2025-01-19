import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CustomSplashScreen from './screens/SplashScreen';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import OtpScreen from './screens/OtpScreen';
import BirthStoryZodiacScreen from './screens/BirthStoryZodiacScreen';
import LocationAndLanguagesScreen from './screens/LocationLanguageScreen';
import PartnerHeightPreferencesScreen from './screens/PartnerHeightPreferencesScreen';
import PartnerLocationPreferencesScreen from './screens/PartnerLocationPreferencesScreen';
import PartnerAgePreferencesScreen from './screens/PartnerAgePreferencesScreen';
import YourNameScreen from './screens/YourNameScreen';
import HeightScreen from './screens/HeightScreen';
import DobScreen from './screens/DobScreen';
import GenderScreen from './screens/GenderScreen';
import TimesScreen from './screens/TimesScreen';
import InterestScreen from './screens/InterestScreen';
import UploadScreen from './screens/UploadScreen';
import DmScreen from './screens/DmScreen';
import MenuScreen from './screens/MenuScreen';
import SettingsScreen from './screens/SettingsScreen';
import ChatScreen from './screens/ChatScreen';
import { UserProvider } from './context/UserContext';
import VerificationScreen from './screens/VerificationScreen';
import BottomNavigation from './components/BottomNavigation';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();

const AppContainer = ({ children }) => {
  const theme = useTheme(); // Access the theme context
  return (
    <View style={[styles.container, { backgroundColor: theme.gradient }]}>
      {children}
    </View>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),
  });

  return (
    <ThemeProvider>
      <UserProvider>
        <AppContainer>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
              <Stack.Screen
                name="Splash"
                component={CustomSplashScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="OtpScreen"
                component={OtpScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="YourNameScreen"
                component={YourNameScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HeightScreen"
                component={HeightScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DoBScreen"
                component={DobScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="GenderScreen"
                component={GenderScreen}
                options={{ headerShown: false }}
              />
             
              <Stack.Screen
                name="InterestScreen"
                component={InterestScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="UploadPhotoScreen"
                component={UploadScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="BirthStoryZodiac"
                component={BirthStoryZodiacScreen}
                options={{ headerShown: false }}
              />
              {/* <Stack.Screen
                name="LocationAndLanguage"
                component={LocationAndLanguagesScreen}
                options={{ headerShown: false }}
              /> */}
              <Stack.Screen
                name="PartnerHeightPreferences"
                component={PartnerHeightPreferencesScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PartnerAgePreferences"
               component={PartnerAgePreferencesScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TimesScreen"
                component={TimesScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DmScreen"
                component={DmScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MenuScreen"
                component={MenuScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ChatScreen"
                component={ChatScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="VerificationScreen"
                component={VerificationScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ChatLandingScreen"
                component={BottomNavigation}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PartnerLocationPreferences"
                component={PartnerLocationPreferencesScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </AppContainer>
      </UserProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

  },
});

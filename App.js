import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import OtpScreen from './screens/OtpScreen';

import YourNameScreen from './screens/YourNameScreen';
import EmailScreen from './screens/EmailScreen';
import DobScreen from './screens/DobScreen';
import GenderScreen from './screens/GenderScreen';
import LookingForScreen from './screens/LookingForScreen';
import InterestScreen from './screens/InterestScreen';
import UploadScreen from './screens/UploadScreen';
import { UserProvider } from './UserContext';


const Stack = createStackNavigator();

export default function App() {
  return (
     <UserProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={SplashScreen} styles={styles.container} options={{ headerShown: false }} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} styles={styles.container} options={{ headerShown: false }} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} styles={styles.container} options={{ headerShown: false }} />
          <Stack.Screen name="OtpScreen" component={OtpScreen} styles={styles.container} options={{ headerShown: false }} />
          <Stack.Screen name='Name' component={YourNameScreen} options={{headerShown:false}}/>
          <Stack.Screen name='Email' component={EmailScreen} options={{headerShown:false}}/>
          <Stack.Screen name='DoB' component={DobScreen} options={{headerShown:false}}/>
          <Stack.Screen name='Gender' component={GenderScreen} options={{headerShown:false}}/>
          <Stack.Screen name='LookingFor' component={LookingForScreen} options={{headerShown:false}}/>
          <Stack.Screen name='Interest' component={InterestScreen} options={{headerShown:false}}/>
          <Stack.Screen name='Upload' component={UploadScreen} options={{headerShown: false}}/>
          {/* <Stack.Screen name="PreferenceScreen" component={PreferenceScreen} styles={styles.container} options={{ headerShown: false }} /> */}
          </Stack.Navigator>
       </NavigationContainer>
      </UserProvider>
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

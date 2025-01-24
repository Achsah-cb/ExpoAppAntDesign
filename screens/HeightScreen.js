import { useState, useContext } from "react";
import { View, Text, TouchableOpacity, Alert, Dimensions } from "react-native";
import { Button } from '@ant-design/react-native';
import { UserContext } from "../context/UserContext";
import styles from "../styles/HeightStyle";
import { ThemeContext } from '../context/ThemeContext';
import { Back } from "../components/icons";
import WheelPicker from '@quidone/react-native-wheel-picker';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get('window');
export const responsiveWidth = (percentage) => (width * percentage) / 100;

export default function HeightScreen({ navigation }) {
  
  const theme = useContext(ThemeContext);
  const { updateUserData } = useContext(UserContext);

  const heights = [];
  for (let i = 130; i <= 200; i++) {
    heights.push(`${i} cm`);
  }
  
  const [height, setHeight] = useState(heights[20]);

  const handleSubmit = () => {
    if (!height) {
      Alert.alert("Select your height.");
    } else {
      updateUserData('height', height)
      navigation.navigate("TimesScreen");
    }
  };
  return (
     // linear gradient
     <LinearGradient
     colors={['#EFE6FD', '#FFF9E6', '#FDE9EF']}
     locations={[0, 0.48, 1]}
     start={{ x: 0, y: 0 }}
     end={{ x: 1, y: 1 }}
     style={{ flex: 1 }} 
 >
     <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}><Back /></TouchableOpacity>
      </View>
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={[styles.progress, { backgroundColor: theme.colors.primary }]}></View>
          <View style={[styles.progress, { backgroundColor: theme.colors.gold }]}></View>
          <View style={[styles.progress, { backgroundColor: theme.colors.blue }]}></View>
          <View style={[styles.progress, { backgroundColor: theme.colors.orange }]}></View>
          <View style={styles.progress}></View>
          <View style={styles.progress}></View>
          <View style={styles.progress}></View>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.textContainer}>
          <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }]}>
            <Text style={{ color: theme.colors.orange, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }}>what </Text>is your</Text>
          <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }]}>height?</Text>
        </View>

        {/* Height picker */}
        <WheelPicker
        data={heights.map((item) => ({ label: item, value: item }))} // Map to the required format
        value={height}
        onValueChanged={({ item: { value } }) => setHeight(value)} // Update state
        width={responsiveWidth(80)}
        overlayItemStyle={{
          backgroundColor: "#FFDBCA",
          borderColor: '#FF7F00',
          borderWidth: 2,
          borderRadius:15,
          opacity: 0.5,
        }}
        itemTextStyle={{fontWeight:'600', color:"#000000"}}
      />

      </View>
      <View style={styles.continuebtn}>
        <Button style={[styles.Button, { backgroundColor: theme.colors.primary }]} onPress={handleSubmit}><Text style={[styles.buttonText, { color: theme.colors.btnText, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.semibold }]}>Continue</Text></Button>
      </View>
    </SafeAreaView>
    </LinearGradient>
  )
}

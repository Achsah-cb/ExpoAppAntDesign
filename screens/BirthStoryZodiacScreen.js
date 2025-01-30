// import React, { useContext, useState, useRef } from "react";
// import { Dimensions } from "react-native";
// const { width } = Dimensions.get("window");
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   SafeAreaView,
//   KeyboardAvoidingView,
//   Platform,
//   Alert,
// } from "react-native";
// import DateTimePicker from '@react-native-community/datetimepicker';
// import Carousel from "react-native-snap-carousel";
// import { Back } from "../components/icons";
// import { LinearGradient } from 'expo-linear-gradient';
// import Icon from 'react-native-vector-icons/AntDesign';
// import { ThemeContext } from "../context/ThemeContext";
// import { UserContext } from "../context/UserContext";
// import axios from 'axios';
// import { Picker } from "@react-native-picker/picker";
// import styles from "../styles/BirthStoryZodiacStyle";
// import ButtonComponent from "../components/Button";
// import { AntDesign } from '@expo/vector-icons';

// import { Aries } from '../components/icons';
// import { Taurus } from '../components/icons';
// import { Gemini } from '../components/icons';
// import { Cancer } from '../components/icons';
// import { Leo } from '../components/icons';
// import { Virgo } from '../components/icons';
// import { Libra } from '../components/icons';
// import { Scorpio } from '../components/icons';
// import { Sagittarius } from '../components/icons';
// import { Capricorn } from '../components/icons';
// import { Aquarius } from '../components/icons';
// import { Pisces } from '../components/icons';

// const zodiacSigns = [
//   { label: "Select Zodiac Sign", value: "", icon: null },
//   { label: "Capricorn", value: "Capricorn", icon: <Capricorn /> },
//   { label: "Aquarius", value: "Aquarius", icon: <Aquarius /> },
//   { label: "Pisces", value: "Pisces", icon: <Pisces /> },
//   { label: "Aries", value: "Aries", icon: <Aries /> },
//   { label: "Taurus", value: "Taurus", icon: <Taurus /> },
//   { label: "Gemini", value: "Gemini", icon: <Gemini /> },
//   { label: "Cancer", value: "Cancer", icon: <Cancer /> },
//   { label: "Leo", value: "Leo", icon: <Leo /> },
//   { label: "Virgo", value: "Virgo", icon: <Virgo /> },
//   { label: "Libra", value: "Libra", icon: <Libra /> },
//   { label: "Scorpio", value: "Scorpio", icon: <Scorpio /> },
//   { label: "Sagittarius", value: "Sagittarius", icon: <Sagittarius /> },
// ];

// const BirthStoryZodiacScreen = ({ navigation }) => {
//   const { updateUserData } = useContext(UserContext);
//   const theme = useContext(ThemeContext);
//   const carouselRef = useRef(null);

//   const [selectedTime, setSelectedTime] = useState(null);
//   const [showPicker, setShowPicker] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleConfirm = (event, selectedDate) => {
//     setShowPicker(false);
//     if (selectedDate) {
//       const formattedTime = selectedDate.toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       });
//       setSelectedTime(formattedTime);
//       updateUserData("birth_time", formattedTime);
//     }
//   };

//   const handleSubmit = async () => {
//     if (!selectedTime) {
//       Alert.alert("Error", "Please select your birth time!");
//       return;
//     }
//     setLoading(true);

//     try {
//       const token = "your_token_here";
//       const payload = {
//         birth_time: selectedTime,
//       };

//       const response = await axios.post(
//         "http://http://13.48.178.236:3000/user/user-profile",
//         payload,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.status === 201) {
//         Alert.alert("Success", "Birth time saved successfully!");
//         navigation.navigate("NextScreen");
//       } else {
//         Alert.alert("Error", "Failed to save birth time!");
//       }
//     } catch (error) {
//       console.error("Error saving birth time:", error.message);
//       Alert.alert("Error", "An error occurred while saving birth time.");
//     } finally {
//       setLoading(false);
//     }
//   };


//   const renderItem = ({ item }) => {
//     console.log("RenderItem Data:", item); // Debug log
//     return (
//       <View style={styles.card}>
//         {item.icon}
//         <Text style={styles.label}>{item.label}</Text>
//       </View>
//     );
//   };

//   console.log("Carousel Data:", zodiacSigns); // Debug log for carousel data
//   console.log("Theme Context:", theme); // Debug log for theme context
//   console.log("Styles Object:", styles); // Debug log for styles

//   return (
//     <LinearGradient
//       colors={['#EFE6FD', '#FFF9E6', '#FDE9EF']}
//       locations={[0, 0.48, 1]}
//       start={{ x: 0, y: 0 }}
//       end={{ x: 1, y: 1 }}
//       style={{ flex: 1 }}
//     >
//       <SafeAreaView style={{ flex: 1 }}>
//         <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
//           <View style={styles.header}>
//             <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
//               <Back />
//             </TouchableOpacity>
//           </View>

//           <View style={styles.progressContainer}>
//             <View style={styles.progressBar}>
//               <View style={[styles.progress, { backgroundColor: theme.colors.primary }]}></View>
//               <View style={[styles.progress, { backgroundColor: theme.colors.grey }]}></View>
//               <View style={[styles.progress, { backgroundColor: theme.colors.grey }]}></View>
//               <View style={[styles.progress, { backgroundColor: theme.colors.grey }]}></View>
//               <View style={[styles.progress, { backgroundColor: theme.colors.grey }]}></View>
//               <View style={[styles.progress, { backgroundColor: theme.colors.grey }]}></View>
//               <View style={[styles.progress, { backgroundColor: theme.colors.grey }]}></View>
//             </View>
//           </View>

//           <View style={styles.itemContainer}>
//             <View style={styles.titleContainer}>
//               <Text style={[styles.title, { color: theme.colors.text, fontSize: theme.fontsize.large, fontFamily: theme.fontfamily.bold }]}>
//                 <Text style={[styles.title, { color: theme.colors.cyan, fontSize: theme.fontsize.large, fontFamily: theme.fontfamily.bold }]}>what's</Text> your birth story?
//               </Text>
//               <Text style={[styles.subtitle, { color: theme.colors.subText, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.semibold }]}>
//                 share your birth time to explore your stars.
//               </Text>
//             </View>

//             <View style={styles.timeComponent}>
//               <TouchableOpacity
//                 style={styles.inputBox}
//                 onPress={() => setShowPicker(true)}
//               >
//                 <Text
//                   style={[
//                     styles.input,
//                     {
//                       color: selectedTime
//                         ? theme.colors.text
//                         : theme.colors.placeholder,
//                     },
//                   ]}
//                 >
//                   {selectedTime || "Select Time"}
//                 </Text>
//                 <AntDesign name="clockcircleo" size={24} color={theme.colors.primary} />
//               </TouchableOpacity>
//             </View>
//             {showPicker && (
//               <DateTimePicker
//                 value={new Date()}
//                 mode="time"
//                 is24Hour={false}
//                 display="default"
//                 onChange={handleConfirm}
//               />
//             )}
//           </View>

//           <View style={styles.itemContainer}>
//             <View style={styles.titleContainer}>
//               <Text style={[styles.title, { color: theme.colors.text, fontSize: theme.fontsize.large, fontFamily: theme.fontfamily.bold }]}>
//                 <Text style={[styles.title, { color: theme.colors.cyan, fontSize: theme.fontsize.large, fontFamily: theme.fontfamily.bold }]}>what's</Text> your zodiac sign?
//               </Text>
//               <Text style={[styles.subtitle, { color: theme.colors.subText, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.semibold }]}>
//                 unlock your vibe with your zodiac
//               </Text>
//             </View>

//             <View style={styles.timeComponent}>
//               <TouchableOpacity
//                 style={styles.arrowContainer}
//                 onPress={() => carouselRef.current?.snapToPrev()}
//               >
//                 <AntDesign name="left" size={24} color={theme.colors.text} />
//               </TouchableOpacity>

//               <Carousel
//                 ref={carouselRef}
//                 data={zodiacSigns}
//                 renderItem={renderItem}
//                 sliderWidth={width}
//                 itemWidth={width * 0.5}
//                 inactiveSlideOpacity={0.6}
//                 inactiveSlideScale={0.9}
//                 loop
//               />

//               {/* Right Arrow */}
//               <TouchableOpacity
//                 style={styles.arrowContainer}
//                 onPress={() => carouselRef.current?.snapToNext()}
//               >
//                 <AntDesign name="right" size={24} color={theme.colors.text} />
//               </TouchableOpacity>
//             </View>
//           </View>

//           {/* Continue Button */}
//           <View style={styles.continuebtn}>
//             <ButtonComponent onPress={handleSubmit} />
//           </View>
//         </KeyboardAvoidingView>
//       </SafeAreaView>
//     </LinearGradient>
//   );
// };

// export default BirthStoryZodiacScreen;
// import React, { useState, useContext, useRef, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   KeyboardAvoidingView,
//   ScrollView,
//   Platform,
// } from "react-native";
// import { Button } from "@ant-design/react-native";
// import Icon from "react-native-vector-icons/AntDesign";
// import { ThemeContext } from "../context/ThemeContext";
// import styles from "../styles/LocationLanguageStyle";
// import { Input, Tag } from "antd";
// import { PlusOutlined } from "@ant-design/icons";
// import * as Animatable from "react-native-animatable";

// const LocationAndLanguagesScreen = ({ navigation }) => {
//   const theme = useContext(ThemeContext);

//   const [location, setLocation] = useState("");
//   const [languages, setLanguages] = useState([]);
//   const [locationInputHeight, setLocationInputHeight] = useState(styles.input.minHeight);
//   const [inputVisible, setInputVisible] = useState(false);
//   const [inputValue, setInputValue] = useState('');
//   const inputRef = useRef(null);

//   useEffect(() => {
//     if (inputVisible) {
//       inputRef.current?.focus();
//     }
//   }, [inputVisible]);

//   const handleTagClose = (removedTag) => {
//     const newTags = languages.filter((tag) => tag !== removedTag);
//     setLanguages(newTags);
//   };

//   const showInput = () => {
//     setInputVisible(true);
//   };

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleInputConfirm = () => {
//     if (inputValue && languages.indexOf(inputValue) === -1) {
//       setLanguages([...languages, inputValue]);
//     }
//     setInputVisible(false);
//     setInputValue('');
//   };

//   const tagChild = languages.map((tag, index) => (
//     <Animatable.View
//       key={tag}
//       animation="fadeIn"
//       duration={300}
//       style={{ display: "inline-block" }}
//     >
//       <Tag
//         closable
//         onClose={() => handleTagClose(tag)}
//         style={{ backgroundColor: theme.colors.background, color: theme.colors.text }}
//       >
//         {tag}
//       </Tag>
//     </Animatable.View>
//   ));
  

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       style={[styles.container, { backgroundColor: theme.colors.background }]}
//     >
//       <ScrollView style={styles.contentContainer}>
//         {/* Back Button */}
//         <Icon
//           name="arrowleft"
//           size={styles.backButtonIconSize}
//           color={theme.colors.secondary}
//           style={styles.backBtn}
//           onPress={() => navigation.goBack()}
//         />

//         {/* Progress Bar */}
//         <View style={styles.progressBarContainer}>
//           <View style={styles.progressBar}>
//             <View style={[styles.progress, { backgroundColor: theme.colors.primary }]} />
//           </View>
//         </View>

//         {/* Title and Input for Location */}
//         <Text style={[styles.title, { color: theme.colors.text, fontSize: theme.fontsize.large, fontFamily: theme.fontfamily.bold }]}>Where Are You Currently?</Text>
//         <Text style={[styles.description, { color: theme.colors.secondary, fontFamily: theme.fontfamily.medium }]}>
//           We're all about adventure—where in the world are you right now? 🌍
//         </Text>
//         <TextInput
//           style={[styles.input, { backgroundColor: theme.colors.background, height: locationInputHeight }]}
//           placeholder="Enter your current location"
//           placeholderTextColor={theme.colors.text}
//           multiline
//           value={location}
//           onChangeText={setLocation}
//           onContentSizeChange={(e) =>
//             setLocationInputHeight(Math.max(styles.input.minHeight, e.nativeEvent.contentSize.height))
//           }
//         />

//         {/* Title and Input for Languages */}
//         <Text style={[styles.title, { color: theme.colors.text, fontFamily: theme.fontfamily.bold }]}>What Languages Can You Speak?</Text>
//         <Text style={[styles.description, { color: theme.colors.secondary, fontFamily: theme.fontfamily.medium, fontSize: theme.fontsize.medium }]}>
//           Is your love language in English, Spanish, or something else? Let's hear your best! 💬
//         </Text>

//         {/* Tag Input for Languages */}
//         <View style={styles.languageTagContainer}>
//           <TweenOneGroup
//             appear={false}
//             enter={{
//               scale: 0.8,
//               opacity: 0,
//               type: 'from',
//               duration: 100,
//             }}
//             leave={{
//               opacity: 0,
//               width: 0,
//               scale: 0,
//               duration: 200,
//             }}
//           >
//             {tagChild}
//           </TweenOneGroup>

//           {inputVisible ? (
//             <Input
//               ref={inputRef}
//               type="text"
//               size="small"
//               style={{
//                 width: 78,
//                 backgroundColor: theme.colors.background,  // Use theme colors
//                 color: theme.colors.text,  // Ensure text color is consistent with theme
//               }}
//               value={inputValue}
//               onChange={handleInputChange}
//               onBlur={handleInputConfirm}
//               onPressEnter={handleInputConfirm}
//             />
//           ) : (
//             <Tag
//               onClick={showInput}
//               style={{
//                 backgroundColor: theme.colors.secondary,
//                 borderStyle: 'dashed',
//                 color: theme.colors.text,
//               }}
//             >
//               <PlusOutlined /> New Language
//             </Tag>
//           )}
//         </View>

//         {/* Next Button */}
//         <View style={styles.continueBtn}>
//           <Button
//             type="primary"
//             style={[styles.nextButton, { backgroundColor: theme.colors.primary }]}
//             onPress={() => navigation.navigate("PartnerAgePreferences")}
//           >
//             Next
//           </Button>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// export default LocationAndLanguagesScreen;
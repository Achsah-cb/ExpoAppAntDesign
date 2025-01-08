// import { StyleSheet, Dimensions } from "react-native";
// import { useTheme } from "../../context/ThemeContext";

// const { width, height } = Dimensions.get("window");

// export const responsiveWidth = (percentage) => (width * percentage) / 100;
// export const responsiveHeight = (percentage) => (height * percentage) / 100;

// const globalStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: useTheme.colors.background,
//   },
//   title: {
//     fontSize: responsiveWidth(5),
//     fontFamily: useTheme.fonts.bold,
//     color: useTheme.colors.text,
//     marginBottom: responsiveHeight(1),
//   },
//   bodyText: {
//     fontSize: responsiveWidth(4),
//     fontFamily: useTheme.fonts.regular,
//     color: useTheme.colors.textSecondary,
//   },
//   buttonText: {
//     fontSize: responsiveWidth(4),
//     fontFamily: useTheme.fonts.bold,
//     color: "#FFFFFF",
//   },
// });

// export default globalStyles;
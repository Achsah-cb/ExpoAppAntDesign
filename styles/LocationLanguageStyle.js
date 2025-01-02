import { StyleSheet, Platform, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const responsiveWidth = (percentage) => (width * percentage) / 100;
export const responsiveHeight = (percentage) => (height * percentage) / 100;
const scale = (size) => (width / 375) * size;
const progressScale = (percentage) => (width * percentage) / 100;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: responsiveWidth(5),
    paddingBottom: responsiveHeight(5),
    overflow: 'scroll'
  },
  backBtn: {
    marginTop: Platform.OS === "android" ? responsiveHeight(3) : responsiveHeight(1),
    marginBottom: responsiveHeight(2),
  },
  backButtonIconSize: responsiveWidth(8),
  progressBarContainer: {
    marginVertical: responsiveHeight(2),
  },
  progressBar: {
    height: responsiveHeight(1),
    backgroundColor: "#FFEC9E",
    borderRadius: 50,
    width: responsiveWidth(40),
    alignSelf: "center",
  },
  progress: {
    height: responsiveHeight(1),
    width: responsiveWidth(15),
    borderRadius: 50,
  },
  title: {
    fontSize: responsiveWidth(5),
    fontWeight: "bold",
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(1),
  },
  description: {
    fontSize: responsiveWidth(4),
    fontStyle: "italic",
    marginBottom: responsiveHeight(1),
  },
  input: {
    width: "100%",
    minHeight: responsiveHeight(7),
    borderColor: "#FFB200",
    borderWidth: 1,
    borderRadius: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(4),
    fontSize: responsiveWidth(4),
    marginBottom: responsiveHeight(3),
    textAlignVertical: "top", // Ensure text starts at the top
  },
  continueBtn: {
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: responsiveHeight(2),
  },
  nextButton: {
    width: responsiveWidth(90),
    height: responsiveHeight(7),
    backgroundColor: "#FFB200",
    borderColor: "#FFB200",
    borderRadius: responsiveWidth(3),
  },
  languageTagContainer: {
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(3),
  },
  languageTag: {
    backgroundColor: "#FFEC9E", // Placeholder for theme color, change to theme.colors.tagBackground
    color: "#000", // Placeholder for theme text color, change to theme.colors.text
  },
  tagInput: {
    width: 78,
    backgroundColor: "#FFEC9E", // Placeholder for theme input background color
    color: "#000", // Placeholder for theme text color
  },
  tagPlusStyle: {
    backgroundColor: "#FFEC9E", // Placeholder for theme secondary color
    borderStyle: 'dashed',
    color: "#000", // Placeholder for theme text color
  },
});

export default styles;
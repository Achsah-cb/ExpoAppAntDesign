import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");
const responsiveWidth = (percentage) => (width * percentage) / 100;
const responsiveHeight = (percentage) => (height * percentage) / 100;
const scale = (size) => (width / 375) * size;
const progressScale = (percentage) => (width * percentage) / 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: responsiveWidth(4),
    paddingHorizontal: responsiveWidth(5),
    paddingTop: scale(10),
    marginVertical: scale(2),
    paddingVertical: responsiveHeight(2),
    overflow: 'scroll'
  },
  header: {
    flexDirection: 'row',
    ...Platform.select({ ios: { marginTop: 30, }, android: { marginTop: 5 } }),
  },
  backBtn: {
    marginTop: Platform.OS === "android" ? responsiveHeight(3) : responsiveHeight(1),
    marginBottom: responsiveHeight(2),
  },
  iconSize: scale(23),
  progressBarContainer: {
    marginVertical: responsiveHeight(2),
  },
  progressBar: {
    width: progressScale(65),
    height: progressScale(2),
    alignSelf: 'center',
    borderRadius: scale(50),
    marginBottom: scale(0),
    marginTop: 10,
    marginLeft: scale(30)
  },
  progress: {
    width: progressScale(12),
    height: progressScale(2),
    borderRadius: scale(50),
  },
  InnerContainer: {
    marginVertical: scale(5)
  },
  title: {
    fontSize: scale(20),
    textAlign: "center",
    marginVertical: responsiveHeight(3),
  },
  sliderContainer: {
    marginVertical: responsiveHeight(2),
    alignItems: "center",
  },
  sliderWidth: responsiveWidth(80),
  sliderThumbSize: responsiveHeight(2.5),
  ageLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: responsiveWidth(80),
    marginTop: responsiveHeight(2),
  },
  ageLabelText: {
    fontSize: scale(14),
  },
  nextButton: {
    width: responsiveWidth(80),
    height: responsiveHeight(7),
    borderRadius: scale(10),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: responsiveHeight(3),
  },
  nextButtonText: {
    fontSize: scale(18),
  },
  footerText: {
    fontSize: scale(16),
    textAlign: "center",
    marginTop: responsiveHeight(3),
  },
});

export default styles;

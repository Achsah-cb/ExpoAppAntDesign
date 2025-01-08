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
    ...Platform.select({ ios: { marginTop: 30, }, android: { marginTop: 30 } }),
    justifyContent: 'space-between',
    width: responsiveWidth(100),
  },
  backBtn: {
    margin: responsiveWidth(4),
    width: responsiveWidth(9),
    height: responsiveHeight(4.5),
    backgroundColor: "#ffffffff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: responsiveWidth(2)
  },
  progressContainer: {
    width: responsiveWidth(75),
    height: responsiveHeight(0.8),
    borderRadius: 50,
  },
  progressBar: {
    alignItems: 'center'
  },
  progress: {
    width: responsiveWidth(30),
    height: responsiveHeight(0.8),
    borderRadius: 50
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

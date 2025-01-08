import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");
const responsiveWidth = (percentage) => (width * percentage) / 100;
const responsiveHeight = (percentage) => (height * percentage) / 100;
const progressScale = (percentage) => (width * percentage) / 100;
const scale = (size) => (width / 375) * size;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: responsiveWidth(10),
    paddingVertical: responsiveHeight(2),
  },
  header: {
    flexDirection: "row",
    marginTop: Platform.OS === "ios" ? responsiveHeight(5) : responsiveHeight(3),
  },
  backBtn: {
      marginTop: Platform.OS === "android" ? responsiveHeight(3) : responsiveHeight(1),
      marginBottom: responsiveHeight(2),
    },
    backButtonIconSize: responsiveWidth(8),
    progressBarContainer: {
      marginVertical: responsiveHeight(4),
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
  title: {
    fontSize: responsiveWidth(5),
    textAlign: "center",
    marginBottom: responsiveHeight(2),
  },
  sliderContainer: {
    alignItems: "center",
    marginVertical: responsiveHeight(3),
  },
  distanceLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: responsiveWidth(80),
    marginTop: responsiveHeight(1),
  },
  distanceLabel: {
    fontSize: responsiveWidth(3),
    textAlign: "center",
  },
  footer: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
  },
  nextButton: {
    width: responsiveWidth(80),
    height: responsiveHeight(7),
    borderRadius: responsiveWidth(3),
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
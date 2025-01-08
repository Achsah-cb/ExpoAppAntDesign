import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");
const responsiveWidth = (percentage) => (width * percentage) / 100;
const responsiveHeight = (percentage) => (height * percentage) / 100;
const progressScale = (percentage) => (width * percentage) / 100;
const scale = (size) => (width / 375) * size;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveHeight(1),
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
    backgroundColor: "#fff",
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
    width: responsiveWidth(35),
    height: responsiveHeight(0.8),
    borderRadius: 50
  },
  title: {
    fontSize: responsiveWidth(5),
    textAlign: "center",
    marginBottom: responsiveHeight(2),
    marginTop:responsiveHeight(4),
    paddingVertical: responsiveHeight(2)
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
    marginVertical: responsiveHeight(4)
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
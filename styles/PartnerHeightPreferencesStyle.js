import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get('window');
const responsiveWidth = (percentage) => (width * percentage) / 100;
const responsiveHeight = (percentage) => (height * percentage) / 100;
const scale = (size) => (width / 375) * size;
const progressScale = (percentage) => (width * percentage) / 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    width: responsiveWidth(25),
    height: responsiveHeight(0.8),
    borderRadius: 50
  },
  InnerContainer: {
    marginVertical: scale(10),
    marginHorizontal: responsiveWidth(5)
  },
  title: {
    textAlign: "center",
    marginBottom: scale(15),
  },
  subtitle: {
    marginVertical: responsiveHeight(2),
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: responsiveHeight(1.7),
    paddingHorizontal: responsiveWidth(4),
    marginVertical: responsiveHeight(0.5),
    borderRadius: responsiveWidth(2),
    borderWidth: 1,
    borderColor: "#CCC",
  },
  radioCircle: {
    width: responsiveWidth(4),
    height: responsiveWidth(4),
    borderRadius: responsiveWidth(2),
    borderWidth: 4,
    borderColor: "#CCC",
    marginRight: responsiveWidth(3),
  },
  optionText: {
    fontSize: responsiveWidth(4),
  },
  continuebtn: {
    marginTop: responsiveHeight(5),
    alignItems: "center",
  },
  nextButton: {
    width: responsiveWidth(80),
    height: responsiveHeight(7),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: responsiveWidth(3),
  },
});

export default styles;
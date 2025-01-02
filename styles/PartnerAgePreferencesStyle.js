// styles.js
import { StyleSheet, Platform, Dimensions } from 'react-native';

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
  },
  scrolldiv: {
    overflow: 'scroll',
  },
  header: {
    flexDirection: 'row',
    marginVertical: responsiveHeight(2),
    ...Platform.select({ ios: { marginTop: 30 }, android: { marginTop: 5 } }),
  },
  backBtn: {
    marginTop: Platform.OS === "android" ? responsiveHeight(3) : responsiveHeight(1),
    marginBottom: responsiveHeight(2),
  },
  backButtonIconSize: responsiveWidth(8),
  progressBarContainer: {
    width: progressScale(65),
    height: progressScale(2),
    alignSelf: 'center',
    borderRadius: scale(50),
    marginBottom: scale(0),
    marginTop: 10,
    marginLeft: scale(30)
  },
  progressBar: {
    width: progressScale(60),
    height: progressScale(2),
    borderRadius: scale(50),
  },
  itemContainer: {
    alignItems: 'left',
    margin: responsiveWidth(5),
    padding: responsiveWidth(3)
  },
  mainText: {
    fontSize: responsiveWidth(5),
    fontWeight: '500',
    paddingBottom: responsiveHeight(4),
    textAlign: 'center',
  },
  radioOption: {
    // flexDirection: 'row',
    alignItems: 'left',
    textAlign: 'left',
    marginBottom: responsiveHeight(2),
  },
  Button: {
    width: responsiveWidth(90),
    height: responsiveHeight(7),
    borderRadius: responsiveWidth(3),
    backgroundColor: '#FFB200',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: responsiveHeight(4),
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: responsiveWidth(4),
  },
  continuebtn: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: responsiveHeight(5),
  },
});

export default styles;
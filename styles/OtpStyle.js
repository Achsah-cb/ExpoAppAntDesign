import { StyleSheet, Dimensions, Platform } from 'react-native';

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
    paddingVertical: responsiveHeight(2)
  },
  header: {
    flexDirection: 'row',
    ...Platform.select({ ios: { marginTop: 30, }, android: { marginTop: 5 } }),
  },
  backButton: {
    marginTop: Platform.OS === "android" ? responsiveHeight(3) : responsiveHeight(1),
    marginBottom: responsiveHeight(2),
  },
  backButtonIconSize: responsiveWidth(8),
  progressBarContainer: {
    marginVertical: responsiveHeight(2),
  },
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
    width: progressScale(5),
    height: progressScale(2),
    borderRadius: scale(50),
  },
  InnerContainer: {
    marginVertical: scale(20)
  },
  title: {
    textAlign: 'center',
    marginBottom: scale(5),
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 5,
  },
  phoneNumber: {
    textAlign: 'center',
    marginBottom: scale(30),
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: scale(20),
    width: '80%',
    alignSelf: 'center',
  },
  otpInput: {
    width: scale(50),
    height: scale(50),
    backgroundColor: '#FFF',
    borderRadius: scale(10),
    borderColor: '#FFB200',
    textAlign: 'center',
    fontSize: scale(20),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: scale(2) },
    shadowOpacity: 0.1,
    shadowRadius: scale(3),
    elevation: 3,
  },
  resendText: {
    textAlign: 'center',
    marginBottom: scale(5),
  },
  resendButton: {
    textAlign: 'center',
    marginBottom: scale(30),
    textDecorationLine: 'underline'
  },
  verifyButton: {
    borderRadius: responsiveWidth(2),
    paddingVertical: scale(15),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: scale(2) },
    shadowOpacity: 0.1,
    shadowRadius: scale(3),
    elevation: 3,
  },
});

export default styles;

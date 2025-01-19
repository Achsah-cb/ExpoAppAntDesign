import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const responsiveWidth = (percentage) => (width * percentage) / 100;
const responsiveHeight = (percentage) => (height * percentage) / 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    padding: responsiveWidth(5),
  },
  title: {
    fontSize: responsiveWidth(8),
    color: '#000',
  },
  bold: {
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: responsiveWidth(4),
    color: '#888',
    marginVertical: responsiveHeight(2),
  },
  phoneNumber: {
    fontSize: responsiveWidth(4.5),
    color: '#1E90FF',
    marginBottom: responsiveHeight(2),
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(80),
    marginBottom: responsiveHeight(2),
  },
  codeInput: {
    width: responsiveWidth(10),
    height: responsiveHeight(7),
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: responsiveWidth(6),
  },
  resendText: {
    fontSize: responsiveWidth(3.5),
    color: '#888',
    marginBottom: responsiveHeight(1),
  },
  resendLink: {
    fontSize: responsiveWidth(3.5),
    color: '#888',
  },
  resendCode: {
    color: '#FF6347',
  },
  continueButton: {
    backgroundColor: '#FF6347',
    paddingVertical: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(10),
    borderRadius: 5,
    marginTop: responsiveHeight(2),
  },
  continueButtonText: {
    color: '#FFF',
    fontSize: responsiveWidth(4.5),
  },
});

export default styles;

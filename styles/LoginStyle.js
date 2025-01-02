import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const responsiveWidth = (percentage) => (width * percentage) / 100;
const responsiveHeight = (percentage) => (height * percentage) / 100;
const scale = (size) => (width / 375) * size;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scale(20),
    paddingBottom: 60,
  },

  innerContainer: {
    flex: 1,
    flexBasis: 'auto',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: scale(0),
  },
  logo: {
    height: 'scale(25%)',
    width: 'scale(10%)'
  },
  titleView: {
    width: '100%',
    overflow: 'visible',
    alignItems: 'center',
    marginBottom: scale(20),

  },
  title: {
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    marginVertical: scale(30),
    paddingHorizontal: scale(10),
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scale(20),
    width: '100%',
    backgroundColor: '#fff', //Needed
    borderRadius: 15,
    paddingHorizontal: scale(5),
    paddingVertical: scale(6),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  callingCode: {
    color: '#333',
    marginLeft: scale(-17),
    marginRight: scale(5),
  },
  downArrow: {
    marginLeft: scale(-7),
    marginRight: scale(8),
  },
  countryPicker: {
    marginRight: scale(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  phoneInput: {
    flex: 1,
    borderLeftWidth: 1,
    borderLeftColor: '#ddd',
    paddingLeft: scale(13),
  },
  continueButton: {
    width: '100%',
    height: responsiveHeight(7),
    marginBottom: scale(20),
    paddingVertical: scale(10),
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
  footer: {
    marginBottom: scale()
  },
  footerText: {
    marginTop: scale(10),
  }
});

export default styles;
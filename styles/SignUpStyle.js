import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const scale = (size) => (width / 375) * size;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scale(20),
    paddingBottom: 40,
  },
  imagesContainer: {
    flexGrow: 1,
    width: '100%',
    height: height * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.05,
  },
  subTitle: {
    fontSize: scale(24),
    textAlign: 'center',
    marginVertical: scale(10),
  },
  description: {
    fontSize: scale(16),
    textAlign: 'center',
    marginVertical: scale(20),
    paddingHorizontal: scale(10),
  },
  LoginwithPhoneContainer: {
    flexDirection: 'row',
    flexBasis: '8%',
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '5%',
    borderRadius: 15,
  },
  phoneIcon: {
    textAlign: 'center',
  },
  buttonView: {
    paddingVertical: '5%',
    marginHorizontal: '5%',
    textAlign: 'center',
  },
  buttonText: {
    fontSize: scale(18),
    alignSelf: 'center',
  },
  footerText: {
    fontSize: scale(14),
    marginTop: scale(10),
  },
  signUpText: {
    fontSize: scale(18),
    marginBottom: scale(20)
  },
});

export default styles;
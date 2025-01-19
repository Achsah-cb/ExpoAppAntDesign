import { StyleSheet } from 'react-native';
import { responsiveWidth, responsiveHeight } from './responsiveUtil';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: responsiveWidth(5),
    // backgroundColor: '#F9F9F9',
  },
  backButton: {
    // position: 'absolute',
    top: responsiveHeight(5),
    left: responsiveWidth(5),
  },
  header: {
    marginTop: responsiveHeight(15),
    marginBottom: responsiveHeight(5),
    alignItems: 'center',
  },
  title: {
    fontSize: responsiveWidth(6),
    textAlign: 'center',
    marginBottom: responsiveHeight(1),
  },
  subtitle: {
    fontSize: responsiveWidth(4),
    textAlign: 'center',
  },
  inputContainer: {
    marginTop: responsiveHeight(3),
    width: '100%',
    alignItems: 'center',
  },
  phoneInputContainer: {
    width: responsiveWidth(90),
    height: responsiveHeight(7),
    borderRadius: responsiveWidth(2),
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(3),
    backgroundColor: '#FFF',
  },
  dialCode: {
    fontSize: responsiveWidth(4),
    marginRight: responsiveWidth(2),
  },
  phoneInput: {
    flex: 1,
    fontSize: responsiveWidth(4),
  },
  continueButtonText: {
    width: responsiveWidth(90),
    paddingVertical: responsiveHeight(2),
    borderRadius: responsiveWidth(5),
    alignItems: 'center',
    marginTop: responsiveHeight(4),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    fontSize: responsiveWidth(4.5),
  },
});

export default styles;
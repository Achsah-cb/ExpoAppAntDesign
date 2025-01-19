import { StyleSheet, Dimensions } from 'react-native';
import { responsiveWidth, responsiveHeight } from './responsiveUtil';

const buttonSize = responsiveWidth(38);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: responsiveWidth(5), // 5% of screen width
    justifyContent: 'center',
  },
  heading: {
    fontSize: responsiveWidth(8), // 8% of screen width
    fontWeight: 'bold',
    marginBottom: responsiveHeight(2), // 2% of screen height
  },
  input: {
    width: '100%',
    height: responsiveHeight(7), // 7% of screen height
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: responsiveWidth(3), // 3% of screen width
    fontSize: responsiveWidth(4.5), // 4.5% of screen width
    marginBottom: responsiveHeight(2), // 2% of screen height
  },
  button: {
    height: buttonSize,
    width: buttonSize,
    paddingVertical: responsiveHeight(2), // 2% of screen height
    borderRadius: 10,
    alignItems: 'center',
    marginTop: responsiveHeight(2), // 2% of screen height
  },
  buttonText: {
    fontSize: responsiveWidth(5), // 5% of screen width
    fontWeight: 'bold',
  },
});

export default styles;

// styles.js
import { StyleSheet, Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const responsiveWidth = (percentage) => (width * percentage) / 100;
export const responsiveHeight = (percentage) => (height * percentage) / 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8E1',
  },
  header: {
    flexDirection: 'row',
    ...Platform.select({ ios: { marginTop: 0 }, android: { marginTop: 30 } }),
  },
  backBtn: {
    margin: responsiveWidth(6),
    width: responsiveWidth(10),
    height: responsiveHeight(5),
  },
  progressBar: {
    backgroundColor: '#FFEC9E',
    width: responsiveWidth(60),
    height: responsiveHeight(1),
    borderRadius: 50,
    margin: responsiveWidth(7.5),
  },
  progress: {
    backgroundColor: '#FFB200',
    height: '100%',
    borderRadius: 50,
  },
  itemContainer: {
    alignItems: 'left',
    margin: responsiveWidth(5),
    paddingLeft: responsiveWidth(3)
  },
  mainText: {
    fontSize: responsiveWidth(5),
    fontWeight: '500',
    paddingBottom: responsiveHeight(4),
    textAlign: 'center',
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
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
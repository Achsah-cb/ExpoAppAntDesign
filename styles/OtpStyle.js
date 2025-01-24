import { StyleSheet } from 'react-native';
import { responsiveWidth, responsiveHeight } from './responsiveUtil';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginVertical: responsiveWidth(9),
    marginHorizontal: responsiveWidth(5),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: responsiveWidth(100),
  },
  backBtn: {
    marginBottom: responsiveWidth(7),
    marginLeft: responsiveWidth(3),
    width: responsiveWidth(9),
    height: responsiveHeight(3),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: responsiveWidth(2),
  },
  itemContainer: {
    flex: 3,
    alignItems: 'center',
    margin: 20,
    marginTop: responsiveWidth(4),
  },
  titleContainer:{
    paddingVertical: responsiveHeight(2),
    marginLeft: responsiveWidth(0),
    alignItems: "center",
    marginBottom: responsiveHeight(0),
  },
  title: {
    textAlign: 'left',
    marginBottom: responsiveHeight(1),
  },
  subtitle: {
    textAlign: 'left',
  },
  OtpOuterContainer: {
    width: responsiveWidth(90),
    height: responsiveHeight(7),
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: responsiveWidth(4),
    backgroundColor: '#FFF',
  },
  phoneNumber: {
    textAlign: 'center',
    marginVertical: responsiveHeight(1),
    fontSize: responsiveWidth(4.5),
  },
  otpInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  otpInput: {
    width: responsiveWidth(12),
    height: responsiveWidth(12),
    borderWidth: 1,
    textAlign: 'center',
    marginRight: responsiveHeight(1),
  },
  timerContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveHeight(2),
  },
  timer: {
    marginTop: responsiveHeight(2),
    textAlign: 'center',
  },
  resendCode: {
    textAlign: 'center',
    marginTop: responsiveHeight(1),
  },
  continuebtn: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: responsiveHeight(6),
    },
});

export default styles;

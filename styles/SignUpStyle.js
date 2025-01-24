import { StyleSheet } from 'react-native';
import { responsiveWidth, responsiveHeight } from './responsiveUtil';

const buttonSize = responsiveWidth(38);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: responsiveHeight(4),
    marginVertical: responsiveHeight(5),
  },
  textContainer: {
    alignItems: "left ",
    // flex:1,
    // paddingVertical: responsiveHeight(1),
    marginVertical: responsiveHeight(2),
    marginLeft: responsiveWidth(2),
  },
  TitleContainer:{
    paddingVertical: responsiveHeight(1),
  },
  title: {
    lineHeight: responsiveHeight(4),
    textAlign: "left",
  },
  description: {
    letterSpacing: 1.5,
    textAlign: "left",
    marginTop: responsiveHeight(2),
  },
  gifContainer: {
    alignItems: "center",
    flex:2,
    marginVertical: responsiveHeight(2),
  },
  gif: {
    width: responsiveWidth(50),
    height: responsiveWidth(50),
    resizeMode: "contain",
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: responsiveHeight(5),
  },
  loginText: {
    marginTop: responsiveHeight(2),
    color: "#909090",
  },
  continuebtn: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 15
  },
  phoneIcon:{
    color: 'white',
    alignItems: 'center',
  },
  Button: {
    width: responsiveWidth(80),
    height: responsiveHeight(6),
    shadowColor: '#FF2A64',
    shadowOffset: { width: 0, height: responsiveWidth(4) },
    shadowOpacity: 0.5,
    shadowRadius: responsiveWidth(3),
    elevation: 6,
    borderWidth: responsiveWidth(0),
    alignItems: 'center'
  },
});

export default styles;
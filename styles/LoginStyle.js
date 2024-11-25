import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
const scale = (size) => (width / 375) * size;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBE7',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scale(20),
    textDecorationStyle: 'solid',
    paddingBottom: 60,
  },
    logo: {
      flexGrow: 1,
      marginTop: height * 0.05,
      marginBottom: height * 0.05,
      width: scale(115),
      height:scale(43),
      alignSelf: 'center',
    },
    innerContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: scale(140),
    },
    titleView: {
      width: '100%',
      fontSize: scale(40),
      overflow: 'visible',
      alignItems: 'center',
      marginBottom: scale(20),

    },
    title: {
      fontSize: scale(30),
      textAlign: 'center',
      fontWeight: 900,
      color: '#333',
      marginBottom: scale(20),
    },
    phoneInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: scale(20),
      width: '100%',
      backgroundColor: '#fff',
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
      fontSize: scale(16),
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
      fontSize: scale(16),
      borderLeftWidth: 1,
      borderLeftColor: '#ddd',
      paddingLeft: scale(13),
    },
    continueButton: {
      width: '100%',
      height: scale(50),
      borderRadius: 15,
      marginBottom: scale(20),
      backgroundColor: '#FFB200',
      paddingVertical: scale(10),
      alignItems: 'center',
    },
    continueButtonText: {
      color: '#fff',
      fontSize: scale(18),
      fontWeight: "900",
    },
    orDivider: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: scale(20),
    },
    dividerLine: {
      flex: 1,
      height: 1,
      backgroundColor: '#ddd',
    },
    orText: {
      marginHorizontal: scale(10),
      color: '#000000',
      fontWeight: 'bold',
    },
    socialIcon:{
      marginRight: scale(20),
      alignSelf: 'left',
      paddingHorizontal: scale(30),
    },
    socialButton: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'left',
      width: '100%',
      borderRadius: 15,
      paddingVertical: scale(12),
      marginVertical: scale(10),
      backgroundColor: '#FFF',
      borderColor: '#ddd',
      borderWidth: 1,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
    },
    socialButtonText: {
      fontSize: scale(16),
      fontWeight: "900",
      color: '#333',
      textAlign: 'center',
    },
    footerText: {
      fontSize: scale(14),
      marginTop: scale(20),
      color: '#333',
    },
    signUpText: {
      color: '#FFB200',
      fontSize: scale(18),
      fontWeight: 'bold',
    },
  });

export default styles;
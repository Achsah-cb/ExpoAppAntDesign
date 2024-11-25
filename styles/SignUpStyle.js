import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
const scale = (size) => (width / 375) * size;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBE7',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scale(40),
    textDecorationStyle: 'solid',
    paddingBottom: 40,
  },
  logo: {
    flexGrow: 1,
    flexDirection: 'row',
    marginTop: height * 0.05,
    marginBottom: height * 0.05,
    width: scale(115),
    height:scale(43),
    alignSelf: 'center',
  },
  imagesContainer: {
    width: '100%',
    height: height * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: scale(20),
  },
  wave: {
    width: '100%',
    height: '100%',
    position: 'relative',
    top: -100,
    resizeMode: 'contain',
  },
  circularImage: {
    width: width * 0.18,
    height: width * 0.18,
    borderRadius: (width * 0.18) / 2,
    position: 'absolute',
  },
  image1: {
    left: '15%',
    top: '30%',
  },
  image2: {
    left: '40%',
    top: '5%',
  },
  image3: {
    right: '15%',
    top: '30%',
  },
  subTitle: {
    fontSize: scale(24),
    fontWeight: 'bold',
    color: '#333',
    marginVertical: scale(10),
    textAlign: 'center',
  },
  description: {
    fontSize: scale(16),
    color: '#555',
    textAlign: 'center',
    marginVertical: scale(20),
    paddingHorizontal: scale(10),
  },
  LoginwithPhoneContainer: {
    backgroundColor: '#FFB200',
    flexDirection: 'row',
    flexBasis: '8%',
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '5%',
    borderRadius: 15,
  },
  iconView:{
    borderRadius: '50%',
    flexBasis: '13%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: '2%',
    marginLeft: '-15%',
    flexDirection: 'row',
  },
  phoneIcon: {
    textAlign: 'center',
    marginBlock: '5%',
  },
  buttonView:{
    paddingBlock: '5%',
    marginHorizontal: '5%',
    textAlign: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: scale(18),
    fontWeight: 900,
    alignSelf: "center",
  },
  footerText: {
    fontSize: scale(14),
    marginTop: scale(10),
    color: '#333',
  },
  signUpText: {
    color: '#FFB200',
    fontWeight: 'bold',
    fontSize: scale(18),
  },
});

export default styles;
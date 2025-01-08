import { StyleSheet, Platform, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
export const responsiveWidth = (percentage) => (width * percentage) / 100;
export const responsiveHeight = (percentage) => (height * percentage) / 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCF2D6',
  },
  messageBox: {
    width: responsiveWidth(100),
    height: responsiveHeight(65),
    marginTop: responsiveWidth(10),
    marginBottom: responsiveWidth(0),
    backgroundColor: '#F3DC98',
    borderRadius: responsiveWidth(8)
  },
  messageContainer: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#e1ffc7',
    alignSelf: 'flex-end',
    borderTopLeftRadius: responsiveWidth(3),
    borderTopRightRadius: responsiveWidth(3),
    borderBottomLeftRadius: responsiveWidth(3),
    borderBottomRightRadius: 0,
    marginTop: responsiveWidth(5),
    marginRight: responsiveWidth(5),
    backgroundColor: '#EDD06A',
    maxWidth: '80%',

  },
  message: {
    fontSize: responsiveWidth(4),
    fontWeight: "600"
  },
  inputContainer: {
    flexDirection: 'row',
    width: responsiveWidth(100),
    padding: responsiveWidth(5),
    paddingLeft: responsiveWidth(10),
    position: 'relative',
    top: responsiveWidth(15),
    backgroundColor: '#F3DC98'
  },
  input: {
    flex: 1,
    height: responsiveHeight(7),
    backgroundColor: '#E5E4E4',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: responsiveWidth(2),
    paddingHorizontal: 10,

  },
  header: {
    flexDirection: 'row',
    ...Platform.select({ ios: { marginTop: 40, }, android: { marginTop: 30 } }),
  },
  backBtn: {
    margin: responsiveWidth(6),
    width: responsiveWidth(10),
    height: responsiveHeight(5),
  },
  menuBtn: {
    margin: responsiveWidth(6),
    marginLeft: responsiveWidth(65),
    width: responsiveWidth(10),
    height: responsiveHeight(5),
  },
  sendBtn: {
    position: 'relative',
    right: responsiveWidth(10),
    top: responsiveWidth(4)
  },
  userDetails: {
    marginLeft: responsiveWidth(5),
    flexDirection: 'row',

  },
  userName: {
    marginTop: responsiveWidth(3),
    marginLeft: responsiveWidth(5),
    fontSize: responsiveWidth(5),
    fontWeight: '600'
  },
  userStatus: {
    marginLeft: responsiveWidth(5),
    fontSize: responsiveWidth(4)
  },
  userProfilePic: {
    width: responsiveWidth(15),
    height: responsiveHeight(7),
    borderRadius: responsiveWidth(14),
    marginRight: responsiveWidth(5),
  },
  dayText: {
    textAlign: 'center',
    margin: responsiveHeight(3),
    fontSize: responsiveHeight(2),
    fontWeight: '500'
  },

});

export default styles;
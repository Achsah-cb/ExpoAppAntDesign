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
  title: {
    textAlign: 'left',
    marginBottom: responsiveHeight(1),
  },
  subtitle: {
    textAlign: 'left',
  },
  inputContainer: {
    marginTop: responsiveHeight(3),
    width: '100%',
  },
  titleContainer: {
    paddingVertical: responsiveHeight(2),
    marginLeft: responsiveWidth(0),
    alignItems: "left ",
    marginBottom: responsiveHeight(0),
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginBottom: responsiveHeight(5),
  },
  dialCode: {
    fontSize: responsiveWidth(4),
    marginRight: responsiveWidth(2),
  },
  phoneInput: {
    flex: 1,
    fontSize: responsiveWidth(4),
  },
  continuebtn: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: responsiveHeight(6),
  },
});

export default styles;
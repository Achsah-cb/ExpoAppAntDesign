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
  progressBar: {
    height: 4,
    backgroundColor: "#FF2A64",
    marginVertical: 20,
    borderRadius: 2,
  },
  itemContainer: {
    flex: 2,
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

  itemContainer: {
    marginBottom: 30,
  },
  question: {
    fontSize: 22,
    fontFamily: "bold",
    marginBottom: 5,
  },
  subText: {
    fontSize: 14,
    fontFamily: "regular",
    marginBottom: 15,
  },
  continuebtn: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: responsiveHeight(6),
    },
});

export default styles;
import { StyleSheet, Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const responsiveWidth = (percentage) => (width * percentage) / 100;
const responsiveHeight = (percentage) => (height * percentage) / 100;
const progressScale = (percentage) => (width * percentage) / 100;
const scale = (size) => (width / 375) * size;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: responsiveWidth(5),
    paddingTop: scale(10),
    marginVertical: scale(2),
    paddingVertical: responsiveHeight(2),
    overflow: 'scroll'
  },
  header: {
    flexDirection: 'row',
    ...Platform.select({ ios: { marginTop: 30, }, android: { marginTop: 5 } }),
  },
  backBtn: {
    marginTop: Platform.OS === "android" ? responsiveHeight(3) : responsiveHeight(1),
    marginBottom: responsiveHeight(2),
  },
  backButtonIconSize: responsiveWidth(8),
  progressBarContainer: {
    marginVertical: responsiveHeight(2),
  },
  progressBar: {
    width: progressScale(65),
    height: progressScale(2),
    alignSelf: 'center',
    borderRadius: scale(50),
    marginBottom: scale(0),
    marginTop: 10,
    marginLeft: scale(30)
  },
  progress: {
    width: progressScale(12),
    height: progressScale(2),
    borderRadius: scale(50),
  },
  InnerContainer: {
    marginVertical: scale(5)
  },
  heading: {
    textAlign: 'center',
    marginVertical: responsiveHeight(1),
  },
  subHeading: {
    fontSize: responsiveWidth(4),
    fontWeight: '300',
    textAlign: 'center',
    marginBottom: responsiveHeight(3),
  },
  timePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: responsiveHeight(2),
  },
  timeBlock: {
    width: responsiveWidth(15),
    height: responsiveHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDD06A',
    borderRadius: responsiveWidth(2),
    marginHorizontal: responsiveWidth(2),
  },
  timeText: {
    fontSize: responsiveWidth(5),
    fontWeight: '600',
  },
  colon: {
    fontSize: responsiveWidth(6),
    fontWeight: '600',
  },
  periodBlock: {
    width: responsiveWidth(15),
    height: responsiveHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C29225',
    borderRadius: responsiveWidth(2),
    marginHorizontal: responsiveWidth(2),
  },
  periodText: {
    fontSize: responsiveWidth(5),
    fontWeight: '600',
    color: '#FFF',
  },
  zodiacParentContainer: {
    marginVertical: scale(5)
  },
  zodiacHeading: {
    textAlign: 'center',
    marginVertical: responsiveHeight(1.5),
  },
  zodiacSubHeading: {
    textAlign: 'center',
    marginBottom: responsiveHeight(3),
  },
  zodiacContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: responsiveHeight(3),
  },
  zodiacButton: {
    width: responsiveWidth(20),
    paddingVertical: responsiveHeight(2),
    borderRadius: responsiveWidth(2),
    alignItems: 'center',
    margin: responsiveWidth(2),
    borderWidth: 1,
    borderColor: '#CCC',
    backgroundColor: '#FFF',
  },
  zodiacText: {
    fontSize: responsiveWidth(4),
    marginTop: responsiveHeight(1),
  },
  nextButtonContainer: {
    alignItems: 'center',
    marginBottom: responsiveHeight(5),
  },
  nextButton: {
    width: '100%',
    height: responsiveHeight(7),
    borderRadius: responsiveWidth(2),
    paddingVertical: scale(15),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: scale(2) },
    shadowOpacity: 0.1,
    shadowRadius: scale(3),
    elevation: 3,
  },
});

export default styles;
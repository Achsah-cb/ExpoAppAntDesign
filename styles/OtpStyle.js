import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const scale = (size) => (width / 375) * size; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBE7',
    paddingHorizontal: scale(20),
    paddingTop: scale(40),
  },
  backButton: {
    marginBottom: scale(20),
    
  },
  header:{
    flexDirection:'row',
    marginTop:25
  },
  progressBarContainer: {
    width: 180,
    height:8,
    backgroundColor: '#FFEC9E',
    alignSelf: 'center',
    borderRadius: scale(50),
    marginBottom: scale(30),
    marginTop:10,
    marginLeft:60
  },
  progressBar: {
    width: 22.5,
    height: 8,
    backgroundColor: '#FFB200',
    borderRadius: scale(50),
  },
  title: {
    fontSize: scale(24),
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: scale(5),
  },
  subtitle: {
    fontSize: scale(14),
    color: '#888', // Gray color
    textAlign: 'center',
    marginBottom: 5,
  },
  phoneNumber: {
    fontSize: scale(16),
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: scale(30),
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: scale(20),
    width: '80%',
    alignSelf: 'center',
  },
  otpInput: {
    width: scale(50),
    height: scale(50),
    backgroundColor: '#FFF',
    borderRadius: scale(10),
    textAlign: 'center',
    fontSize: scale(20),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: scale(2) },
    shadowOpacity: 0.1,
    shadowRadius: scale(3),
    elevation: 3,
  },
  resendText: {
    fontSize: scale(14),
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: scale(5),
  },
  resendButton: {
    fontSize: scale(18),
    color: '#FFB200',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: scale(30),
  },
  verifyButton: {
    backgroundColor: '#FFB200',
    borderRadius: scale(15),
    paddingVertical: scale(15),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: scale(2) },
    shadowOpacity: 0.1,
    shadowRadius: scale(3),
    elevation: 3,
  },
  verifyButtonText: {
    color: '#FFF',
    fontSize: scale(16),
    fontWeight: 'bold',
  },
});

export default styles;

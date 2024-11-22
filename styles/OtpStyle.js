import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const scale = (size) => (width / 375) * size; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##fff5bf',
    paddingHorizontal: scale(20),
    paddingTop: scale(40),
  },
  backButton: {
    marginBottom: scale(20),
  },
  progressBarContainer: {
    width: '80%',
    height: scale(5),
    backgroundColor: '#ffee90',
    alignSelf: 'center',
    borderRadius: scale(2.5),
    marginBottom: scale(30),
  },
  progressBar: {
    width: '50%',
    height: '100%',
    backgroundColor: '#FFD700',
    borderRadius: scale(2.5),
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
    borderRadius: scale(6),
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
    color: '#FFD700',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: scale(30),
  },
  verifyButton: {
    backgroundColor: '#FFD700',
    borderRadius: scale(6),
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

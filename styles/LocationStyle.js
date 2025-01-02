import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const scale = (size) => (width / 375) * size;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF8F8',
    paddingHorizontal: scale(20),
  },
  iconContainer: {
    marginBottom: scale(30),
  },
  title: {
    fontSize: scale(24),
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: scale(10),
  },
  subtitle: {
    fontSize: scale(16),
    color: '#666',
    textAlign: 'center',
    marginBottom: scale(40),
    paddingHorizontal: scale(10),
  },
  allowButton: {
    width: '80%',
    backgroundColor: '#FF6B6B',
    borderColor: '#FF6B6B',
    borderRadius: 8,
    paddingVertical: scale(10),
    marginBottom: scale(20),
  },
  manualButton: {
    marginTop: scale(10),
  },
  manualButtonText: {
    fontSize: scale(16),
    color: '#FF6B6B',
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default styles;
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const scale = (size) => (width / 375) * size;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: scale(20),
    paddingTop: height * 0.05,
  },
  backButton: {
    marginBottom: height * 0.02,
  },
  progressBarContainer: {
    height: height * 0.005,
    backgroundColor: '#ffee90',
    borderRadius: scale(5),
    marginBottom: height * 0.03,
  },
  progressBar: {
    width: '50%',
    height: '100%',
    backgroundColor: '#FFD700',
    borderRadius: scale(5), 
  },
  title: {
    fontSize: scale(22),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: height * 0.01,
    color: '#000',
  },
  subtitle: {
    fontSize: scale(13),
    textAlign: 'center',
    color: '#888',
    marginBottom: height * 0.04,
  },
  optionsContainer: {
    marginBottom: height * 0.04,
  },
  radioItem: {
    borderWidth: scale(1),
    borderColor: '#EAEAEA',
    borderRadius: scale(8),
    marginBottom: height * 0.02,
    paddingVertical: height * 0.015,
    paddingHorizontal: scale(16),
  },
  selectedOption: {
    borderColor: '#FFD700',
    backgroundColor: '#FFF5CC',
  },
  optionText: {
    fontSize: scale(18),
    color: '#000',
  },
  selectedOptionText: {
    color: '#FFD700',
  },
  continueButton: {
    backgroundColor: '#FFD700',
    borderRadius: scale(25),
    height: height * 0.07,
    justifyContent: 'center',
    borderColor: '#FFD700',
  },
  backgroundimg: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: scale(100),
    height: scale(100),
  },
});

export default styles;

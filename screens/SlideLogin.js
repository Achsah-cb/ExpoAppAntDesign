import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  withSpring,
  interpolate,
  interpolateColor,
  runOnJS,
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

const BUTTON_WIDTH = 300;
const BUTTON_HEIGHT = 50;
const SWIPEABLE_DIMENSIONS = BUTTON_HEIGHT - 10;

const CupidArrowScreen = ({ navigation }) => {
  const X = useSharedValue(0);
  const H_SWIPE_RANGE = BUTTON_WIDTH - SWIPEABLE_DIMENSIONS;

  const handleSwipeComplete = () => {
    navigation.navigate('PhoneLogin'); // Navigate to the Phone Login screen
  };

  const animatedGestureHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      if (event.translationX >= 0 && event.translationX <= H_SWIPE_RANGE) {
        X.value = event.translationX;
      }
    },
    onEnd: () => {
      if (X.value < H_SWIPE_RANGE / 2) {
        X.value = withSpring(0);
      } else {
        X.value = withSpring(H_SWIPE_RANGE, {}, () => runOnJS(handleSwipeComplete)());
      }
    },
  });

  const swipeableStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: X.value }],
    backgroundColor: interpolateColor(
      X.value,
      [0, H_SWIPE_RANGE],
      ['##fff5bf', '#06D6A0']
    ),
  }));

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/logo.png')} // Replace with CupidArrow logo
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Circular Images */}
      <View style={styles.imagesContainer}>
        <Image
          source={require('./assets/image1.png')} // Replace with actual images
          style={[styles.circularImage, styles.image1]}
        />
        <Image
          source={require('./assets/image2.png')}
          style={[styles.circularImage, styles.image2]}
        />
        <Image
          source={require('./assets/image3.png')}
          style={[styles.circularImage, styles.image3]}
        />
      </View>

      {/* Title and Subtitle */}
      <Text style={styles.title}>Discover Love Where Your Story Begins.</Text>
      <Text style={styles.subtitle}>
        Join us to discover your ideal partner and ignite the sparks of romance in your journey.
      </Text>

      {/* Swipe Button */}
      <View style={styles.swipeContainer}>
        <PanGestureHandler onGestureEvent={animatedGestureHandler}>
          <Animated.View style={[styles.swipeable, swipeableStyle]} />
        </PanGestureHandler>
        <Text style={styles.swipeText}>Login with Phone</Text>
      </View>

      {/* Footer */}
      <Text style={styles.footer}>
        Don't have an account?{' '}
        <Text style={styles.signUpText} onPress={() => navigation.navigate('SignUp')}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

export default CupidArrowScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBE7',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  logoContainer: {
    marginTop: 30,
  },
  logo: {
    width: 150,
    height: 50,
  },
  imagesContainer: {
    width: width * 0.8,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  circularImage: {
    width: 80,
    height: 80,
    borderRadius: 6,
    position: 'absolute',
  },
  image1: {
    top: 20,
    left: 40,
  },
  image2: {
    top: -10,
    right: 40,
  },
  image3: {
    bottom: 20,
    left: width / 2 - 40,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  swipeContainer: {
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
    backgroundColor: '#FFF',
    borderRadius: BUTTON_HEIGHT / 2,
    justifyContent: 'center',
    paddingHorizontal: 5,
    position: 'relative',
    marginTop: 20,
  },
  swipeable: {
    width: SWIPEABLE_DIMENSIONS,
    height: SWIPEABLE_DIMENSIONS,
    borderRadius: SWIPEABLE_DIMENSIONS / 2,
    position: 'absolute',
    top: 5,
    left: 0,
  },
  swipeText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '##fff5bf',
    marginTop: 10,
  },
  footer: {
    fontSize: 14,
    color: '#333',
    marginTop: 20,
  },
  signUpText: {
    color: '##fff5bf',
    fontWeight: 'bold',
  },
});

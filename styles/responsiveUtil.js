import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const responsiveWidth = (percentage) => (width * percentage) / 100;
export const responsiveHeight = (percentage) => (height * percentage) / 100;

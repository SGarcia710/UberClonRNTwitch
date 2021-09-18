import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const DESIGN_BASE_SCREEN = {
  width: 414,
  height: 896,
};

export const scale = (size) => {
  return (width / DESIGN_BASE_SCREEN.width) * size;
};

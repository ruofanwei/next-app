import { DeepPartial, Theme } from '@chakra-ui/react';

/** extend additional color here */
const extendedColors: DeepPartial<Record<string, Theme['colors']['blackAlpha']>> = {
  brand: {
    100: '#50A156', // green
    200: '#5EB1D8', // blue
    300: '#858585', // gray
    400: '#EA6035', // red
  },
  sub: {
    100: '#F5F9F1', // background light green
    200: '#F8F8F8', // background light gray
    300: '#EBF5FA', // background light blue
    400: '#CCCCCC', // background medium gray
    500: '#369ECE', // heavy blue
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme['colors']> = {};

const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};

export default colors;

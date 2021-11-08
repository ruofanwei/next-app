import { DeepPartial, Theme } from '@chakra-ui/react';

/** extend additional color here */
const extendedColors: DeepPartial<Record<string, Theme['colors']['blackAlpha']>> = {
  brand: {
    100: 'rgba(69, 82, 108, 1)', // dark blue
    200: '#505050', // dark grey
    300: '#dcdcdc', // light grey
    400: '#ff555d', // red
    500: '#D6D9E4', // light blue
  },
  sub: {
    100: '#E5E8F0', // light blue
    200: '#3E4A61', // dark blue
    300: 'rgba(69, 82, 108, 0.1)', // light blue
    400: '#8c8c8c', // grey
    500: '#16c79a', // green
    600: '#ff555d', // red
    700: '#505050',
    800: '#F2F2F2', // light grey
  },
  press: {
    100: '#3E4A61', // purples
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme['colors']> = {};

const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};

export default colors;

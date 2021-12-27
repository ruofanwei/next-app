import { DeepPartial, Theme } from '@chakra-ui/react';

/** extend additional color here */
const extendedColors: DeepPartial<Record<string, Theme['colors']['blackAlpha']>> = {
  brandGreen: {
    100: '#F5F9F1',
    200: '#C7DDB0',
    300: '#A1C67B',
    400: '#50A156',
    500: '#48914D',
    600: '#418345',
  },
  brandBlue: {
    100: '#EBF5FA',
    200: '#A1D1E7',
    300: '#77BDDE',
    400: '#5EB1D8',
    500: '#45A5D2',
    600: '#3199CA',
  },
  brandGray: {
    100: '#F8F8F8',
    200: '#E0E0E0',
    300: '#CCCCCC',
    400: '#B8B8B8',
    500: '#A1A1A1',
    600: '#858585',
  },
  brandRed: {
    100: '#F08B6C',
    200: '#ED744F',
    300: '#EA6035',
    400: '#E74C1B',
    500: '#D24316',
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme['colors']> = {};

const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};

export default colors;

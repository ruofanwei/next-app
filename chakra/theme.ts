import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

import fonts from './fonts';
import colors from './colors';
import components from './components';

const breakpoints = createBreakpoints({
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
});

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  components,
  colors,
  fonts,
  breakpoints,
  config,
});

export default theme;

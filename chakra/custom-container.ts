import { ComponentStyleConfig } from '@chakra-ui/react';

const CustomContainer: ComponentStyleConfig = {
  parts: ['outer', 'inner'],
  baseStyle: {
    outer: {},
    inner: {},
  },
  variants: {
    solid: (props) => ({
      outer: {},
    }),
    ghost: (props) => ({
      outer: {},
      inner: {},
    }),
    gradient: (props) => ({
      outer: {},
    }),
  },
  sizes: {
    prose: {
      inner: {},
    },
    // Percentage-based widths for "inner" part
  },
  defaultProps: {
    colorScheme: 'gray',
  },
};

export default CustomContainer;

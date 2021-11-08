import { DeepPartial, Theme } from '@chakra-ui/react';

const Button: DeepPartial<Theme['components']['Button']> = {
  baseStyle: {
    _focus: {
      boxShadow: 'none',
    },
  },
};
export default Button;

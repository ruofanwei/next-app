import { DeepPartial, Theme } from '@chakra-ui/react';

const Button: DeepPartial<Theme['components']['Button']> = {
  baseStyle: {
    _focus: {
      boxShadow: 'none',
      outline: 'none',
    },
    _active: {
      boxShadow: 'none',
      borderColor: 'unset',
    },
  },
};
export default Button;

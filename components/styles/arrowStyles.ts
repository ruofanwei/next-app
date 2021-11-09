import { TextProps } from '@chakra-ui/react';
export const arrowStyles: TextProps = {
  cursor: 'pointer',
  pos: 'absolute',
  top: '50%',
  w: 'auto',
  mt: '-22px',
  p: '16px',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '18px',
  transition: '0.6s ease',
  borderRadius: '0 3px 3px 0',
  userSelect: 'none',
  _hover: {
    opacity: 0.8,
    bg: 'black',
  },
};

import { mode, transparentize, getColor, StyleFunctionProps } from '@chakra-ui/theme-tools';

type AccessibleColor = {
  bg?: string;
  color?: string;
};

/** Accessible color overrides for less accessible colors. */
export const accessibleColorMap: { [key: string]: AccessibleColor } = {
  yellow: {
    bg: 'yellow.400',
    color: 'black',
  },
  cyan: {
    bg: 'cyan.400',
    color: 'black',
  },
};

export function variantSolid(props: StyleFunctionProps) {
  const { colorScheme: c } = props;

  if (!c) {
    return {};
  }

  if (c === 'gray') {
    return {
      bg: mode(`gray.100`, `whiteAlpha.200`)(props),
    };
  }

  const { bg = `${c}.500`, color = 'white' } = accessibleColorMap[c] || {};

  return {
    bg: mode(bg, `${c}.200`)(props),
    color: mode(color, `gray.800`)(props),
  };
}

import { ReactNode } from 'react';
import { Box, Grid } from '@chakra-ui/react';

interface ChakraProps {
  children: ReactNode;
}

export const GridResponsive = ({ children }: ChakraProps) => {
  return (
    <Box
      w={{ base: '300px', md: '800px' }}
      h={{ base: 'full', md: '800px' }}
      overflowY={{ base: 'hidden', md: 'scroll' }}
    >
      <Grid
        gridTemplateRows={{ base: 'repeat(2, calc(50% - 10px))', md: 'auto auto' }}
        gridTemplateColumns={{ base: 'repeat(6, calc(50% - 40px))', md: 'repeat(2, calc(50% - 20px))' }}
        overflowX={{ base: 'scroll', md: 'hidden' }}
        overflowY={{ base: 'hidden', md: 'scroll' }}
        gridGap="4"
      >
        {children}
      </Grid>
    </Box>
  );
};

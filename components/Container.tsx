import { Flex, Box, useColorMode, FlexProps } from '@chakra-ui/react';

export const Container = (props: FlexProps) => {
  return (
    <Box
      textAlign="center"
      fontSize="xl"
      w={'full'}
      p="0"
      //maxW={800}
      mx="auto"
      {...props}
    />
  );
};

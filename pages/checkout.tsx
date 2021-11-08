import { useState, SyntheticEvent } from 'react';
import { useRouter } from 'next/router';
import { Container, useColorMode, Spacer, Button, Heading, Text, Link, Divider, Flex, Box } from '@chakra-ui/react';
import MultiContainer from '../components/multi-container';
import { Buyer } from '../components/Buyer';
import { Order } from '../components/Order';
const Checkout = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <MultiContainer variant="solid" size="3/4" colorScheme="gray" overflow="auto" margin="auto">
      <Flex h="100vh" py={[0, 10, 20]} direction={{ base: 'column-reverse', md: 'row' }}>
        <Box>
          <Buyer />
          <Buyer />
        </Box>
        <Spacer />
        <Order />
      </Flex>
    </MultiContainer>
  );
};

export default Checkout;

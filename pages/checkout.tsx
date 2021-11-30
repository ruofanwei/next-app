import { useState, SyntheticEvent } from 'react';
import { useRouter } from 'next/router';
import {
  useColorMode,
  Spacer,
  Button,
  Heading,
  Text,
  Link,
  Divider,
  Flex,
  Box,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import CustomContainer, { IMultiContainerProps } from '../components/custom-container';
import { Buyer } from '../components/Buyer';
import Paycard from '../components/Paycard';
import { Order } from '../components/Order';
import { Header } from '../components/Header/index';
import { Container } from '../components/Container';
const Checkout = () => {
  return (
    <Container height="100vh">
      <Header />
      <Container bg="gray.200" overflow="auto" margin="auto" minH="full">
        <Flex
          py={[0, 0, 5]}
          direction={{ base: 'column', md: 'row' }}
          m="auto"
          justify="space-around"
          w={{ md: 'full' }}
        >
          <Box>
            <Buyer />

            <Paycard />
          </Box>

          <Order />
        </Flex>
      </Container>
    </Container>
  );
};

export default Checkout;

import React from 'react';
import { useMachine } from '@xstate/react';
import { Flex, Box } from '@chakra-ui/react';

import { Buyer } from '../components/Buyer';
import CreditCardForm from '../components/CreditCardForm';
import { Order } from '../components/Order';
import { Header } from '../components/Header/index';
import { Container } from '../components/Container';
const Checkout = () => {
  return (
    <Container height="100vh">
      <Header />
      <Container bg="gray.200" overflow="auto" margin="auto" minH="full" p={{ base: 2 }}>
        <Flex
          py={[0, 0, 5]}
          direction={{ base: 'column', md: 'row' }}
          m="auto"
          justify="space-around"
          w={{ md: 'full' }}
        >
          <Box>
            <Buyer />
            <CreditCardForm />
          </Box>
          <Order />
        </Flex>
      </Container>
    </Container>
  );
};

export default Checkout;

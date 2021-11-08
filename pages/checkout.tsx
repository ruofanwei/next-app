import { useState, SyntheticEvent } from 'react';
import { useRouter } from 'next/router';
import { useColorMode, Spacer, Button, Heading, Text, Link, Divider, Flex, Box } from '@chakra-ui/react';
import CustomContainer from '../components/custom-container';
import { Buyer } from '../components/Buyer';
import { Order } from '../components/Order';
import { Header } from '../components/Header/index';
import { Container } from '../components/Container';
const Checkout = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container height="100vh">
      <Header />

      <CustomContainer variant="solid" size="3/4" colorScheme="gray" overflow="auto" margin="auto">
        <Flex py={[0, 5, 10]} direction={{ base: 'column-reverse', md: 'row' }}>
          <Box>
            <Buyer />
            <Buyer />
          </Box>
          <Spacer />
          <Order />
        </Flex>
      </CustomContainer>
    </Container>
  );
};

export default Checkout;

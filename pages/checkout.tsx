import React from 'react';
import { useMachine } from '@xstate/react';
import { Flex, Box } from '@chakra-ui/react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import cardValidator from 'card-validator';
import { Buyer } from '../components/Buyer';
import PaymentCard from '../components/PaymentCard';
import { Order } from '../components/Order';
import { Header } from '../components/Header/index';
import { Container } from '../components/Container';

interface FormModel {
  holderName: string;
  cardNumber: string;
  expiration: string;
  cvv: string;
}
const Checkout = () => {
  const formMethods = useForm<FormModel>({
    // to trigger the validation on the blur event
    mode: 'onBlur',
    defaultValues: {
      holderName: '',
      cardNumber: '',
      expiration: '',
      cvv: '',
    },
  });

  const cardNumber = formMethods.watch('cardNumber');
  const cardType = cardValidator.number(cardNumber).card?.niceType;
  const onSubmit = (model: FormModel) => console.log('form submit', model);
  return (
    <Container height="100vh">
      <Header />

      <Container bg="gray.200" overflow="auto" margin="auto" minH="full" p={{ base: 2 }}>
        <FormProvider {...formMethods}>
          <Flex
            py={[0, 0, 5]}
            direction={{ base: 'column', md: 'row' }}
            m="auto"
            justify="space-around"
            w={{ md: 'full' }}
          >
            <Box>
              <Buyer />
              <PaymentCard />
            </Box>
            <Order onSubmit={onSubmit} />
          </Flex>
        </FormProvider>
      </Container>
    </Container>
  );
};

export default Checkout;

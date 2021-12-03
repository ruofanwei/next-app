import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import {
  Button,
  Flex,
  Box,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  SimpleGrid,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Grid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  VStack,
  useBreakpointValue,
  Checkbox,
  Icon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import { MdPayment, MdOutlineAtm } from 'react-icons/md';
import { IoStorefront } from 'react-icons/io5';
import { FaCcMastercard, FaCcJcb, FaCcVisa } from 'react-icons/fa';
import VISA from '../public/svg/VISA.svg';
import JCB from '../public/svg/JCB.svg';
import Master from '../public/svg/Master.svg';
import Atm from '../public/svg/Atm.svg';
import Creditcard from '../public/svg/Creditcard.svg';
import Store from '../public/svg/Store.svg';
import { useForm, Controller, useFormContext, RegisterOptions } from 'react-hook-form';

interface FormModel {
  holderName: string;
  cardNumber: string;
  expiration: string;
  cvv: string;
}
const CreditCardForm: React.FC = () => {
  const formMethods = useForm<FormModel>({
    defaultValues: {
      holderName: '',
      cardNumber: '',
      expiration: '',
      cvv: '',
    },
  });
  const allowToggle = useBreakpointValue({ base: true, md: false });
  const paymentData = [
    {
      icon: <Creditcard />,
      name: '信用卡',
    },
    {
      icon: <Store />,
      name: '超商付款',
    },
    {
      icon: <Atm />,
      name: 'ATM',
    },
  ];
  const onSubmit = (model: FormModel) => console.log('form submit', model);

  return (
    <Flex
      align={'stretch'}
      justify={'stretch'}
      lineHeight="taller"
      w="100%"
      boxShadow={{ base: 'lg', md: 'lg' }}
      rounded={{ base: 'md', md: 'xl' }}
      bg={'white'}
      p={{ base: '2', md: '5' }}
      my={{ base: '2', md: '2' }}
    >
      <Accordion allowToggle={allowToggle} defaultIndex={[0]} id="Accordion-id">
        <AccordionItem>
          <AccordionButton
            lineHeight={3}
            fontSize={{ base: 'md', md: 'lg' }}
            borderBottomWidth={{ base: 'none', md: '1px' }}
            fontWeight="500"
            id="Accordion-id"
          >
            <Box as={'span'} display={{ base: 'block', md: 'none' }}>
              2.{' '}
            </Box>
            選擇付款
          </AccordionButton>
          <AccordionPanel p={{ base: '5', md: '5' }}>
            <FormControl id="payment" isRequired p={2} {...formMethods}>
              <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="400">
                請選擇你想要支付的方式
              </Text>
              <Tabs>
                <TabList>
                  {paymentData.map((data, id) => (
                    <Tab
                      key={id}
                      w="100%"
                      flexDirection="column"
                      borderWidth="1px"
                      borderRadius="10px"
                      borderColor="gray.200"
                      p={1}
                      spacing={3}
                    >
                      {data.icon}
                      <Text fontSize="xs">{data.name}</Text>
                    </Tab>
                  ))}
                </TabList>
              </Tabs>

              <FormLabel id="cardNumber" fontSize={{ base: 'sm', md: 'md' }} fontWeight="400" color="gray.400">
                信用卡號碼
              </FormLabel>
              <Input placeholder="信用卡號碼" type="text" name="cardNumber" />
              <HStack w="100%" justify="flex-end" mt={2}>
                <JCB />
                <VISA />
                <Master />
              </HStack>
              <FormLabel id="holderName" fontSize={{ base: 'sm', md: 'md' }} fontWeight="400" color="gray.400">
                姓名
              </FormLabel>
              <Input type="text" placeholder="信用卡持有人姓名" name="holderName" />

              <Flex alignItems="flex-end">
                <Box>
                  <FormLabel id="expiration" fontSize={{ base: 'sm', md: 'md' }} fontWeight="400" color="gray.400">
                    信用卡有效年月
                  </FormLabel>
                  <Input placeholder="月份 / 年" name="expiration" _placeholder={{ color: 'gray.500' }} type="text" />
                </Box>

                <Input placeholder="卡片末三碼" name="cvv" _placeholder={{ color: 'gray.500' }} type="text" />
              </Flex>

              <HStack spacing={6} p={3}>
                <Checkbox />
                <Text color="gray.400" fontSize={{ base: 'sm', md: 'md' }} onClick={formMethods.handleSubmit(onSubmit)}>
                  本人同意記住結帳資訊，以利下次支付。
                </Text>
              </HStack>
            </FormControl>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

export default CreditCardForm;

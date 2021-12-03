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

import Atm from '../public/svg/Atm.svg';
import Creditcard from '../public/svg/Creditcard.svg';
import Store from '../public/svg/Store.svg';
import CreditCardForm from './CreditCardForm';
import { StorePay } from './StorePay';
import { CustomTab } from './CustomTab';
import { CustomTabPanel } from './CustomTabPanel';

const PaymentCard: React.FC = () => {
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
            <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="400">
              請選擇你想要支付的方式
            </Text>
            <Tabs>
              <TabList>
                {paymentData.map((data, index) => (
                  <VStack
                    w="100%"
                    key={index}
                    borderWidth="1px"
                    flexDirection="column"
                    borderRadius="10px"
                    borderColor="gray.200"
                    p={1}
                    spacing={3}
                    cursor={'pointer'}
                  >
                    <CustomTab m="auto">
                      {data.icon}
                      <Text fontSize="xs">{data.name}</Text>
                    </CustomTab>
                  </VStack>
                ))}
              </TabList>
              <TabPanels>
                <TabPanel>
                  <CreditCardForm />
                </TabPanel>
                <TabPanel>
                  <StorePay />
                </TabPanel>
                <TabPanel>
                  <StorePay />
                </TabPanel>
              </TabPanels>
            </Tabs>

            <HStack spacing={6} p={3}>
              <Checkbox />
              <Text color="gray.400" fontSize={{ base: 'sm', md: 'md' }}>
                本人同意記住結帳資訊，以利下次支付。
              </Text>
            </HStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

export default PaymentCard;

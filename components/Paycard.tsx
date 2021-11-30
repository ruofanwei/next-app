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

const Paycard = () => {
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
      name: 'ATM/網路轉帳',
    },
  ];

  return (
    <Flex align={'stretch'} justify={'stretch'} lineHeight="taller" w="100%">
      <Stack
        //spacing={{base: 'none' , md: '4'}}
        w={{ base: '100%', md: '900px' }}
        //maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={{ base: 'none', md: 'xl' }}
        boxShadow={'lg'}
        p={{ base: 'none', md: '5' }}
        my={{ base: 'none', md: '1' }}
      >
        <Accordion allowToggle={allowToggle} defaultIndex={[0]}>
          <AccordionItem>
            <AccordionButton
              lineHeight={3}
              fontSize={{ base: 'md', md: 'lg' }}
              borderBottomWidth={{ base: 'none', md: '1px' }}
              fontWeight="500"
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
              <Grid display="grid" templateColumns="repeat(3, 1fr)" gap={2} mb={2}>
                {paymentData.map((data, id) => (
                  <VStack key={id} borderWidth="1px" borderRadius="10px" borderColor="gray.200" p={1} spacing={3}>
                    <Box m="auto">{data.icon}</Box>
                    <Text fontSize="xs">{data.name}</Text>
                  </VStack>
                ))}
              </Grid>
              <FormControl id="payment" isRequired p={2}>
                <FormLabel id="FormLabel-1" fontSize={{ base: 'sm', md: 'md' }} fontWeight="400" color="gray.400">
                  信用卡號碼
                </FormLabel>
                <Input placeholder="信用卡號碼" type="text" />
                <HStack w="100%" justify="flex-end" mt={2}>
                  <JCB />
                  <VISA />
                  <Master />
                </HStack>
                <FormLabel id="FormLabel-1" fontSize={{ base: 'sm', md: 'md' }} fontWeight="400" color="gray.400">
                  姓名
                </FormLabel>
                <Input type="text" placeholder="信用卡持有人姓名" />

                <Flex alignItems="flex-end">
                  <Box>
                    <FormLabel id="FormLabel-1" fontSize={{ base: 'sm', md: 'md' }} fontWeight="400" color="gray.400">
                      信用卡有效年月
                    </FormLabel>
                    <Input placeholder="月份 / 年" _placeholder={{ color: 'gray.500' }} type="text" />
                  </Box>

                  <Input placeholder="卡片末三碼" _placeholder={{ color: 'gray.500' }} type="text" />
                </Flex>
              </FormControl>
              <HStack spacing={6} p={3}>
                <Checkbox />
                <Text color="gray.400" fontSize={{ base: 'sm', md: 'md' }}>
                  本人同意記住結帳資訊，以利下次支付。
                </Text>
              </HStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Stack>
    </Flex>
  );
};

export default Paycard;

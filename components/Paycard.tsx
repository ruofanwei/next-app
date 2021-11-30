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
} from '@chakra-ui/react';
import { MdPayment, MdOutlineAtm } from 'react-icons/md';
import { IoStorefront } from 'react-icons/io5';

const Paycard = () => {
  const allowToggle = useBreakpointValue({ base: true, md: false });
  const paymentData = [
    {
      icon: <MdPayment />,
      name: '信用卡',
    },
    {
      icon: <IoStorefront />,
      name: '超商付款',
    },
    {
      icon: <MdOutlineAtm size={30} />,
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
              lineHeight={1.1}
              color="gray.200"
              fontSize={{ base: '2xl', md: '3xl' }}
              _expanded={{ color: 'black' }}
            >
              2. 選擇付款
            </AccordionButton>
            <AccordionPanel p={10}>
              <Text>請選擇你想要支付的方式</Text>
              <Grid display="grid" templateColumns="repeat(3, 1fr)" gap={2} mb={2}>
                {paymentData.map((data, id) => (
                  <VStack key={id} borderWidth="1px" borderRadius="10px" borderColor="gray.200" p={1} spacing={3}>
                    <Box m="auto">{data.icon}</Box>
                    <Text fontSize="xs">{data.name}</Text>
                  </VStack>
                ))}
              </Grid>
              <FormControl id="payment" isRequired>
                <Input placeholder="信用卡號碼" _placeholder={{ color: 'gray.500' }} type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel id="FormLabel-1">Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={6} mt={3}>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                >
                  Submit
                </Button>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Stack>
    </Flex>
  );
};

export default Paycard;

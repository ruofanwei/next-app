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
import VISA from '../public/svg/VISA.svg';
import JCB from '../public/svg/JCB.svg';
import Master from '../public/svg/Master.svg';
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
  const onSubmit = (model: FormModel) => console.log('form submit', model);

  return (
    <FormControl id="payment" isRequired p={2}>
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
    </FormControl>
  );
};
export default CreditCardForm;

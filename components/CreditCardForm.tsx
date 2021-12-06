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
import AMEX from '../public/svg/AMEX.svg';
import MASTERCARD from '../public/svg/Master.svg';
import { useForm, Controller, useFormContext, RegisterOptions } from 'react-hook-form';
import cardValidator from 'card-validator';

interface Props {
  name?: string;
  rules?: RegisterOptions;
  validationLength?: number;
}

const CreditCardForm: React.FC<Props> = (props) => {
  const { name, rules, validationLength = 1, ...restOfProps } = props;
  const { trigger, watch } = useFormContext();
  const cardNumber = watch('cardNumber');

  const { card } = cardValidator.number(cardNumber);

  let source;
  switch (card?.type) {
    case 'visa':
      source = VISA;
      break;
    case 'mastercard':
      source = MASTERCARD;
      break;
    case 'jcb':
      source = JCB;
      break;
    case 'american-express':
      source = AMEX;
      break;
    default:
      break;
  }

  return (
    <FormControl id="payment" isRequired p={2}>
      <FormLabel id="cardNumber" fontSize={{ base: 'sm', md: 'md' }} fontWeight="400" color="gray.400">
        信用卡號碼
      </FormLabel>
      <Input
        placeholder="信用卡號碼"
        type="text"
        name="cardNumber"
        rules={{
          required: 'Card number is required.',
          validate: {
            isValid: (value: string) => {
              return cardValidator.number(value).isValid || 'This card number looks invalid.';
            },
          },
        }}
      />
      <HStack w="100%" justify="flex-end" mt={2}>
        <JCB />
        <VISA />
        <MASTERCARD />
        <AMEX />
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

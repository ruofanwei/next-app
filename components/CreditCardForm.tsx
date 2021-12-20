import React, { useEffect, useRef, useCallback, useMemo, useState } from 'react';
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
  BoxProps,
} from '@chakra-ui/react';
import VISA from '../public/svg/VISA.svg';
import JCB from '../public/svg/JCB.svg';
import AMEX from '../public/svg/AMEX.svg';
import MASTERCARD from '../public/svg/Master.svg';
import { useForm, Controller, useFormContext, RegisterOptions } from 'react-hook-form';
import cardValidator from 'card-validator';
import { cardNumberFormatter, expirationDateFormatter } from '../lib/formatters';
import { getTranslations } from '../lib/translations';

interface Props {
  name?: string;
  rules?: RegisterOptions;
  validationlength?: number;
}

export enum CardFields {
  CardNumber,
  CardHolderName,
  Expiration,
  CVV,
}

const CreditCardForm: React.FC<Props> = (props) => {
  const { name, rules, validationlength = 1, ...restOfProps } = props;
  const { trigger, watch } = useFormContext();
  const [focusedField, setFocusedField] = useState<CardFields | null>(null);
  const cardNumber = watch('cardNumber');

  const { card } = cardValidator.number(cardNumber);
  const isAmex = card?.type === 'american-express';
  const cvvLength = isAmex ? 4 : 3;

  const holderNameRef = useRef<HTMLInputElement>(null);
  const cardNumberRef = useRef<HTMLInputElement>(null);
  const expirationRef = useRef<HTMLInputElement>(null);
  const cvvRef = useRef<HTMLInputElement>(null);

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

  async function goNext() {
    if (focusedField === null) return;

    const ref = [cardNumberRef, holderNameRef, expirationRef, cvvRef][focusedField + 1];
    ref.current?.focus();
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
        ref={cardNumberRef}
        maxLength={19}
        validationlength={isAmex ? 18 : 19}
        onValid={goNext}
        onFocus={() => setFocusedField(CardFields.CardNumber)}
        //formatter={cardNumberFormatter}
        rules={{
          required: getTranslations().cardNumberRequired,
          validate: {
            isValid: (value: string) => {
              return cardValidator.number(value).isValid || getTranslations().cardNumberInvalid;
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
      <Input
        type="text"
        ref={holderNameRef}
        onFocus={() => setFocusedField(CardFields.CardHolderName)}
        rules={{
          required: getTranslations().cardHolderNameRequired,
          validate: (value: string) => {
            return cardValidator.cardholderName(value).isValid || getTranslations().cardHolderNameInvalid;
          },
        }}
        placeholder="信用卡持有人姓名"
        name="holderName"
      />

      <Flex alignItems="flex-end">
        <Box>
          <FormLabel id="expiration" fontSize={{ base: 'sm', md: 'md' }} fontWeight="400" color="gray.400">
            信用卡有效年月
          </FormLabel>
          <Input
            placeholder="月份 / 年"
            ref={expirationRef}
            //formatter={expirationDateFormatter}
            validationlength={5}
            rules={{
              required: getTranslations().expirationRequired,
              validate: {
                isValid: (value: string) => {
                  return cardValidator.expirationDate(value).isValid || getTranslations().expirationInvalid;
                },
              },
            }}
            onValid={goNext}
            onFocus={() => setFocusedField(CardFields.Expiration)}
            name="expiration"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </Box>

        <Input
          placeholder="卡片末三碼"
          ref={cvvRef}
          maxLength={cvvLength}
          validationlength={cvvLength}
          rules={{
            required: getTranslations().securityCodeRequired,
            validate: {
              isValid: (value: string) => {
                return cardValidator.cvv(value, cvvLength).isValid || getTranslations().securityCodeInvalid;
              },
            },
          }}
          name="cvv"
          onValid={goNext}
          onFocus={() => setFocusedField(CardFields.CVV)}
          _placeholder={{ color: 'gray.500' }}
          type="text"
        />
      </Flex>
    </FormControl>
  );
};
export default CreditCardForm;

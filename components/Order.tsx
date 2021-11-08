import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

export const Order = () => {
  return (
    <Box maxW={'445px'} w={'full'} bg={'white'} rounded={'md'} p={6}>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <AccordionButton color={'gray.700'} fontSize={'2xl'} fontFamily={'body'}>
            付款明細
          </AccordionButton>
          <AccordionPanel color={'gray.500'}>
            精選營地 - 人數 : 2 位大人 + 2 位小孩 2021-11-15 至 2021-11-15 總金額TWD 12,000
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

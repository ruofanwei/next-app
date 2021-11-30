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
  useBreakpointValue,
} from '@chakra-ui/react';

export const Order = () => {
  const allowToggle = useBreakpointValue({ base: true, md: false });
  return (
    <Box
      w={{ base: '100%', md: 'md' }}
      bg={'white'}
      rounded={{ base: 'none', md: 'xl' }}
      fontSize={{ base: 'md', md: 'lg' }}
      p={{ base: '2', md: '5' }}
    >
      <Box color={'gray.700'} fontFamily={'body'}>
        付款明細
      </Box>
      <Box color={'gray.500'} p={10}>
        精選營地 - 人數 : 2 位大人 + 2 位小孩 2021-11-15 至 2021-11-15 總金額TWD 12,000
      </Box>
    </Box>
  );
};

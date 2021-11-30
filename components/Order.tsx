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
  VStack,
  HStack,
  Input,
  Button,
} from '@chakra-ui/react';

import Info from '../public/svg/Info.svg';
import Point from '../public/svg/Point.svg';
import Edit from '../public/svg/Edit.svg';
import Garbage from '../public/svg/Garbage.svg';
export const Order = () => {
  const allowToggle = useBreakpointValue({ base: true, md: false });
  return (
    <Box
      w={{ base: '100%', md: 'md' }}
      bg={'white'}
      rounded={{ base: 'none', md: 'xl' }}
      fontSize={{ base: 'md', md: 'lg' }}
      p={{ base: '5', md: '10' }}
      lineHeight="taller"
    >
      <Box as="p" textAlign="start" color={'blue.300'} fontWeight="extrabold">
        南投中寮 言葉之庭露營區
      </Box>
      <Box as="p" textAlign="start" color={'gray.400'} fontSize="md">
        南投縣中寮鄉和興村永樂路134之2號
      </Box>
      <Box as="p" textAlign="start" color={'blue.300'} fontSize="md" fontWeight="extrabold">
        6/18（五）- 6/20 (日) 2晚
      </Box>
      <VStack bg={'gray.100'} p={5} borderRadius={5} mt={2}>
        <HStack borderBottomWidth={1} w="full" justify="space-between">
          <Text color="gray.500" fontSize="sm">
            草地區 1 帳 +夜衝
          </Text>
          <Text color="gray.500" fontSize="sm">
            NT$ 1800
          </Text>
          <Garbage />
        </HStack>
        <VStack borderBottomWidth={1} w="full">
          <HStack w="full" justify="space-between">
            <Text color="gray.500" fontSize="sm">
              小計
            </Text>
            <Text color="gray.500" fontSize="sm">
              NT$ 1800
            </Text>
          </HStack>
          <HStack w="full" justify="flex-start">
            <Text color="gray.500" fontSize="sm">
              優惠折抵
            </Text>
            <Text color="gray.500" fontSize="sm">
              我有優惠券
            </Text>
            <Info />
          </HStack>
          <HStack w="full" justify="flex-start">
            <Point />
            <Text color="gray.500" fontSize="sm">
              點數折抵
            </Text>
            <Input w={3} h={5} />
            <Text color="gray.500" fontSize="sm">
              元
            </Text>
          </HStack>
          <HStack w="full" justify="flex-start">
            <Text color="gray.500" fontSize="sm">
              {' '}
              累積 1139 元
            </Text>
          </HStack>
        </VStack>
        <HStack w="full" justify="space-between">
          <Text color="gray.500" fontSize="sm">
            總金額
          </Text>
          <Text color="gray.500" fontSize="sm">
            NT$ 4700
          </Text>
        </HStack>
        <Button w="full" colorScheme="blue">
          前往支付 NT$ 4700
        </Button>
      </VStack>
      <HStack justify="center">
        <Edit />
        <Text color="gray.500" fontSize="sm">
          修改訂單
        </Text>
      </HStack>
    </Box>
  );
};

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Textarea,
} from '@chakra-ui/react';

export const Buyer = () => {
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
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <AccordionButton lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
              1. 預約資料
            </AccordionButton>
            <AccordionPanel>
              <FormControl id="name" isRequired>
                <FormLabel id="FormLabel-1">訂購者姓名</FormLabel>
                <Input variant="flushed" placeholder="訂購者姓名" _placeholder={{ color: 'gray.500' }} type="text" />
              </FormControl>
              <FormControl id="phone" isRequired>
                <FormLabel id="FormLabel-2">聯絡電話</FormLabel>
                <Input variant="flushed" placeholder="訂購者電話" type="text" />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel id="FormLabel-3">Email</FormLabel>
                <Input variant="flushed" placeholder="訂購者電話" type="email" />
              </FormControl>
              <FormControl id="note" isRequired>
                <FormLabel id="FormLabel-4">留言/特別需求</FormLabel>
                <Input variant="flushed" placeholder="如果您有特別需要附註或說明，請在此填寫" type="text" />
              </FormControl>
              <Text>露營訂位服務條款</Text>
              <Textarea placeholder="服務條款" />
              <Stack spacing={6}>
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

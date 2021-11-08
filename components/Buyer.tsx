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
} from '@chakra-ui/react';

export const Buyer = () => {
  return (
    <Flex
      //minH={'100vh'}
      align={'center'}
      justify={'center'}
    >
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}
      >
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <AccordionButton lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
              訂購人資料
            </AccordionButton>
            <AccordionPanel>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input placeholder="your-email@example.com" _placeholder={{ color: 'gray.500' }} type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
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

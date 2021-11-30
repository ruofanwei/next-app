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
  useBreakpointValue,
} from '@chakra-ui/react';

export const Buyer = () => {
  const allowToggle = useBreakpointValue({ base: true, md: false });
  return (
    <Flex align={'stretch'} justify={'stretch'} lineHeight="taller" w="100%">
      <Stack
        w={{ base: '100%', md: '900px' }}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={{ base: 'none', md: 'xl' }}
        boxShadow={'lg'}
        p={{ base: '2', md: '5' }}
        my={{ base: 'none', md: '1' }}
      >
        <Accordion allowToggle={allowToggle} defaultIndex={[0]}>
          <AccordionItem>
            <AccordionButton
              lineHeight={2}
              fontSize={{ base: 'md', md: 'lg' }}
              borderBottomWidth={{ base: 'none', md: '1px' }}
              fontWeight="500"
            >
              <Box as={'span'} display={{ base: 'block', md: 'none' }}>
                1.{' '}
              </Box>
              預約資料
            </AccordionButton>
            <AccordionPanel p={{ base: '6', md: '5' }}>
              <FormControl id="name" isRequired>
                <FormLabel id="FormLabel-1" fontSize={{ base: 'sm', md: 'md' }} fontWeight="400">
                  訂購者姓名
                </FormLabel>
                <Input variant="flushed" placeholder="訂購者姓名" _placeholder={{ color: 'gray.500' }} type="text" />
              </FormControl>
              <FormControl id="phone" isRequired>
                <FormLabel id="FormLabel-2" fontSize={{ base: 'sm', md: 'md' }} fontWeight="400">
                  聯絡電話
                </FormLabel>
                <Input variant="flushed" placeholder="訂購者電話" type="text" />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel id="FormLabel-3" fontSize={{ base: 'sm', md: 'md' }} fontWeight="400">
                  Email
                </FormLabel>
                <Input variant="flushed" placeholder="訂購者電話" type="email" />
              </FormControl>
              <FormControl id="note" isRequired>
                <FormLabel id="FormLabel-4" fontSize={{ base: 'sm', md: 'md' }} fontWeight="400">
                  留言/特別需求
                </FormLabel>
                <Input variant="flushed" placeholder="如果您有特別需要附註或說明，請在此填寫" type="text" />
              </FormControl>
              <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="400">
                露營訂位服務條款
              </Text>
              <Box borderWidth={1} borderRadius={1} fontSize={{ base: 'sm', md: 'md' }} p={3} color="gray.500">
                第一條（訂位方式）
                當您以網際網路或電話方式，成功完成訂位下單，本網站「露營樂」依您提供會員資料，發送簡訊、電子郵件或電話通知您。
                第二條（訂位內容）
                當您完成訂位下單，即表示同意預定營區之露營期間、營位型態、食材、數量、服務、價格、訂金、付款方式，及提供聯絡方式等內容。
              </Box>
              <Stack spacing={6} mt={3} display={{ base: 'block', md: 'none' }}>
                <Button colorScheme="teal" variant="outline" w="full">
                  下一步
                </Button>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Stack>
    </Flex>
  );
};

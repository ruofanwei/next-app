import { ReactNode } from 'react';
import { useIntl, FormattedDate } from 'react-intl';
import Image from 'next/image';
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  HStack,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
const Logo = (props: any) => {
  return <Text>Logo</Text>;
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export const Footer = () => {
  return (
    <Box width="100%" bg={useColorModeValue('gray.50', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }} spacing={8}>
          <Stack spacing={6} align={'center'}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'}>camping - GO</Text>
            <HStack>
              <Text fontSize={'sm'}>switch langue on </Text>
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  Chinese
                </MenuButton>
                <MenuList>
                  <MenuItem>Chinese</MenuItem>
                  <MenuItem>English</MenuItem>
                  <MenuItem>Japanese</MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </Stack>
          <Stack align={'center'}>
            <ListHeader>會員服務</ListHeader>
            <Link href={'#'}>最新消息</Link>
            <Link href={'#'}>服務條款</Link>
            <Link href={'#'}>隱私權政策 </Link>
            <Link href={'#'}>FAQ常見問題</Link>
            <Link href={'#'}>聯絡我們</Link>
          </Stack>

          <Stack align={'center'}>
            <ListHeader>Follow Us</ListHeader>
            <Link href={'#'}>Facebook</Link>
            <Link href={'#'}>Instagram</Link>
            <Link href={'#'}>Line</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

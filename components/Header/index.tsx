import { useSession, signIn, signOut } from 'next-auth/react';
import { ReactNode } from 'react';
import Image from 'next/image';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Text,
  IconButton,
  Button,
  Stack,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { IoPerson } from 'react-icons/io5';
import { MobileNav } from './MobileNav';
import { DesktopNav } from './DesktopNav';
const Logo = (props: any) => {
  return <Text>Logo</Text>;
};
export const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { data: session, status } = useSession();
  console.log('session', session);
  console.log('status', status);
  console.log(session?.user?.image);
  return (
    <Box width="100%">
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Logo color={useColorModeValue('gray.700', 'white')} />

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        {session?.user ? (
          <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
            <Menu>
              <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                <Avatar size={'sm'} src={`${session?.user.image}`} />
              </MenuButton>
              <MenuList>
                <MenuItem
                  onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  }}
                >
                  <a href={`/api/auth/signout`}>Sign out</a>
                </MenuItem>
                <MenuItem>
                  <a href={`/profile`}>Profile</a>
                </MenuItem>
                <MenuDivider />
              </MenuList>
            </Menu>
          </Stack>
        ) : (
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            align="center"
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            <a href={`/api/auth/signout`}>
              <IoPerson />
            </a>
            <Text cursor="pointer">登入</Text>
          </Stack>
        )}
      </Flex>

      <MobileNav isOpen={isOpen} />
    </Box>
  );
};

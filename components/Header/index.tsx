import { useSession, signIn, signOut } from 'next-auth/react';

import React, { useRef, ReactNode } from 'react';
import Image from 'next/image';
import {
  Box,
  Flex,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
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
import { SignInNav } from './SignInNav';
const Logo = (props: any) => {
  return <Text>Logo</Text>;
};
export const Header = () => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const { data: session, status } = useSession();
  const btnRef = useRef();
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
          <SignInNav />
        ) : (
          <Stack
            flex={{ base: 1, md: 0 }}
            minW={20}
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

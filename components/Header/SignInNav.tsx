import { useSession, signIn, signOut } from 'next-auth/react';

import React, { useRef, ReactNode, ReactText } from 'react';
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
  Icon,
  Button,
  Stack,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  VStack,
  CloseButton,
  FlexProps,
  BoxProps,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { IoPerson } from 'react-icons/io5';
import { FiLogOut } from 'react-icons/fi';
import { FiHome, FiTrendingUp, FiCompass, FiAward, FiUser, FiFileText, FiGift, FiServer } from 'react-icons/fi';
import { IconType } from 'react-icons';
interface LinkItemProps {
  name: string;
  icon: IconType;
}

const LinkItems: Array<LinkItemProps> = [
  { name: '會員資料', icon: FiUser },
  { name: '預約記錄', icon: FiFileText },
  { name: '紅利點數', icon: FiAward },
  { name: '優惠卷', icon: FiServer },
];

export const SignInNav = () => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const { data: session, status } = useSession();
  const btnRef = useRef();
  return (
    <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
      <IoPerson onClick={onOpen} cursor="pointer" />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent borderTopLeftRadius="12px" borderBottomLeftRadius="12px">
          <DrawerCloseButton color="white" />
          <DrawerHeader bg="blue.200" p={10} borderTopLeftRadius="12px">
            <HStack>
              <Avatar size={'sm'} src={`${session?.user.image}`} />
              <VStack display={{ base: 'flex', md: 'flex' }} alignItems="flex-start" spacing="1px" ml="2">
                <Text fontSize="sm" color="white">
                  {session?.user.name}
                </Text>
                <Text fontSize="xs" color="white">
                  0988888888
                </Text>
              </VStack>
            </HStack>
          </DrawerHeader>

          <DrawerBody p={8}>
            <SidebarContent onClose={() => onClose} />
          </DrawerBody>

          <DrawerFooter>
            <Button
              bg="blue.200"
              color="white"
              rightIcon={<FiLogOut />}
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              <a href={`/api/auth/signout`}>登出</a>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Stack>
  );
};

interface SidebarProps extends BoxProps {
  onClose: () => void;
}
const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'blue.200')}
      borderRight="1px"
      borderRightColor={useColorModeValue('blue.200', 'blue.200')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex alignItems="center" justifyContent="space-between"></Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }}>
      <Flex
        align="center"
        p="4"
        color="blue.300"
        fontWeight="extrabold"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'blue.200',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

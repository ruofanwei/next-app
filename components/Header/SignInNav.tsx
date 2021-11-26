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
  VStack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { IoPerson } from 'react-icons/io5';
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

          <DrawerBody></DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>

            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Stack>
  );
};

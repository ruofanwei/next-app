import * as React from 'react';
import {
  Flex,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  Box,
  chakra,
  ModalContent,
  Modal,
  ModalBody,
  ModalOverlay,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import NextImage, { ImageProps, ImageLoaderProps } from 'next/image';
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import mountains from '../public/1.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import { Carousel } from './Carousel';
import { CustomTab } from './CustomTab';
import { Container } from './Container';

export const Main = () => {
  return (
    <Container margin="0" padding="0">
      <Stack textAlign={'center'} align={'center'} spacing={{ base: 8, md: 10 }} py={{ base: 0, md: 0 }}>
        <Carousel />
        <Stack spacing={6} direction={'row'}>
          <CustomTab />
        </Stack>
        <Flex w={'full'}></Flex>
      </Stack>
    </Container>
  );
};

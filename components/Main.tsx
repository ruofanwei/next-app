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

export interface dataType {
  label: string;
  content: string;
}

export const Main = () => {
  const data = [
    {
      label: '精選主題',
      content: 'Perhaps the greatest dish ever invented.',
    },
    {
      label: '熱門營地',
      content: 'Perhaps the greatest dish ever invented.',
    },
    {
      label: '最新上架',
      content: 'Perhaps the greatest dish ever invented.',
    },
  ];
  return (
    <Container margin="0" padding="0">
      <Stack textAlign={'center'} align={'center'} spacing={{ base: 8, md: 10 }}>
        <Carousel />
        <Stack spacing={6} direction={'row'} mt={{ base: 10, md: 0 }}>
          <CustomTab>{data}</CustomTab>
        </Stack>
      </Stack>
    </Container>
  );
};

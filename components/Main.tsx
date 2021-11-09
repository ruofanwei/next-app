import * as React from 'react';
import {
  Flex,
  Container,
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
const ProductImage = chakra(NextImage, {
  baseStyle: { maxH: 120, maxW: 120 },
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
});

export interface CarouselProps {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
  repoId: number;
}

export const Main: React.FC<CarouselProps> = () => {
  const [[page, direction], setPage] = React.useState([0, 0]);
  const [imageIndex, setImageIndex] = React.useState<number>(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const repoId = 1;
  React.useEffect(() => {
    setImageIndex(repoId);
  }, [repoId]);

  return (
    <Container maxW={'5xl'}>
      <Stack textAlign={'center'} align={'center'} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
        <motion.div whileHover={{ y: -10 }}>
          <Carousel />
        </motion.div>
        <Stack spacing={6} direction={'row'}>
          <Button rounded={'full'} px={6} colorScheme={'orange'} bg={'orange.400'} _hover={{ bg: 'orange.500' }}>
            Get started
          </Button>
          <Button rounded={'full'} px={6}>
            Learn more
          </Button>
        </Stack>
        <Flex w={'full'}></Flex>
      </Stack>
    </Container>
  );
};

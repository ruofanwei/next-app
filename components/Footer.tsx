import { ReactNode } from 'react';
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  FlexProps,
} from '@chakra-ui/react';

export const Footer = (props: FlexProps) => <Flex as="footer" py="8rem" {...props} />;

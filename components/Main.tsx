import { Flex, Container, Heading, Stack, Text, Button, Icon, IconProps, Box, chakra } from '@chakra-ui/react';
import NextImage, { ImageProps, ImageLoaderProps } from 'next/image';
import mountains from '../public/1.jpg';

const ProductImage = chakra(NextImage, {
  baseStyle: { maxH: 120, maxW: 120 },
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
});

export const Main = () => {
  return (
    <Container maxW={'5xl'}>
      <Stack textAlign={'center'} align={'center'} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
        <Heading fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }} lineHeight={'110%'}>
          demo{' '}
          <Text as={'span'} color={'orange.400'}>
            sample
          </Text>
        </Heading>

        <ProductImage src={mountains} w="auto" h="auto" borderWidth={5} borderStyle="solid" />

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

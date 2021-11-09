import React from 'react';
import {
  chakra,
  Box,
  Image,
  Text,
  HStack,
  Flex,
  useColorModeValue,
  SimpleGrid,
  Link,
  Grid,
  GridItem,
  Spacer,
} from '@chakra-ui/react';
import NextImage from 'next/image';

const CardImage = chakra(NextImage, {
  baseStyle: { maxH: 120, maxW: 120 },
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
});
const photos = [
  {
    img: 'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    img: 'https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    img: 'https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  },
  {
    img: 'https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    img: 'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    img: 'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    img: 'https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    img: 'https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    img: 'https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    img: 'https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    img: 'https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    img: 'https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    img: 'https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    img: 'https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    img: 'https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
];
export const PhotoCard = () => {
  return (
    <Box w="full" h="full">
      <Grid
        gridTemplateRows="minmax(150px, 1fr)"
        gridAutoFlow="column"
        gridAutoColumn="minmax(160px,1fr)"
        gridTemplateColumns="repeat(6, calc(50% - 40px))"
        overflowX="scroll"
        overflowY="hidden"
        gridGap="4"
      >
        {photos.map((photo, sid) => (
          <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
            <CardImage src={photo.img} boxSize="full" backgroundSize="cover" width={'760'} height={'400'} />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

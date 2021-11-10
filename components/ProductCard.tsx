import React from 'react';
import { Box, Flex, Image, Badge, useColorModeValue, chakra, Grid } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { GridResponsive } from './layout/GridResponsive';
import NextImage from 'next/image';
const CardImage = chakra(NextImage, {
  baseStyle: { maxH: 120, maxW: 120 },
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
});
export const ProductCard = () => {
  const propertys = [
    {
      imageUrl:
        'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      imageAlt: 'Rear view of modern home with pool',
      local: 'taiwan',
      country: 'taipei',
      title: '四季露營',
    },
    {
      imageUrl:
        'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      imageAlt: 'Rear view of modern home with pool',
      local: 'taiwan',
      country: 'taipei',
      title: '四季露營',
    },
    {
      imageUrl:
        'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      imageAlt: 'Rear view of modern home with pool',
      local: 'taiwan',
      country: 'taipei',
      title: '四季露營',
    },
    {
      imageUrl:
        'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      imageAlt: 'Rear view of modern home with pool',
      local: 'taiwan',
      country: 'taipei',
      title: '四季露營',
    },
    {
      imageUrl:
        'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      imageAlt: 'Rear view of modern home with pool',
      local: 'taiwan',
      country: 'taipei',
      title: '四季露營',
    },
    {
      imageUrl:
        'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      imageAlt: 'Rear view of modern home with pool',
      local: 'taiwan',
      country: 'taipei',
      title: '四季露營',
    },
    {
      imageUrl:
        'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      imageAlt: 'Rear view of modern home with pool',
      local: 'taiwan',
      country: 'taipei',
      title: '四季露營',
    },
    {
      imageUrl:
        'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      imageAlt: 'Rear view of modern home with pool',
      local: 'taiwan',
      country: 'taipei',
      title: '四季露營',
    },
    {
      imageUrl:
        'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      imageAlt: 'Rear view of modern home with pool',
      local: 'taiwan',
      country: 'taipei',
      title: '四季露營',
    },
    {
      imageUrl:
        'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      imageAlt: 'Rear view of modern home with pool',
      local: 'taiwan',
      country: 'taipei',
      title: '四季露營',
    },
    {
      imageUrl:
        'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      imageAlt: 'Rear view of modern home with pool',
      local: 'taiwan',
      country: 'taipei',
      title: '四季露營',
    },
    {
      imageUrl:
        'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      imageAlt: 'Rear view of modern home with pool',
      local: 'taiwan',
      country: 'taipei',
      title: '四季露營',
    },
  ];
  return (
    <GridResponsive>
      {propertys.map((property, sid) => (
        <Box key={`slide-${sid}`} flex="none" boxSize="fit-content" shadow="md" rounded="lg">
          <CardImage
            src={property.imageUrl}
            boxSize="fit-content"
            roundedTop="lg"
            backgroundSize="cover"
            width={'430'}
            height={'282'}
            objectFit="cover"
          />
          <Box as="p" color="gray.500" fontWeight="semibold" fontSize="xs" textTransform="uppercase">
            {property.local} &bull; {property.country}
          </Box>
          <Box as="p" fontWeight="semibold" color="gray.500" fontSize="sm" p="1">
            {property.title}
          </Box>
        </Box>
      ))}
    </GridResponsive>
  );
};

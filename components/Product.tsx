import React from 'react';
import { Box, chakra } from '@chakra-ui/react';

import NextImage from 'next/image';
const CardImage = chakra(NextImage, {
  baseStyle: { maxH: 120, maxW: 120 },
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
});

interface Props {
  imageUrl: string;
  imageAlt: string;
  local: string;
  country: string;
  title: string;
}

export const Product = ({ imageAlt, imageUrl, local, country, title }: Props) => {
  return (
    <Box flex="none" boxSize="fit-content" shadow="md" rounded="lg">
      <CardImage
        alt={imageAlt}
        src={imageUrl}
        boxSize="fit-content"
        roundedTop="lg"
        backgroundSize="cover"
        width={'430'}
        height={'282'}
        objectFit="cover"
      />
      <Box as="p" color="gray.500" fontWeight="semibold" fontSize="xs" textTransform="uppercase">
        {local} &bull; {country}
      </Box>
      <Box as="p" fontWeight="semibold" color="gray.500" fontSize="sm" p="1">
        {title}
      </Box>
    </Box>
  );
};

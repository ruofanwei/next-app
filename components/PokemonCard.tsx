import { Box, Heading, Avatar, Center, Image, Flex, Text, Stack, Button, useColorModeValue } from '@chakra-ui/react';

interface PokemonCardProps {
  name: string;
  image: string;
  weight: number;
  xp: number;
  abilities: string[];
}

const PokemonCard = ({ name, image, weight, abilities, xp }: PokemonCardProps) => {
  return (
    <Center py={6}>
      <Box
        maxW={'270px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
      >
        <Image h={'300px'} w={'full'} src={image} alt={name} objectFit={'cover'} />
        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              {name}
            </Heading>
            <Text color={'gray.500'}>{xp}</Text>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
};
export default PokemonCard;

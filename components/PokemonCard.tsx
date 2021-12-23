import { Box, SimpleGrid } from '@chakra-ui/react';

interface PokemonCardProps {
  name: string;
  image: string;
  weight: number;
  xp: number;
  abilities: string[];
}

const PokemonCard = ({ name, image, weight, abilities, xp }: PokemonCardProps) => {
  return <Box>{name}</Box>;
};
export default PokemonCard;

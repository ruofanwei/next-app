import Link from 'next/link';
import { Box, SimpleGrid } from '@chakra-ui/react';

const ProductSearchResult = ({ pokemons }: { pokemons: string[] }) => {
  return pokemons.length > 0 ? (
    <SimpleGrid columns={2} spacing={10}>
      {pokemons.map((pokemon) => (
        <Link href={`/pokemon/${pokemon}`} key={pokemon}>
          <a>
            <Box className="pokemon-card">{pokemon}</Box>
          </a>
        </Link>
      ))}
    </SimpleGrid>
  ) : (
    <Box>No found</Box>
  );
};
export default ProductSearchResult;

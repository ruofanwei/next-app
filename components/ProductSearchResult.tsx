import Link from 'next/link';
import { Box, SimpleGrid } from '@chakra-ui/react';

const ProductSearchResult = ({ products }: { products: string[] }) => {
  return products.length > 0 ? (
    <SimpleGrid spacing={10}>
      {products.map((product) => (
        <Link href={`/products/${product}`} key={product}>
          <a>
            <Box className="product-card">{product}</Box>
          </a>
        </Link>
      ))}
    </SimpleGrid>
  ) : (
    <Box>No found</Box>
  );
};
export default ProductSearchResult;

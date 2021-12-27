import Link from 'next/link';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { Product } from './Product';
const imageUrl =
  'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
const ProductSearchResult = ({ products }: { products: string[] }) => {
  return products.length > 0 ? (
    <SimpleGrid spacing={10}>
      {products.map((product) => (
        <Link href={`/products/${product}`} key={product}>
          <a>
            <Product imageAlt={product} imageUrl={imageUrl} local={product} country={product} title={product} />
          </a>
        </Link>
      ))}
    </SimpleGrid>
  ) : (
    <Box>No found</Box>
  );
};
export default ProductSearchResult;

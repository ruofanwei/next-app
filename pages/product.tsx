import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Container, Box, Input } from '@chakra-ui/react';

import searchProduct from '../lib/searchProduct';
import useDebounce from '../hooks/useDebounce';
import ProductSearchResult from '../components/ProductSearchResult';

export default function Product() {
  const [searchValue, setSearchValue] = useState('');
  const debounceSearchValue = useDebounce(searchValue, 300);

  const { isLoading, isError, isSuccess, data } = useQuery(
    ['searchProducts', debounceSearchValue],
    () => searchProduct(debounceSearchValue),
    {
      enabled: debounceSearchValue.length > 0,
    }
  );

  const renderResult = () => {
    if (isLoading) {
      return <Box>Loading ...</Box>;
    }

    if (isError) {
      return <Box>Not Found ...</Box>;
    }

    if (isSuccess && data !== undefined) {
      return <ProductSearchResult products={data} />;
    }

    return <></>;
  };

  return (
    <Container>
      <Input
        placeholder="search !"
        type="text"
        onChange={({ target: { value } }) => setSearchValue(value)}
        value={searchValue}
      />
      {renderResult()}
    </Container>
  );
}

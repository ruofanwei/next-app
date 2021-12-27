import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Box, Input, HStack, InputGroup, Button, ButtonGroup, useDisclosure } from '@chakra-ui/react';
import Search from '../components/Search';
import Layout from '../components/layout/Layout';
import searchProduct from '../lib/searchProduct';
import useDebounce from '../hooks/useDebounce';
import ProductSearchResult from '../components/ProductSearchResult';
import FilterSearch from '../components/FilterSearch';
import Filter from '../public/svg/filter.svg';

export default function Product() {
  const [searchValue, setSearchValue] = useState('');
  const debounceSearchValue = useDebounce(searchValue, 300);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

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
    <Layout>
      <HStack bg={'brandGreen.100'}>
        <Search
          placeholder="關鍵字"
          type="text"
          onChange={({ target: { value } }) => setSearchValue(value)}
          value={searchValue}
        />
        <Button leftIcon={<Filter />} colorScheme="brandBlue" onClick={onOpen}>
          篩選條件
        </Button>
        <FilterSearch isOpen={isOpen} onClose={onClose} />
      </HStack>
      {isSuccess && <Box>顯示資料共 {data.length - 1} 筆</Box>}

      {renderResult()}
    </Layout>
  );
}

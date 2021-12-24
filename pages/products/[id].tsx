import React from 'react';
import axios from 'axios';
import type { GetStaticProps, GetStaticPaths } from 'next';
import { useQuery, QueryClient, dehydrate } from 'react-query';
import { useRouter } from 'next/router';
import { Container, Box, Input } from '@chakra-ui/react';
import PokemonCard from '../../components/PokemonCard';

const fetchProduct = (id: string) => axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(({ data }) => data);

export default function Product() {
  const router = useRouter();
  const productId = typeof router.query?.id === 'string' ? router.query.id : '';

  const { isSuccess, data, isLoading, isError } = useQuery(['getProduct', productId], () => fetchProduct(productId), {
    enabled: productId.length > 0,
    staleTime: Infinity,
  });

  if (isSuccess) {
    return (
      <PokemonCard
        name={data.name}
        image={data.image}
        weight={data.weight}
        abilities={data.abilities}
        xp={data.base_experience}
      />
    );
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['getProduct', id], () => fetchProduct(id), {});
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

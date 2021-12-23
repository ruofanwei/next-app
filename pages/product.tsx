import React from 'react';
import { useQuery } from 'react-query';
import { Container, Box, Input } from '@chakra-ui/react';

export default function Product() {
  return (
    <Container>
      <Input placeholder="search !" />
    </Container>
  );
}

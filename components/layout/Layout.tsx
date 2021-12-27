import React, { ReactNode } from 'react';
import { Container } from '../Container';
import { Header } from '../Header/index';
import { Footer } from '../Footer';
type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Container overflow="hidden" m="0" p="0">
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;

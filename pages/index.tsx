import type { NextPage } from 'next';

import { Container } from '../components/Container';
import { Header } from '../components/Header/index';
import { Footer } from '../components/Footer';
import { Main } from '../components/Main';

const Home: NextPage = () => {
  return (
    <Container overflow="hidden" m="0" p="0">
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};

export default Home;

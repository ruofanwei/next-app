import type { NextPage } from 'next';

import { Container } from '../components/Container';
import { Header } from '../components/Header/index';
import { Footer } from '../components/Footer';
import { Main } from '../components/Main';
const Home: NextPage = () => {
  return (
    <Container height="100vh">
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};

export default Home;

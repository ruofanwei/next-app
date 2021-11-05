import type { NextPage } from 'next';

import { Container } from '../components/Container';
import { Header } from '../components/Header/index';
import { Footer } from '../components/Footer';
const Home: NextPage = () => {
  return (
    <Container height="100vh">
      <Header />
      <Footer />
    </Container>
  );
};

export default Home;

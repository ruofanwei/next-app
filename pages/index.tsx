import type { NextPage } from 'next';
import React from 'react';
import Layout from '../components/layout/Layout';

import { Main } from '../components/Main';

const Home: NextPage = () => {
  return (
    <Layout>
      <Main />
    </Layout>
  );
};

export default Home;

import React from 'react';
import 'tailwindcss/tailwind.css';

import 'focus-visible/dist/focus-visible';
import '../components/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../chakra/theme';
import type { AppProps } from 'next/app';
import { getToken } from 'next-auth/jwt';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;

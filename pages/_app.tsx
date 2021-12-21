import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import 'tailwindcss/tailwind.css';
import 'focus-visible/dist/focus-visible';
import '../components/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../chakra/theme';
import type { AppProps } from 'next/app';
import { getToken } from 'next-auth/jwt';
import English from '../content/compiled-locales/en.json';
import Chinese from '../content/compiled-locales/zh.json';
import Japanese from '../content/compiled-locales/ja.json';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  // use the useRouter()hook to access the current locale of the user
  const { locale } = useRouter();
  const [currentLocale] = locale ? locale.split('_') : ['zh'];

  const messages = useMemo(() => {
    switch (currentLocale) {
      case 'en':
        return English;
      case 'ja':
        return Japanese;
      case 'zh':
        return Chinese;
      default:
        return Chinese;
    }
  }, [currentLocale]);

  return (
    <SessionProvider session={session}>
      <IntlProvider locale={currentLocale} messages={messages} onError={() => null}>
        <ChakraProvider resetCSS theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </IntlProvider>
    </SessionProvider>
  );
}

export default MyApp;

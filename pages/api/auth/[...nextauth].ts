import NextAuth from 'next-auth';
import type { NextApiRequest, NextApiResponse } from 'next';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import LineProvider from 'next-auth/providers/line';

const GOOGLE_AUTHORIZATION_URL =
  'https://accounts.google.com/o/oauth2/v2/auth?' +
  new URLSearchParams({
    prompt: 'consent',
    access_type: 'offline',
    response_type: 'code',
  });
export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  const providers = [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: GOOGLE_AUTHORIZATION_URL,
    }),
    LineProvider({
      clientId: process.env.LINE_CHANNEL_ID,
      clientSecret: process.env.LINE_CHANNEL_SECRET,
    }),
  ];

  return await NextAuth(req, res, {
    providers,
    secret: process.env.SECRET,
    jwt: {
      secret: process.env.SECRET,
    },
    session: {
      // This is the default. The session is saved in a cookie and never persisted anywhere.
      strategy: 'jwt',
    },
    // Enable debug messages in the console if you are having problems
    debug: true,

    pages: {
      signIn: '/auth/signin',
      error: '/auth/signin',
      newUser: '/auth/new-user',
    },

    // theme: {
    //   colorScheme: 'auto', // "auto" | "dark" | "light"
    //   brandColor: '#67b246', // Hex color value
    //   logo: 'https://i.imgur.com/8f8x4Cl.png',
    // },

    callbacks: {
      redirect({ url, baseUrl }) {
        if (url.startsWith(baseUrl)) return url;
        // Allows relative callback URLs
        else if (url.startsWith('/')) return new URL(url, baseUrl).toString();
        return baseUrl;
      },
      async signIn({ user, account, profile, email, credentials }) {
        if (account.provider === 'google') {
          return profile.email_verified;
        }
        return true;
      },
      async session({ session, token }) {
        // Send properties to the client, like an access_token from a provider.
        session.accessToken = token.accessToken;
        session.refreshToken = token.refreshToken;
        session.idToken = token.idToken;
        session.provider = token.provider;
        session.id = token.id;
        return session;
      },
      async jwt({ token, user, account }) {
        // Persist the OAuth access_token to the token right after signin
        if (account) {
          token.accessToken = account.access_token;
          token.refreshToken = account.refresh_token;
          token.idToken = account.id_token;
          token.provider = account.provider;
        }
        if (user) {
          token.id = user.id.toString();
        }
        return token;
      },
    },
  });
}

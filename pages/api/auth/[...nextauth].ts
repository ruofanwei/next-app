import NextAuth from 'next-auth';
import type { NextApiRequest, NextApiResponse } from 'next';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import LineProvider from 'next-auth/providers/line';

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  const providers = [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,

      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
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
    cookies: {
      sessionToken: {
        name: `next-auth.session-token`,
        options: {
          httpOnly: true,
          sameSite: 'none',
          path: '/',
          secure: true,
        },
      },
      callbackUrl: {
        name: `next-auth.callback-url`,
        options: {
          sameSite: 'none',
          path: '/',
          secure: true,
        },
      },
      csrfToken: {
        name: 'next-auth.csrf-token',
        options: {
          httpOnly: true,
          sameSite: 'none',
          path: '/',
          secure: true,
        },
      },
      pkceCodeVerifier: {
        name: 'next-auth.pkce.code_verifier',
        options: {
          httpOnly: true,
          sameSite: 'none',
          path: '/',
          secure: true,
        },
      },
    },
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

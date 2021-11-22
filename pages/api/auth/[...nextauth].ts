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
      client: {
        id_token_signed_response_alg: 'HS256', // --> add this
      },
    }),
  ];

  return await NextAuth(req, res, {
    providers,
    // Enable debug messages in the console if you are having problems
    debug: true,
  });
}

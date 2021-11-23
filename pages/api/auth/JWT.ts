import { getToken } from 'next-auth/jwt';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function JWT(req: NextApiRequest, res: NextApiResponse) {
  const secret = process.env.SECRET;
  const token = await getToken({ req, secret, raw: true });
  console.log('JSON Web Token', token);
  res.send(JSON.stringify(token, null, 2));
}

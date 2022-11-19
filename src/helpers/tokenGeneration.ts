import { public_Users } from '@prisma/client';
import * as jwt from 'jsonwebtoken';
import 'dotenv/config';

export default function generateToken(payload: Partial<public_Users>) {
  const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: '24h',
    algorithm: 'HS256',
  });

  return token;
}

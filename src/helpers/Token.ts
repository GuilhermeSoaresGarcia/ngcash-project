import { public_Users } from '@prisma/client';
import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import { Request, Response, NextFunction } from 'express';

export default class Token {
  static generateToken(payload: Partial<public_Users>) {
    const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: '24h',
      algorithm: 'HS256',
    });
    
    return token;
  }

  static validateToken = (req: Request, res: Response, next: NextFunction) => {
    const authorization = req.headers.authorization as string;
    if (!authorization) return res.status(401).json({ message: 'Token not found' });
    try {
      const user = jwt.verify(authorization, process.env.JWT_SECRET as string);
      req.body.user = user;
      next();
    } catch (err) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
  };
}

import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import { Request, Response, NextFunction } from 'express';

export default function validateToken(req: Request, res: Response, next: NextFunction) {
  const authorization = req.headers.authorization as string;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  try {
    const validationResult = jwt.verify(authorization, process.env.JWT_SECRET as string);
    
    req.body.tokenUser = validationResult;    

    if (req.body.id !== req.body.tokenUser.id &&
      req.body.accountId !== req.body.tokenUser.accountId) {
      throw new Error()
    }

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

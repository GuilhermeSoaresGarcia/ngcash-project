import * as accountServices from '../services/accountServices';
import { Response, Request } from 'express';
import IUserAndAccount from '../interfaces/IUserAndAccount';
import IBalance from '../interfaces/IBalance';

async function getBalance(req: Request, res: Response) {
  const data = req.body as IUserAndAccount
  const result = await accountServices.getBalance(data as IBalance);
  return res.status(200).json(result);
}

export { getBalance };
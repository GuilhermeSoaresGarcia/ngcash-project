import * as accountServices from '../services/accountServices';
import { Response, Request } from 'express';

async function getBalance(req: Request, res: Response) {
  const data = req.body;
  const result = await accountServices.getBalance(data);
  return res.status(200).json(result);
}

export { getBalance };
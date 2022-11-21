import * as transactionServices from '../services/transactionServices';
import { Response, Request } from 'express';

async function cashOut(req: Request, res: Response) {
  const data = req.body;
  const result = await transactionServices.cashOut(data);
  return res.status(200).json(result);
}

export { cashOut };
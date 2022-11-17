import * as userServices from '../services/userServices';
import { Response, Request } from 'express';

async function newUser(req: Request, res: Response) {
  const data = req.body
  const result = await userServices.newUser(data);
  return res.status(201).json(result);
}

export { newUser };
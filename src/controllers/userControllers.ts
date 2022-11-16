import * as userControllers from '../services/userServices';
import { Response, Request } from 'express';

async function newUser(req: Request, res: Response) {
  const data = req.body
  const result = await userControllers.newUser(data);
  return res.status(201).json(result);
}

export { newUser };
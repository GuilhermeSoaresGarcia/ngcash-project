import * as loginServices from '../services/loginServices';
import { Response, Request } from 'express';

async function login(req: Request, res: Response) {
  const data = req.body
  const result = await loginServices.login(data);
  return res.status(200).json(result);
}

export { login };
import { Router } from 'express';
import * as accountControllers from '../controllers/accountControllers';
import validateToken from '../middlewares/tokenValidation';

const routes = Router();

routes.get('/account/balance', validateToken, accountControllers.getBalance);

export default routes;
import { Router } from 'express';
import * as transactionControllers from '../controllers/transactionControllers';
import validateToken from '../middlewares/tokenValidation';

const routes = Router();

routes.patch('/transaction/cashout', validateToken, transactionControllers.cashOut);

export default routes;
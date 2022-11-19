import { Router } from 'express';
import * as loginControllers from '../controllers/loginControllers';

const routes = Router();

routes.post('/login', loginControllers.login);

export default routes;
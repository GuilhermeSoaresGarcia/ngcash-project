import { Router } from 'express';
import * as userControllers from '../controllers/userControllers';

const routes = Router();

routes.post('/users', userControllers.newUser);

export default routes;
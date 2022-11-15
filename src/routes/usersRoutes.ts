import { Router } from 'express';
import * as usersControllers from '../controllers/userControllers';

const routes = Router();

routes.post('/users', usersControllers.newUser);

export default routes;
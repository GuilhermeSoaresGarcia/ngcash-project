import express from 'express';
import usersRoutes from './routes/usersRoutes';

const app = express();

app.use(express.json());

app.use(usersRoutes);

export default app;
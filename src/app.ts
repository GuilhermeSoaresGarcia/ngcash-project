import express from 'express';
import 'express-async-errors';
import errorMiddleware from './middlewares/errors';
import userRoutes from './routes/userRoutes';

const app = express();

app.use(express.json());

app.use(userRoutes);

app.use(errorMiddleware);

export default app;
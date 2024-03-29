import express from 'express';
import 'express-async-errors';
import errorMiddleware from './middlewares/errors';
import userRoutes from './routes/userRoutes';
import loginRoutes from './routes/loginRoutes';
import accountRoutes from './routes/accountRoutes';
import transactionRoutes from './routes/transactionRoutes';

const app = express();

app.use(express.json());

app.use(userRoutes);
app.use(loginRoutes);
app.use(accountRoutes);
app.use(transactionRoutes);

app.use(errorMiddleware);

export default app;
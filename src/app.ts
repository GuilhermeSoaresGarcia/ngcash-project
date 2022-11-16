import express from 'express';
import userRoutes from './routes/userRoutes';
// import errorMiddleware from './middlewares/errors';

const app = express();

app.use(express.json());

app.use(userRoutes);

// app.use(errorMiddleware);

export default app;
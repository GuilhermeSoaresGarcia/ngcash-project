import * as dotenv from 'dotenv'

dotenv.config()

import app from './app';

const PORT = process.env.API_PORT;

const server = app.listen(PORT, () => console.log(
  `Running on PORT: ${PORT}`,
));

export default server;
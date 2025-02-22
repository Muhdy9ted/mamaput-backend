import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;


app.use(express.json());


app.listen(PORT, () => {});
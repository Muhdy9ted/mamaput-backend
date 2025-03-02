import dotenv from 'dotenv';
dotenv.config();
import express from 'express';


const app = express();
const PORT = Number(process.env.PORT) || 3000;


app.use(express.json());


app.listen(PORT, () => {});
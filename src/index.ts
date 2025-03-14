/* eslint-disable indent */
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';

const app = express();
const mongooseURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mamaputDB';
mongoose.connect(mongooseURI).then(() => {
    console.log('Connected to MongoDB');
}).catch((e: Error) => {
    console.error('Error connecting to MongoDB: ', e.message);
});

// eslint-disable-next-line no-undef
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
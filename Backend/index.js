import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

import 'dotenv/config';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// db connection
connectDB();

// router api's

app.use('/api/food', foodRouter);
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
app.use('/images', express.static('uploads'));

app.listen(process.env.PORT || 3000, () => {
  console.log('server started');
});

//   mongodb+srv://asiaahmadali:asiaahmadali786@cluster0.aa0qs.mongodb.net/?

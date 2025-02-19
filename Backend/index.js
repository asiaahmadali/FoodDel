import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

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

// Fix for __dirname in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// static files
//app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(cors());
// cors error resolve
app.use(
  cors({
    origin: ['https://quick-bite-frontendside.vercel.app'],
    methods: ['POST', 'GET'],
    credentials: true,
  })
);

// db connection
connectDB();

// router api's
app.use('/api/food', foodRouter);
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
app.use('/images', express.static('uploads'));

app.get('/', (req, res) => {
  res.send('welcome to quickbite');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('server started');
});

//   mongodb+srv://asiaahmadali:asiaahmadali786@cluster0.aa0qs.mongodb.net/?

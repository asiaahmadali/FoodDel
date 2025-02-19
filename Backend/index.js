import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

// Fix for __dirname in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ✅ Global CORS Middleware
app.use(
  cors({
    origin: ['https://quick-bite-frontendside.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

// ✅ Preflight Request Handling (Important for CORS)
app.options('*', cors());

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Serve Static Files (Check Vercel storage limitations)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ Database Connection with Error Handling
connectDB().catch((err) => {
  console.error('Database connection failed:', err);
  process.exit(1);
});

// ✅ Routes
app.use('/api/food', foodRouter);
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
app.use('/images', express.static('uploads'));

// ✅ Root Route
app.get('/', (req, res) => {
  res.send('Welcome to QuickBite API');
});

// ✅ Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

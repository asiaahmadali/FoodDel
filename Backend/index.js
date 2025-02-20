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

// ✅ Step 1: Apply CORS Middleware (Always Set Headers)
app.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Origin',
    'https://quick-bite-frontendside.vercel.app'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');

  next();
});
// token headers
app.use(
  cors({
    allowedHeaders: ['Content-Type', 'Authorization', 'token'],
  })
);

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

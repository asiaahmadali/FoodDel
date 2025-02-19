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

// ✅ Load Environment Variables
dotenv.config();

// ✅ Fix for __dirname in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ✅ Initialize Express App
const app = express();

// ✅ Database Connection with Error Handling
connectDB()
  .then(() => console.log('✅ Database Connected Successfully'))
  .catch((err) => {
    console.error('❌ Database Connection Failed:', err);
    process.exit(1); // Exit on failure
  });

// ✅ Use CORS Middleware for Security & Flexibility
const allowedOrigins = ['https://quick-bite-frontendside.vercel.app']; // ✅ Define Allowed Origins

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('❌ CORS Not Allowed'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'token'], // ✅ Ensure 'token' is allowed
    credentials: true,
  })
);

// ✅ Parse JSON & Form Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Serve Static Files (Consider using a CDN or Cloud Storage)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ Routes
app.use('/api/food', foodRouter);
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

// ✅ Root Route
app.get('/', (req, res) => {
  res.send('🚀 Welcome to QuickBite API');
});

// ✅ Handle 404 Errors
app.use((req, res, next) => {
  res.status(404).json({ error: '❌ Route Not Found' });
});

// ✅ Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('🔥 Global Error:', err.stack);
  res.status(500).json({ error: '❌ Internal Server Error' });
});

// ✅ Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

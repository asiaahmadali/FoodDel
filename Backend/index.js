import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// db connection
connectDB();

app.get('/', (req, res) => {
  res.send('api working');
});

app.listen(3000, () => {
  console.log('server started');
});

//   mongodb+srv://asiaahmadali:asiaahmadali786@cluster0.aa0qs.mongodb.net/?

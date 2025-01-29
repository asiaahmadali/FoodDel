import mongoose from 'mongoose';

export const connectDB = async () => {
  await mongoose
    .connect(
      'mongodb+srv://asiaahmadali:asiaahmadali786@cluster0.aa0qs.mongodb.net/Zestify'
    )
    .then(() => {
      console.log('db connected');
    })
    .catch(() => {
      console.log('db not connected');
    });
};

// mongodb+srv://asiaahmadali:asiaahmadali786@cluster0.aa0qs.mongodb.net/Zestify

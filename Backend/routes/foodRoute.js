import express from 'express';
const foodRouter = express.Router();
import addFood from '../controlers/foodController.js';
import multer from 'multer';

foodRouter.post('/add', (req, res) => {
  addFood();
});

export default foodRouter;

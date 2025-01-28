import express from 'express';
const foodRouter = express.Router();
import addFood from '../controlers/foodController.js';
import multer from 'multer';

export default foodRouter;

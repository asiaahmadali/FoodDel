import express from 'express';
const foodRouter = express.Router();
import addFood from '../controlers/foodController.js';
import multer from 'multer';

// multer

const storage = multer.diskStorage({
  destination: 'uploads',
  filename: (rreq, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const uploads = multer({ storage: storage });

foodRouter.post('/add', uploads.single('image'), (req, res) => {
  addFood();
});

export default foodRouter;

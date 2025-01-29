import express from 'express';
const foodRouter = express.Router();
import addFood from '../controlers/foodController.js';
import multer from 'multer';

// multer

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },

  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

foodRouter.post('/add', upload.single('image'), addFood);

export default foodRouter;

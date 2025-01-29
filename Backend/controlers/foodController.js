import foodModel from '../models/foodmodel.js';
import fs from 'fs';

// add food

const addFood = async (req, res) => {
  let image = `${req.file.filename}`;
  const { name, description, price, category } = req.body;
  const addedfood = await foodModel.create({
    name,
    description,
    price,
    image,
    category,
  });
};

export default addFood;

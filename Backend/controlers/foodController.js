import foodModel from '../models/foodmodel.js';

// add food
const addFood = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    const image = req.file.filename;

    // Create and save food item
    const addedFood = await foodModel.create({
      name,
      description,
      price,
      image,
      category,
    });
    await addedFood.save();

    res.json({ success: true, message: 'Food added successfully' });
  } catch (error) {
    console.error('Error adding food:', error);
    res
      .status(500)
      .json({ success: false, message: 'Server error. Please try again.' });
  }
};

export default addFood;

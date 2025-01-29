import foodModel from '../models/foodmodel.js';

// add food
const addFood = async (req, res) => {
  try {
    console.log('Request Body:', req.body); // Log the form fields
    console.log('Uploaded File:', req.file); // Log the uploaded file
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

    console.log(req.body, 'foodissss', addedFood);

    res.json({ success: true, message: 'Food added successfully' });
  } catch (error) {
    console.error('Error adding food:', error);
    res.json({ success: false, message: 'Server error. Please try again.' });
  }
};

// display all food list

const listFood = async (req, res) => {
  try {
    const allList = await foodModel.find({});
    res.json({ success: true, data: allList });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'error' });
  }
};

export { addFood, listFood };

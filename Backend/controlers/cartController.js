import userModel from '../models/usermodel.js';

// add product to cart
const addCart = async (req, res) => {
  try {
    const userData = await userModel.findOne({ _id: req.body.userId });
    let cartData = await userData.cartData;
    if (!cartData[req.body.itemId]) {
    }
  } catch (error) {}
};

// remove product from cart
const deleteFromCart = async (req, res) => {};

// get cart data
const getCartData = async (req, res) => {};

export { addCart, deleteFromCart, getCartData };

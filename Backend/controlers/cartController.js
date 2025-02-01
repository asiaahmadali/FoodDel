import userModel from '../models/usermodel.js';

// add product to cart
const addCart = async (req, res) => {
  try {
    const userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    if (!cartData[req.body.itemid]) {
      cartData[req.body.itemid] = 1;
    } else {
      cartData[req.body.itemid] += 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: 'data added to cart' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'cannot add to cart' });
  }
};

// remove product from cart
const deleteFromCart = async (req, res) => {
  try {
    const userAllData = await userModel.findById(req.body.userId);
    // extract dcartdata from it
    let cartData = await userAllData.cartData;
    if (cartData[req.body.itemid] > 0) {
      cartData[req.body.itemid] -= 1;
    }
    // update cart data
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: 'deleted from cart' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'cannot delete' });
  }
};

// get cart data
const getCartData = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'no cart items' });
  }
};

export { addCart, deleteFromCart, getCartData };

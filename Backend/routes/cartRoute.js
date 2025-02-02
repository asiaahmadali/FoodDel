import express from 'express';
const cartRouter = express.Router();
import isLogedIn from '../middlewares/auth.js';
import {
  addCart,
  deleteFromCart,
  getCartData,
} from '../controlers/cartController.js';

cartRouter.post('/add', isLogedIn, addCart);
cartRouter.post('/getcart', isLogedIn, getCartData);
cartRouter.post('/delete', isLogedIn, deleteFromCart);

export default cartRouter;

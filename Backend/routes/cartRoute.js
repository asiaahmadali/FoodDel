import express from 'express';
const cartRouter = express.Router();
import isLogedIn from '../middlewares/auth';
import {
  addCart,
  deleteFromCart,
  getCartData,
} from '../controlers/cartController';

cartRouter.post('/add', isLogedIn, addCart);
cartRouter.get('/getcart', isLogedIn, getCartData);
cartRouter.post('/delete', isLogedIn, deleteFromCart);

export default cartRouter;

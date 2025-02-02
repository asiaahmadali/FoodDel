import express from 'express';
import {
  placeOrder,
  userOrders,
  verifyOrder,
} from '../controlers/orderController.js';
import isLogedIn from '../middlewares/auth.js';

const orderRouter = express.Router();

orderRouter.post('/placeorder', isLogedIn, placeOrder);
orderRouter.post('/verify', verifyOrder);
orderRouter.post('/userorders', isLogedIn, userOrders);
export default orderRouter;

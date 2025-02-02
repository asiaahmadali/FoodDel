import express from 'express';
import {
  listOrders,
  placeOrder,
  updateOrderStatus,
  userOrders,
  verifyOrder,
} from '../controlers/orderController.js';
import isLogedIn from '../middlewares/auth.js';

const orderRouter = express.Router();

orderRouter.post('/placeorder', isLogedIn, placeOrder);
orderRouter.post('/verify', verifyOrder);
orderRouter.post('/userorders', isLogedIn, userOrders);
orderRouter.get('/listorders', listOrders);
orderRouter.post('/updatestatus', updateOrderStatus);

export default orderRouter;

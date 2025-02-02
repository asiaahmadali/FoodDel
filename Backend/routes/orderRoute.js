import express from 'express';
import placeOrder from '../controlers/orderController.js';
import isLogedIn from '../middlewares/auth.js';

const orderRouter = express.Router();

orderRouter.post('/placeorder', isLogedIn, placeOrder);

export default orderRouter;

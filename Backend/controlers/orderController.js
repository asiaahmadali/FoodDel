import orderModel from '../models/orderModel.js';
import userModel from '../models/usermodel.js';
import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const placeOrder = async (req, res) => {
  const { userId, items, amount, address } = req.body;
  try {
    const Order = await orderModel.create({
      userId,
      items,
      amount,
      address,
    });
    // cleaning user cart data
    await userModel.findByIdAndUpdate(userId, { cartData: {} });
    // create stripe payment link
    const line_items = items.map((item) => ({
      price_data: {
        currency: 'USD',
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: 'USD',
        product_data: {
          name: 'Delivery Charges',
        },
        unit_amount: 10 * 100,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: 'payment',
      success_url: `http://localhost:5173/verify?success=true&orderId=${Order._id}`,
      cancel_url: `http://localhost:5173/verify?success=false&orderId=${Order._id}`,
    });

    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'error' });
  }
};

export default placeOrder;

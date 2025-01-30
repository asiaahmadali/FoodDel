import express from 'express';
import { Login, SignUp } from '../controlers/userController.js';

const userRouter = express.Router();

// routers
userRouter.post('/login', Login);
userRouter.post('/signup', SignUp);

export default userRouter;

import userModel from '../models/usermodel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator';

// login user
const Login = async () => {};

// Signup
const SignUp = async () => {
  const { name, email, password } = req.body;
  try {
    // if user already with same email
    const isuseralready = await userModel.findOne({ email });
    if (isuseralready) {
      return res.json({ success: false, message: 'user already exist' });
    }

    // validating  email foramtting
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: 'please enter valid email' });
    }

    // validating  password strength
    if (password.length < 8) {
      return res.json({ success: false, message: 'enter strong password' });
    }

    // password encryption
    const salt = await bcrypt.salt(12);
    const encPassword = await bcrypt.hash(password, salt);
  } catch (error) {}
};

export { Login, SignUp };

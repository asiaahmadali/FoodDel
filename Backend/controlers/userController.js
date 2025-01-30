import userModel from '../models/usermodel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator';

// login user
const Login = async (req, res) => {};

const TokenGenerate = (id) => {
  jwt.sign({ id }, process.env.SECRET_KEY);
};

// Signup
const SignUp = async (req, res) => {
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
    const salt = await bcrypt.genSalt(12);
    const encPassword = await bcrypt.hash(password, salt);

    // create user
    const createdUser = await userModel.create({
      name,
      email,
      password: encPassword,
    });

    // save user in database
    const user = await createdUser.save();
    // token
    const token = TokenGenerate(user._id);
    // send this token as response
    res.json({ success: true, token });
    //
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'error' });
  }
};

export { Login, SignUp };

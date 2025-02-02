import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const isLogedIn = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({
      success: false,
      message: 'not authentic user,login again',
    });
  }
  try {
    const decyptToken = jwt.verify(token, process.env.SECRET_KEY);
    req.body.userId = decyptToken.id;
    next();
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: 'error',
    });
  }
};

export default isLogedIn;

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.SECRET;

const AuthVerification = async (req, res, next) => {
  try {
    const token = await req.headers['x-access-token'];
    if (!token) {
      return res.status(403).json({
        success: false,
        message: 'No token provided',
      });
    }

    jwt.verify(token, secret, (error, decoded) => {
      if (error) {
        return res.status(500).send({
          success: false,
          message: 'Failed to authenticate token.',
        });
      }

      req.decoded = decoded;
      return next();
    });
  } catch (err) {
    throw err.message;
  }
};

export default AuthVerification;

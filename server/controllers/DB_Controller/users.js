import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from '../../../config/config';
import insertINTO from '../../quries/insertINTO.json';

dotenv.config();

const secret = process.env.SECRET;

class UserController {
  static async userSignup(req, res) {
    try {
      const {
        fullname,
        email,
        phoneNumber,
        password,
      } = req.body;

      // encrypt password
      const hashedPwd = bcrypt.hashSync(password, 8);
      if (!fullname || !email || !phoneNumber || !hashedPwd) {
        return res.status(400).json({
          status: 'error',
          message: 'Ensure you fill in all fields',
        });
      }

      const resp = await pool.query(insertINTO.usersignup, [fullname, email, phoneNumber, hashedPwd]);
      const token = jwt.sign({ id: resp.rows.id }, secret, { expiresIn: '24h' });
      return res.status(201).json({
        status: 'success',
        message: 'User was successfully created',
        resp: {
          fullname,
          email,
          phoneNumber,
          password,
        },
        token,
      });
    } catch (err) {
      throw err.stack;
    }
  }
}

export default UserController;

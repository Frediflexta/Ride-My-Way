import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from '../../../config/config';
import Users from '../../quries/Users.json';

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
      const hashedPwd = bcrypt.hashSync(password, 10);
      if (!fullname || !email || !phoneNumber || !hashedPwd) {
        return res.status(400).json({
          status: false,
          message: 'Ensure you fill in all fields',
        });
      }

      const resp = await pool.query(Users.usersignup, [fullname, email, phoneNumber, hashedPwd]);
      const token = jwt.sign({ id: resp.rows.id }, secret, { expiresIn: '24h' });
      return res.status(201).json({
        status: 'success',
        message: 'User was successfully created',
        resp: {
          fullname,
          email,
          phoneNumber,
          hashedPwd,
        },
        token,
      });
    } catch (err) {
      throw err.stack;
    }
  }

  static async userSignIn(req, res) {
    try {
      const { email, password } = req.body;

      if (email === ' ' || password === ' ') {
        return res.status(400).json({
          status: false,
          message: 'Ensure you fill in all fields',
        });
      }

      const resp = await pool.query(Users.userlogin, [email]);
      if (!resp) {
        return res.status(404).json({
          success: false,
          message: 'Authentication failed. User not found',
        });
      }
      const userRow = resp.rows[0];
      const verifyPassword = bcrypt.compareSync(req.body.password, userRow.password);

      if (!verifyPassword) {
        return res.status(401).json({
          status: false,
          message: 'Invalid Password',
        });
      }
      const token = jwt.sign({
        id: userRow.id,
      }, secret, { expiresIn: '24h' });

      return res.status(200).json({
        success: true,
        message: 'Welcome Back!',
        token,
      });
    } catch (err) {
      throw err.stack;
    }
  }
}

export default UserController;

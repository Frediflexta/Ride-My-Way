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
        role,
        phonenumber,
        email,
        password,
      } = req.body;

      // encrypt password
      const hashedPwd = bcrypt.hashSync(password, 10);
      if (!fullname || !role || !phonenumber || !email || !hashedPwd) {
        console.log(fullname, role, phonenumber, email, password);
        return res.status(400).json({
          status: false,
          message: 'Ensure you fill in all fields',
        });
      }

      const resp = await pool.query(Users.usersignup, [fullname, role, phonenumber, email, hashedPwd]);
      const user = resp.rows;

      const token = jwt.sign({ id: user.id }, secret, { expiresIn: '3h' });
      console.log({ id: user.id });
      return res.status(201).json({
        status: 'success',
        message: 'User was successfully created',
        res: {
          fullname,
          role,
          phonenumber,
          email,
          hashedPwd,
        },
        token,
      });
    } catch (err) {
      throw err.message;
    }
  }

  static async userSignIn(req, res) {
    try {
      const { email, password } = req.body;

      if (email === '' || password === '') {
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

      // Fix id bug
      const user = resp.rows[0];
      const verifyPassword = bcrypt.compareSync(req.body.password, user.password);

      if (!verifyPassword) {
        return res.status(401).json({
          status: false,
          message: 'Invalid Password',
        });
      }
      const token = jwt.sign({
        id: user.id,
      }, secret, { expiresIn: '3h' });
      console.log({ id: user.id });

      return res.status(200).json({
        success: true,
        message: 'Welcome Back!',
        token,
      });
    } catch (err) {
      throw err.message;
    }
  }
}

export default UserController;

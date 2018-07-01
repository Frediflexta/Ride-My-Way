import pool from '../../../config/config';

const text = `DROP TABLE IF EXISTS users;
CREATE TABLE users(
  id SERIAL PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  role USER_STATUS,
  phone_number INT NOT NULL UNIQUE,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
)`;

const usersTable = () => {
  try {
    pool.query(text, (err, res) => {
      console.log(err, res);
    });
  } catch (err) {
    throw err;
  }
};

export default usersTable;
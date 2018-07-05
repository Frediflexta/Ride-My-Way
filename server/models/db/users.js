import pool from '../../../config/config';

const text = `DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users(
  id SERIAL PRIMARY KEY NOT NULL,
  fullname TEXT NOT NULL,
  role USER_STATUS,
  phoneNumber NUMERIC NOT NULL UNIQUE,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
)`;

const usersTable = () => {
  try {
    pool.query(text, (res) => {
      console.log(res);
    });
  } catch (err) {
    throw err.message;
  }
};

export default usersTable;

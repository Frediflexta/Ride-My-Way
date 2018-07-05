import pool from '../../../config/config';

const text = `DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users(
  id SERIAL PRIMARY KEY NOT NULL,
  fullname TEXT NOT NULL,
  phoneNumber NUMERIC NOT NULL UNIQUE,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
)`;

const usersTable = () => {
  return pool.query(text);
};

export default usersTable;

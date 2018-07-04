import pool from '../../../config/config';

// this table filled by riders requesting a ride
const text = `DROP TABLE IF EXISTS requests CASCADE;
CREATE TABLE requests(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INT references users(id) ON DELETE CASCADE,
  rides_id INT references rides(id) ON DELETE CASCADE,
  fullname TEXT NOT NULL,
  accept BOOLEAN NOT NULL,
  reject BOOLEAN NOT NULL
)`;

const requestsTable = () => {
  try {
    pool.query(text, (err, res) => {
      console.log(err, res);
    });
  } catch (err) {
    throw err.message;
  }
};

export default requestsTable;

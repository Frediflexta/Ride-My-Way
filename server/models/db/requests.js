import pool from '../../../config/config';

// this table filled by riders requesting a ride
const text = `DROP TABLE IF EXISTS requests CASCADE;
CREATE TABLE requests(
  id SERIAL PRIMARY KEY NOT NULL,
  accept BOOLEAN,
  reject BOOLEAN,
  ride_id INT references rides(id) ON DELETE CASCADE,
  user_id INT references users(id) ON DELETE CASCADE
)`;

const requestsTable = () => {
  return pool.query(text);
};

export default requestsTable;

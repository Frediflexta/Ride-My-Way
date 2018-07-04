import pool from '../../../config/config';

// this table is what the driver will create and offer to riders
const text = `DROP TABLE IF EXISTS rides CASCADE;
CREATE TABLE rides(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INT references users(id) ON DELETE CASCADE,
  from_where TEXT NOT NULL,
  to_where TEXT NOT NULL,
  trip_date DATE NOT NULL,
  trip_time TIMESTAMP,
  car TEXT NOT NULL
)`;

const ridesTable = () => {
  try {
    pool.query(text, (err, res) => {
      console.log(err, res);
      pool.end();
    });
  } catch (err) {
    throw err.message;
  }
};

export default ridesTable;


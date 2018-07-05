import pool from '../../../config/config';

// this table is what the driver will create and offer to riders
const text = `DROP TABLE IF EXISTS rides CASCADE;
CREATE TABLE rides(
  id SERIAL PRIMARY KEY NOT NULL,
  from_where TEXT NOT NULL,
  to_where TEXT NOT NULL,
  trip_date DATE NOT NULL,
  car TEXT NOT NULL,
  accept BOOLEAN,
  reject BOOLEAN,
  user_id INT references users(id) ON DELETE CASCADE
)`;

const ridesTable = () => {
  return pool.query(text);
};

export default ridesTable;


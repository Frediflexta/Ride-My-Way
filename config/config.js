import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

let connection;

if (process.env.NODE_ENV === 'development') {
  connection = process.env.DB_CONNECTION;
} else if (process.env.NODE_ENV === 'production') {
  connection = process.env.DATABASE_URL;
}

const pool = new Pool({
  connectionString: connection,
});

export default pool;

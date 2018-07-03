import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const connection = process.env.DB_CONNECTION;

const pool = new Pool({
  connectionString: connection,
});

export default pool;

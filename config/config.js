import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const connection = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString: connection,
});

// pool.connect().then(() => {
//   console.log('connection is esterblished');
// }).catch(err => console.log(`not connected ${ err.message}`));

export default pool;

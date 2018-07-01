import { Pool } from 'pg';

const connection = 'postgres://postgres:postgres@localhost:5432/ride-my-way-db';

const pool = new Pool({
  connectionString: connection,
});

export default pool;

// import { Pool } from 'pg';

// export const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: { rejectUnauthorized: false }
// });

import { Pool } from 'pg';
export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'warungMakan',
  password: '123456789',
  port: 5432,
});
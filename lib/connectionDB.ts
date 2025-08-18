import { Pool } from 'pg';
export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'warungMakan',
  password: '123456789',
  port: 5432,
});
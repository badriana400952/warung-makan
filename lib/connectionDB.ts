import { Pool } from 'pg';
export const pool = new Pool({
  user: process.env.NEXT_PUBLIC_PGUSER,
  host: process.env.NEXT_PUBLIC_PGHOST,
  database: process.env.NEXT_PUBLIC_PGDATABASE,
  password: process.env.NEXT_PUBLIC_PGPASSWORD,
  port: Number(process.env.NEXT_PUBLIC_PGPORT),
});
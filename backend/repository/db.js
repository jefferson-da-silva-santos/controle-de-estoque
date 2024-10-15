import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export const pool = new pg.Pool({
  host: process.env.HOST,
  port: parseInt(process.env.PORT, 10), // Converta PORT para um número
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});


import postgres from "pg";

const { Pool } = postgres;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgress_test",
  password: "root",
  port: 5432,
});

export default pool;

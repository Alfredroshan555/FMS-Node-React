import pool from "../dbConfig.js";

// Connect to Postgres DB
export const connectToDb = () => {
  pool.connect().then(() => {
    console.log("connected to db");
  });
};

import pool from "../dbConfig.js";
import { v4 as uuidv4 } from "uuid";

// SignUp User (Add new user)
export const addNewUser = async (req, res) => {
  const { name, email } = req.body;
  const userid = uuidv4();
  const insertQuery =
    "INSERT INTO users(name, email,userid) VALUES($1, $2,$3) RETURNING *";

  try {
    const result = await pool.query(insertQuery, [name, email, userid]);
    console.log("new user added successfully!!", result.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async (req, res) => {
  const users = await pool.query("SELECT * FROM users");
  console.log("all users in table", users.rows);
  res.send(users.rows);
};

const getUserById = () => {};

const updateUser = () => {};

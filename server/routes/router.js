import express from "express";
import { addNewUser, getAllUsers } from "../controllers/userController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("FMS Revamped");
});
router.get("/allusers", getAllUsers);

router.post("/user", addNewUser);

export default router;

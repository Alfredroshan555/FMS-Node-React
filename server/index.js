import express from "express";
import { connectToDb } from "./utils/connectToDb.js";
import router from "./routes/router.js";
const PORT = 3000;

const app = express();
// Middleware to parse JSON bodies
app.use(express.json());

app.use("/", router);

connectToDb(); // Connect to postgres DB

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

import express from "express";
import dotenv from "dotenv";
import db from "./config/dbConnect.js";
import registerRoutes from "./routes/register.routes.js";
import friendRoutes from "./routes/friendreq.routes.js";

dotenv.config(".env");
const app = express();
app.use(express.json());
db();

const PORT = process.env.PORT;

app.use("/user", registerRoutes);
app.use("/request", friendRoutes);
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});


import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./Config/db.js";
import authRoutes from "./Routes/authRoutes.js";


dotenv.config();

const app = express();
const port = process.env.PORT || 5000;



// Middleware
app.use(express.json());

await connectDB();

// Test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Routes
app.use("/api/auth", authRoutes);


app.listen(port, () => {
  console.log(` Server running successfully on port ${port}`);
});
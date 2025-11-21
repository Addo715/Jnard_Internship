import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./Config/db.js";
import authRoute from "./Routes/authRoute.js";
import applicationRoutes from "./Routes/applicationRoute.js";


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
app.use("/api/auth", authRoute);
app.use("/api/applications", applicationRoutes);


app.listen(port, () => {
  console.log(` Server running successfully on port ${port}`);
});
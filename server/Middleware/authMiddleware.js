import { authModels } from "../Models/authModels.js";
import jwt from "jsonwebtoken"

export const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided, authorization denied." });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Token missing, authorization denied." });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user info to req
    req.user = {
      id: decoded.id,
      email: decoded.email,
    };

    next(); // allow request to proceed
  } catch (error) {
    console.error("JWT verification failed:", error);
    res.status(401).json({ message: "Token is not valid or expired." });
  }
};
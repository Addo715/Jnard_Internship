// server/Routes/applicationRoute.js
import express from "express";
import {
  createApplication,
  getAllApplications,
  getApplicationById,
  updateApplicationStatus,
  deleteApplication,
} from "../Controllers/applicationController.js";

const router = express.Router();

// CREATE - Submit new application
router.post("/", createApplication);

// READ - Get all applications (with optional filters)
router.get("/", getAllApplications);

// READ - Get single application by ID
router.get("/:id", getApplicationById);

// UPDATE - Update application status
router.patch("/:id/status", updateApplicationStatus);

// DELETE - Delete application
router.delete("/:id", deleteApplication);

export default router;
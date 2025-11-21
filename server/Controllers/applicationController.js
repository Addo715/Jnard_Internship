// server/Controllers/applicationController.js
import { Application } from "../Models/applicationModel.js";

// CREATE APPLICATION
export const createApplication = async (req, res) => {
  try {
    const { personalInfo, education, skills, files } = req.body;

    // Validation
    if (!personalInfo || !education || !skills || !files) {
      return res.status(400).json({ 
        message: "All fields are required: personalInfo, education, skills, files" 
      });
    }

    // Check if application with this email already exists
    const existingApplication = await Application.findOne({
      "personalInfo.email": personalInfo.email,
    });

    if (existingApplication) {
      return res.status(400).json({
        message: "An application with this email already exists",
      });
    }

    // Create new application
    const application = await Application.create({
      personalInfo,
      education,
      skills,
      files,
      status: "pending",
    });

    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      data: application,
    });
  } catch (error) {
    console.error("Error creating application:", error);
    res.status(500).json({ 
      success: false,
      message: "Error submitting application", 
      error: error.message 
    });
  }
};

// GET ALL APPLICATIONS
export const getAllApplications = async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;

    // Build filter
    const filter = {};
    if (status) {
      filter.status = status;
    }

    // Pagination
    const skip = (page - 1) * limit;

    const applications = await Application.find(filter)
      .sort({ createdAt: -1 })
      .limit(parseInt(limit))
      .skip(skip);

    const total = await Application.countDocuments(filter);

    res.status(200).json({
      success: true,
      data: applications,
      pagination: {
        total,
        page: parseInt(page),
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching applications:", error);
    res.status(500).json({ 
      success: false,
      message: "Error fetching applications", 
      error: error.message 
    });
  }
};

// GET SINGLE APPLICATION BY ID
export const getApplicationById = async (req, res) => {
  try {
    const { id } = req.params;

    const application = await Application.findById(id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    res.status(200).json({
      success: true,
      data: application,
    });
  } catch (error) {
    console.error("Error fetching application:", error);
    res.status(500).json({ 
      success: false,
      message: "Error fetching application", 
      error: error.message 
    });
  }
};

// UPDATE APPLICATION STATUS
export const updateApplicationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // Validate status
    const validStatuses = ["pending", "reviewing", "accepted", "rejected"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status. Must be one of: pending, reviewing, accepted, rejected",
      });
    }

    const application = await Application.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Application status updated successfully",
      data: application,
    });
  } catch (error) {
    console.error("Error updating application:", error);
    res.status(500).json({ 
      success: false,
      message: "Error updating application", 
      error: error.message 
    });
  }
};

// DELETE APPLICATION
export const deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;

    const application = await Application.findByIdAndDelete(id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Application deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting application:", error);
    res.status(500).json({ 
      success: false,
      message: "Error deleting application", 
      error: error.message 
    });
  }
};
// server/Models/applicationModel.js
import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    // Personal Information
    personalInfo: {
      fullName: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
      },
      phone: {
        type: String,
        required: true,
        trim: true,
      },
      dateOfBirth: {
        type: Date,
        required: true,
      },
    },

    // Education Information
    education: {
      university: {
        type: String,
        required: true,
        trim: true,
      },
      course: {
        type: String,
        required: true,
        trim: true,
      },
      yearOfStudy: {
        type: String,
        required: true,
        enum: [
          "1st Year",
          "2nd Year",
          "3rd Year",
          "4th Year",
          "Final Year",
          "Graduate",
        ],
      },
    },

    // Skills
    skills: {
      type: [String],
      required: true,
      validate: {
        validator: function (v) {
          return v && v.length > 0;
        },
        message: "At least one skill is required",
      },
    },

    // Files Information (storing metadata only)
    files: [
      {
        name: {
          type: String,
          required: true,
        },
        size: {
          type: Number,
          required: true,
        },
        type: {
          type: String,
          required: true,
        },
      },
    ],

    // Application Status
    status: {
      type: String,
      enum: ["pending", "reviewing", "accepted", "rejected"],
      default: "pending",
    },

    // Linked User (optional)
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "person",
      required: false,
    },
  },
  { 
    timestamps: true
  }
);

// Indexes for faster queries
applicationSchema.index({ "personalInfo.email": 1 });
applicationSchema.index({ status: 1 });
applicationSchema.index({ createdAt: -1 });

export const Application = mongoose.model("Application", applicationSchema); 
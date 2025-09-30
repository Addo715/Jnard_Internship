

import { create } from "zustand";
import { persist } from "zustand/middleware";

const useApplicationStore = create(
  persist(
    (set, get) => ({
      // State
      applications: [],
      currentApplication: {
        personalInfo: {},
        education: {},
        skills: [],
        files: [],
      },
      fileMap: new Map(), // Non-persisted map to store File objects by application ID
      deadlines: [
        {
          id: 1,
          title: "Spring 2025 Internship Applications",
          description:
            "Apply for our Spring internship program. Limited positions available.",
          deadline: "2025-10-15",
          status: "active",
          createdDate: "2025-09-01",
        },
      ],

      // Actions
      updatePersonalInfo: (data) =>
        set((state) => ({
          currentApplication: {
            ...state.currentApplication,
            personalInfo: data,
          },
        })),

      updateEducation: (data) =>
        set((state) => ({
          currentApplication: {
            ...state.currentApplication,
            education: data,
          },
        })),

      updateSkills: (skills) =>
        set((state) => ({
          currentApplication: {
            ...state.currentApplication,
            skills: skills,
          },
        })),

      updateFiles: (files) =>
        set((state) => ({
          currentApplication: {
            ...state.currentApplication,
            files: files,
          },
        })),

      submitApplication: () => {
        const { currentApplication } = get();

        console.log("Submitting application:", currentApplication);

        const newApplication = {
          id: Date.now(),
          firstName:
            currentApplication.personalInfo.fullName?.split(" ")[0] || "",
          lastName:
            currentApplication.personalInfo.fullName
              ?.split(" ")
              .slice(1)
              .join(" ") || "",
          email: currentApplication.personalInfo.email || "",
          phone: currentApplication.personalInfo.phone || "",
          dateOfBirth: currentApplication.personalInfo.dateOfBirth || "",
          university: currentApplication.education.university || "",
          course: currentApplication.education.course || "",
          yearOfStudy: currentApplication.education.yearOfStudy || "",
          skills: currentApplication.skills || [],
          status: "pending",
          description:
            currentApplication.personalInfo.description ||
            "No description provided",
          appliedDate: new Date().toISOString().split("T")[0],
          files: currentApplication.files.map((f) => ({
            name: f.name,
            size: f.size,
            type: f.type,
          })), // Store file metadata for persistence
        };

        console.log("New application created:", newApplication);

        // Store File objects in fileMap
        set((state) => ({
          fileMap: new Map(state.fileMap).set(
            newApplication.id,
            currentApplication.files
          ),
          applications: [...state.applications, newApplication],
          currentApplication: {
            personalInfo: {},
            education: {},
            skills: [],
            files: [],
          },
        }));

        console.log("Applications after submit:", get().applications);
        console.log("FileMap after submit:", get().fileMap);

        return newApplication;
      },

      updateApplicationStatus: (id, status) =>
        set((state) => ({
          applications: state.applications.map((app) =>
            app.id === id ? { ...app, status } : app
          ),
        })),

      deleteApplication: (id) =>
        set((state) => {
          const newFileMap = new Map(state.fileMap);
          newFileMap.delete(id); // Clean up File objects
          return {
            applications: state.applications.filter((app) => app.id !== id),
            fileMap: newFileMap,
          };
        }),

      // Deadline actions
      addDeadline: (deadline) =>
        set((state) => ({
          deadlines: [
            ...state.deadlines,
            {
              ...deadline,
              id: Date.now(),
              createdDate: new Date().toISOString().split("T")[0],
            },
          ],
        })),

      updateDeadline: (id, updatedDeadline) =>
        set((state) => ({
          deadlines: state.deadlines.map((d) =>
            d.id === id ? { ...d, ...updatedDeadline } : d
          ),
        })),

      deleteDeadline: (id) =>
        set((state) => ({
          deadlines: state.deadlines.filter((d) => d.id !== id),
        })),
    }),
    {
      name: "internship-storage",
      partialize: (state) => ({
        applications: state.applications,
        deadlines: state.deadlines,
      }), // Exclude fileMap from persistence
    }
  )
);

export default useApplicationStore;

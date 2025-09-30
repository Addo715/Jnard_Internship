// import React, { useState, useEffect } from "react";
// import {
//   Users,
//   Search,
//   Download,
//   Trash2,
//   CheckCircle,
//   XCircle,
//   Clock,
//   Bell,
//   User,
//   LayoutDashboard,
//   FileText,
//   UserCheck,
//   Settings,
//   Upload,
//   Camera,
//   Calendar,
//   Menu,
//   X,
// } from "lucide-react";
// import useApplicationStore from "../../Store/UseApplicationStore";

// const Admin = () => {
//   const {
//     applications,
//     updateApplicationStatus,
//     deleteApplication,
//     deadlines,
//     updateDeadline,
//     fileMap,
//   } = useApplicationStore();

//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterStatus, setFilterStatus] = useState("all");
//   const [filterSkill, setFilterSkill] = useState("all");
//   const [filterUniversity, setFilterUniversity] = useState("all");
//   const [selectedApplication, setSelectedApplication] = useState(null);
//   const [activeTab, setActiveTab] = useState("dashboard");
//   const [profileImage, setProfileImage] = useState(null);
//   const [showProfileModal, setShowProfileModal] = useState(false);
//   const [editingDeadline, setEditingDeadline] = useState(null);
//   const [showMobileMenu, setShowMobileMenu] = useState(false);

//   // Cleanup URLs when selectedApplication changes or component unmounts
//   useEffect(() => {
//     return () => {
//       if (selectedApplication?.previewFileUrl) {
//         URL.revokeObjectURL(selectedApplication.previewFileUrl);
//       }
//     };
//   }, [selectedApplication]);

//   const stats = {
//     total: applications.length,
//     pending: applications.filter((app) => app.status === "pending").length,
//     approved: applications.filter((app) => app.status === "approved").length,
//     rejected: applications.filter((app) => app.status === "rejected").length,
//   };

//   const allSkills = [...new Set(applications.flatMap((app) => app.skills))];
//   const allUniversities = [
//     ...new Set(applications.map((app) => app.university)),
//   ];

//   const handleProfileImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImage(reader.result);
//         setShowProfileModal(false);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const filteredApplications = applications.filter((app) => {
//     const searchLower = searchTerm.toLowerCase();
//     const matchesSearch =
//       searchTerm === "" ||
//       app.firstName.toLowerCase().includes(searchLower) ||
//       app.lastName.toLowerCase().includes(searchLower) ||
//       app.email.toLowerCase().includes(searchLower) ||
//       app.university.toLowerCase().includes(searchLower) ||
//       app.course.toLowerCase().includes(searchLower);

//     const matchesStatus = filterStatus === "all" || app.status === filterStatus;
//     const matchesSkill =
//       filterSkill === "all" || app.skills.includes(filterSkill);
//     const matchesUniversity =
//       filterUniversity === "all" || app.university === filterUniversity;

//     return matchesSearch && matchesStatus && matchesSkill && matchesUniversity;
//   });

//   const getStatusBadgeStyle = (status) => {
//     switch (status) {
//       case "approved":
//         return "bg-teal-100 text-teal-800";
//       case "rejected":
//         return "bg-red-100 text-red-800";
//       case "pending":
//         return "bg-yellow-100 text-yellow-800";
//       default:
//         return "bg-blue-100 text-blue-800";
//     }
//   };

//   const renderDashboard = () => (
//     <div className="space-y-6">
//       <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
//           <div className="flex items-center justify-between">
//             <div>
//               <div className="text-4xl font-bold text-gray-900 mb-1">
//                 {stats.total}
//               </div>
//               <div className="text-gray-600 text-sm">Total Applicants</div>
//             </div>
//             <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//               <Users className="text-blue-600" size={24} />
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
//           <div className="flex items-center justify-between">
//             <div>
//               <div className="text-4xl font-bold text-gray-900 mb-1">
//                 {stats.pending}
//               </div>
//               <div className="text-gray-600 text-sm">Pending</div>
//             </div>
//             <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
//               <Clock className="text-orange-600" size={24} />
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
//           <div className="flex items-center justify-between">
//             <div>
//               <div className="text-4xl font-bold text-gray-900 mb-1">
//                 {stats.approved}
//               </div>
//               <div className="text-gray-600 text-sm">Shortlisted</div>
//             </div>
//             <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
//               <CheckCircle className="text-teal-600" size={24} />
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
//           <div className="flex items-center justify-between">
//             <div>
//               <div className="text-4xl font-bold text-gray-900 mb-1">
//                 {stats.rejected}
//               </div>
//               <div className="text-gray-600 text-sm">Declined</div>
//             </div>
//             <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
//               <XCircle className="text-red-600" size={24} />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
//         <h3 className="text-lg font-semibold text-gray-900 mb-4">
//           Recent Activity
//         </h3>
//         {applications.length === 0 ? (
//           <p className="text-gray-500 text-center py-8">No applications yet</p>
//         ) : (
//           <div className="space-y-3">
//             {applications.slice(0, 5).map((app) => (
//               <div
//                 key={app.id}
//                 className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//                     <span className="text-blue-600 font-semibold text-sm">
//                       {app.firstName[0]}
//                       {app.lastName[0]}
//                     </span>
//                   </div>
//                   <div>
//                     <div className="font-medium text-gray-900">
//                       {app.firstName} {app.lastName}
//                     </div>
//                     <div className="text-sm text-gray-600">
//                       {app.university}
//                     </div>
//                   </div>
//                 </div>
//                 <span
//                   className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeStyle(
//                     app.status
//                   )}`}
//                 >
//                   {app.status === "approved"
//                     ? "Shortlisted"
//                     : app.status === "rejected"
//                     ? "Declined"
//                     : "Pending"}
//                 </span>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );

//   const renderApplications = () => (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <h2 className="text-2xl font-bold text-gray-900">Applications</h2>
//         <button
//           onClick={() => {
//             const dataStr = JSON.stringify(applications, null, 2);
//             const dataBlob = new Blob([dataStr], { type: "application/json" });
//             const url = URL.createObjectURL(dataBlob);
//             const link = document.createElement("a");
//             link.href = url;
//             link.download = `applications_${
//               new Date().toISOString().split("T")[0]
//             }.json`;
//             link.click();
//             URL.revokeObjectURL(url);
//           }}
//           className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
//         >
//           <Download size={18} />
//           Export
//         </button>
//       </div>

//       {allSkills.length > 0 || allUniversities.length > 0 ? (
//         <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <select
//               value={filterSkill}
//               onChange={(e) => setFilterSkill(e.target.value)}
//               className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
//             >
//               <option value="all">All Skills</option>
//               {allSkills.map((skill) => (
//                 <option key={skill} value={skill}>
//                   {skill}
//                 </option>
//               ))}
//             </select>
//             <select
//               value={filterUniversity}
//               onChange={(e) => setFilterUniversity(e.target.value)}
//               className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
//             >
//               <option value="all">All Universities</option>
//               {allUniversities.map((uni) => (
//                 <option key={uni} value={uni}>
//                   {uni}
//                 </option>
//               ))}
//             </select>
//             <select
//               value={filterStatus}
//               onChange={(e) => setFilterStatus(e.target.value)}
//               className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
//             >
//               <option value="all">All Status</option>
//               <option value="pending">Pending</option>
//               <option value="approved">Shortlisted</option>
//               <option value="rejected">Declined</option>
//             </select>
//           </div>
//         </div>
//       ) : null}

//       <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-gray-50 border-b border-gray-200">
//               <tr>
//                 <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
//                   Name
//                 </th>
//                 <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
//                   Institution
//                 </th>
//                 <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
//                   Skills
//                 </th>
//                 <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
//                   Status
//                 </th>
//                 <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-100">
//               {filteredApplications.length === 0 ? (
//                 <tr>
//                   <td
//                     colSpan="5"
//                     className="px-6 py-12 text-center text-gray-500"
//                   >
//                     No applications found
//                   </td>
//                 </tr>
//               ) : (
//                 filteredApplications.map((app) => (
//                   <tr key={app.id} className="hover:bg-gray-50 transition">
//                     <td className="px-6 py-4">
//                       <div className="font-medium text-gray-900">
//                         {app.firstName} {app.lastName}
//                       </div>
//                     </td>
//                     <td className="px-6 py-4">
//                       <div className="text-gray-700">{app.university}</div>
//                     </td>
//                     <td className="px-6 py-4">
//                       <div className="flex flex-wrap gap-2">
//                         {app.skills.slice(0, 2).map((skill, index) => (
//                           <span
//                             key={index}
//                             className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
//                           >
//                             {skill}
//                           </span>
//                         ))}
//                         {app.skills.length > 2 && (
//                           <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
//                             +{app.skills.length - 2}
//                           </span>
//                         )}
//                       </div>
//                     </td>
//                     <td className="px-6 py-4">
//                       <span
//                         className={`px-4 py-1.5 rounded-full text-sm font-medium ${getStatusBadgeStyle(
//                           app.status
//                         )}`}
//                       >
//                         {app.status === "approved"
//                           ? "Shortlisted"
//                           : app.status === "rejected"
//                           ? "Declined"
//                           : "Pending"}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4">
//                       <button
//                         onClick={() => setSelectedApplication(app)}
//                         className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium"
//                       >
//                         View
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );

//   const renderShortlisted = () => {
//     const shortlisted = applications.filter((app) => app.status === "approved");

//     return (
//       <div className="space-y-6">
//         <h2 className="text-2xl font-bold text-gray-900">
//           Shortlisted Candidates
//         </h2>
//         <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
//           {shortlisted.length === 0 ? (
//             <p className="text-gray-500 text-center py-8">
//               No shortlisted candidates yet
//             </p>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {shortlisted.map((app) => (
//                 <div
//                   key={app.id}
//                   className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
//                 >
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
//                       <span className="text-blue-600 font-semibold">
//                         {app.firstName[0]}
//                         {app.lastName[0]}
//                       </span>
//                     </div>
//                     <div>
//                       <div className="font-semibold text-gray-900">
//                         {app.firstName} {app.lastName}
//                       </div>
//                       <div className="text-sm text-gray-600">
//                         {app.university}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex flex-wrap gap-2 mb-3">
//                     {app.skills.slice(0, 3).map((skill, index) => (
//                       <span
//                         key={index}
//                         className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                   <button
//                     onClick={() => setSelectedApplication(app)}
//                     className="w-full px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
//                   >
//                     View Details
//                   </button>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   };

//   const renderSettings = () => (
//     <div className="space-y-6">
//       <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
//       <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
//         <div className="space-y-6">
//           <div>
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">
//               Account Settings
//             </h3>
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Company Name
//                 </label>
//                 <input
//                   type="text"
//                   defaultValue="Jnard IT Consult"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   defaultValue="admin@jnardit.com"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//             </div>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">
//               Notification Preferences
//             </h3>
//             <div className="space-y-3">
//               <label className="flex items-center gap-3">
//                 <input
//                   type="checkbox"
//                   defaultChecked
//                   className="w-4 h-4 text-blue-600 rounded"
//                 />
//                 <span className="text-gray-700">
//                   Email notifications for new applications
//                 </span>
//               </label>
//               <label className="flex items-center gap-3">
//                 <input
//                   type="checkbox"
//                   defaultChecked
//                   className="w-4 h-4 text-blue-600 rounded"
//                 />
//                 <span className="text-gray-700">Daily summary reports</span>
//               </label>
//             </div>
//           </div>

//           <button
//             onClick={() => {
//               if (
//                 window.confirm("Are you sure you want to save these settings?")
//               ) {
//                 alert("Settings saved successfully!");
//               }
//             }}
//             className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//           >
//             Save Changes
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   const renderDeadlines = () => {
//     const getDaysUntilDeadline = (deadlineDate) => {
//       const today = new Date();
//       const deadline = new Date(deadlineDate);
//       const diffTime = deadline - today;
//       const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//       return diffDays;
//     };

//     const getDeadlineColor = (days) => {
//       if (days < 0) return "bg-gray-100 text-gray-800";
//       if (days <= 3) return "bg-red-100 text-red-800";
//       if (days <= 7) return "bg-orange-100 text-orange-800";
//       return "bg-green-100 text-green-800";
//     };

//     const getDeadlineMessage = (days) => {
//       if (days < 0) return `${Math.abs(days)} days overdue`;
//       if (days === 0) return "Due today";
//       if (days === 1) return "Due tomorrow";
//       return `${days} days left`;
//     };

//     return (
//       <div className="space-y-6">
//         <h2 className="text-2xl font-bold text-gray-900">Manage Deadlines</h2>
//         <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
//           <h3 className="text-lg font-semibold text-gray-900 mb-4">
//             Current Deadlines
//           </h3>
//           {deadlines.length === 0 ? (
//             <p className="text-gray-500 text-center py-8">No deadlines set</p>
//           ) : (
//             <div className="space-y-4">
//               {deadlines.map((deadline) => {
//                 const daysLeft = getDaysUntilDeadline(deadline.deadline);
//                 return (
//                   <div
//                     key={deadline.id}
//                     className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-3 border-b border-gray-100 last:border-0"
//                   >
//                     <div className="flex items-center gap-3">
//                       <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
//                         <Calendar className="text-blue-600" size={20} />
//                       </div>
//                       <div className="min-w-0 flex-1">
//                         <div className="font-medium text-gray-900 truncate">
//                           {deadline.title}
//                         </div>
//                         <div className="text-sm text-gray-600">
//                           Deadline: {deadline.deadline}
//                         </div>
//                         <div className="text-sm text-gray-600">
//                           Created: {deadline.createdDate}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex flex-wrap items-center gap-2">
//                       <span
//                         className={`px-3 py-1 rounded-full text-xs font-medium ${getDeadlineColor(
//                           daysLeft
//                         )}`}
//                       >
//                         {getDeadlineMessage(daysLeft)}
//                       </span>
//                       <span
//                         className={`px-3 py-1 rounded-full text-xs font-medium ${
//                           deadline.status === "active"
//                             ? "bg-green-100 text-green-800"
//                             : "bg-red-100 text-red-800"
//                         }`}
//                       >
//                         {deadline.status === "active" ? "Open" : "Closed"}
//                       </span>
//                       <button
//                         onClick={() => setEditingDeadline(deadline)}
//                         className="px-3 sm:px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition text-sm font-medium"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => {
//                           updateDeadline(deadline.id, {
//                             ...deadline,
//                             status:
//                               deadline.status === "active"
//                                 ? "closed"
//                                 : "active",
//                           });
//                         }}
//                         className="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium whitespace-nowrap"
//                       >
//                         Toggle {deadline.status === "active" ? "Close" : "Open"}
//                       </button>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
//         * {
//           font-family: 'Inter', sans-serif;
//         }
//       `}</style>

//       <div className="flex min-h-screen bg-gray-50">
//         {showMobileMenu && (
//           <div
//             className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
//             onClick={() => setShowMobileMenu(false)}
//           />
//         )}

//         <div
//           className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-blue-600 text-white transform transition-transform duration-300 ease-in-out ${
//             showMobileMenu ? "translate-x-0" : "-translate-x-full"
//           } lg:translate-x-0 flex flex-col`}
//         >
//           <div className="flex items-center justify-between p-6 border-b border-blue-500">
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
//                 <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
//               </div>
//               <span className="text-xl font-semibold">Jnard IT</span>
//             </div>
//             <button
//               onClick={() => setShowMobileMenu(false)}
//               className="lg:hidden text-white hover:bg-blue-700 p-1 rounded"
//             >
//               <X size={24} />
//             </button>
//           </div>

//           <nav className="flex-1 p-4">
//             <button
//               onClick={() => {
//                 setActiveTab("dashboard");
//                 setShowMobileMenu(false);
//               }}
//               className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition ${
//                 activeTab === "dashboard" ? "bg-blue-700" : "hover:bg-blue-700"
//               }`}
//             >
//               <LayoutDashboard size={20} />
//               <span>Dashboard</span>
//             </button>
//             <button
//               onClick={() => {
//                 setActiveTab("applications");
//                 setShowMobileMenu(false);
//               }}
//               className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition ${
//                 activeTab === "applications"
//                   ? "bg-blue-700"
//                   : "hover:bg-blue-700"
//               }`}
//             >
//               <FileText size={20} />
//               <span>Applications</span>
//             </button>
//             <button
//               onClick={() => {
//                 setActiveTab("shortlisted");
//                 setShowMobileMenu(false);
//               }}
//               className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition ${
//                 activeTab === "shortlisted"
//                   ? "bg-blue-700"
//                   : "hover:bg-blue-700"
//               }`}
//             >
//               <UserCheck size={20} />
//               <span>Shortlisted</span>
//             </button>
//             <button
//               onClick={() => {
//                 setActiveTab("deadlines");
//                 setShowMobileMenu(false);
//               }}
//               className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition ${
//                 activeTab === "deadlines" ? "bg-blue-700" : "hover:bg-blue-700"
//               }`}
//             >
//               <Calendar size={20} />
//               <span>Deadlines</span>
//             </button>
//             <button
//               onClick={() => {
//                 setActiveTab("settings");
//                 setShowMobileMenu(false);
//               }}
//               className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
//                 activeTab === "settings" ? "bg-blue-700" : "hover:bg-blue-700"
//               }`}
//             >
//               <Settings size={20} />
//               <span>Settings</span>
//             </button>
//           </nav>
//         </div>

//         <div className="flex-1 flex flex-col min-w-0">
//           <div className="bg-white px-4 sm:px-6 py-4">
//             <div className="flex items-center justify-between gap-4">
//               <button
//                 onClick={() => setShowMobileMenu(true)}
//                 className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition"
//               >
//                 <Menu size={24} className="text-gray-600" />
//               </button>

//               <div className="flex-1 max-w-md relative">
//                 <input
//                   type="text"
//                   placeholder="Search applications..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white text-sm"
//                 />
//                 <Search
//                   className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
//                   size={20}
//                 />
//               </div>
//               <div className="flex items-center gap-2 sm:gap-4">
//                 <button className="relative p-2 hover:bg-gray-100 rounded-lg transition">
//                   <Bell size={20} className="text-gray-600" />
//                   {stats.pending > 0 && (
//                     <>
//                       <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
//                         <span className="text-white text-xs font-semibold">
//                           {stats.pending}
//                         </span>
//                       </span>
//                     </>
//                   )}
//                 </button>
//                 <button
//                   onClick={() => setShowProfileModal(true)}
//                   className="relative w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition group"
//                 >
//                   {profileImage ? (
//                     <img
//                       src={profileImage}
//                       alt="Profile"
//                       className="w-full h-full rounded-full object-cover"
//                     />
//                   ) : (
//                     <User size={20} className="text-white" />
//                   )}
//                   <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
//                     <Camera size={16} className="text-white" />
//                   </div>
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="flex-1 overflow-auto p-4 sm:p-6">
//             {activeTab === "dashboard" && renderDashboard()}
//             {activeTab === "applications" && renderApplications()}
//             {activeTab === "shortlisted" && renderShortlisted()}
//             {activeTab === "deadlines" && renderDeadlines()}
//             {activeTab === "settings" && renderSettings()}
//           </div>
//         </div>

//         {showProfileModal && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//             <div className="bg-white rounded-xl max-w-md w-full p-6">
//               <h2 className="text-xl font-bold text-gray-900 mb-4">
//                 Upload Profile Picture
//               </h2>
//               <div className="space-y-4">
//                 <div className="flex justify-center">
//                   <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
//                     {profileImage ? (
//                       <img
//                         src={profileImage}
//                         alt="Preview"
//                         className="w-full h-full object-cover"
//                       />
//                     ) : (
//                       <User size={48} className="text-gray-400" />
//                     )}
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block w-full cursor-pointer">
//                     <div className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-center flex items-center justify-center gap-2">
//                       <Upload size={18} />
//                       <span>Choose Image</span>
//                     </div>
//                     <input
//                       type="file"
//                       accept="image/*"
//                       onChange={handleProfileImageUpload}
//                       className="hidden"
//                     />
//                   </label>
//                 </div>
//                 <button
//                   onClick={() => setShowProfileModal(false)}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {editingDeadline && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//             <div className="bg-white rounded-xl max-w-md w-full p-6">
//               <h2 className="text-xl font-bold text-gray-900 mb-4">
//                 Edit Deadline
//               </h2>
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Title
//                   </label>
//                   <input
//                     type="text"
//                     defaultValue={editingDeadline.title}
//                     onChange={(e) =>
//                       setEditingDeadline({
//                         ...editingDeadline,
//                         title: e.target.value,
//                       })
//                     }
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Deadline Date
//                   </label>
//                   <input
//                     type="date"
//                     defaultValue={editingDeadline.deadline}
//                     onChange={(e) =>
//                       setEditingDeadline({
//                         ...editingDeadline,
//                         deadline: e.target.value,
//                       })
//                     }
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//                 <div className="flex gap-3">
//                   <button
//                     onClick={() => {
//                       updateDeadline(editingDeadline.id, editingDeadline);
//                       setEditingDeadline(null);
//                     }}
//                     className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//                   >
//                     Save Changes
//                   </button>
//                   <button
//                     onClick={() => setEditingDeadline(null)}
//                     className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//         {/*  Application Details section come back and work on it  */}
//         {selectedApplication && (
//           <div className="fixed inset-0 border bg-opacity-50 flex items-center justify-center z-50 p-4">
//             <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//               <div className="p-6 border-b sticky top-0 bg-white z-10">
//                 <div className="flex items-center justify-between">
//                   <h2 className="text-2xl font-bold text-gray-900">
//                     Application Details
//                   </h2>
//                   <button
//                     onClick={() => setSelectedApplication(null)}
//                     className="text-gray-400 hover:text-gray-600"
//                   >
//                     <XCircle size={24} />
//                   </button>
//                 </div>
//               </div>

//               <div className="p-6 space-y-6">
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                     Personal Information
//                   </h3>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div>
//                       <p className="text-sm text-gray-600">Name</p>
//                       <p className="text-base font-medium text-gray-900">
//                         {selectedApplication.firstName}{" "}
//                         {selectedApplication.lastName}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-600">Email</p>
//                       <p className="text-base font-medium text-gray-900">
//                         {selectedApplication.email}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-600">Phone</p>
//                       <p className="text-base font-medium text-gray-900">
//                         {selectedApplication.phone}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-600">Date of Birth</p>
//                       <p className="text-base font-medium text-gray-900">
//                         {selectedApplication.dateOfBirth}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                     Education
//                   </h3>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div>
//                       <p className="text-sm text-gray-600">University</p>
//                       <p className="text-base font-medium text-gray-900">
//                         {selectedApplication.university}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-600">Course</p>
//                       <p className="text-base font-medium text-gray-900">
//                         {selectedApplication.course}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-600">Year of Study</p>
//                       <p className="text-base font-medium text-gray-900">
//                         {selectedApplication.yearOfStudy}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                     Skills
//                   </h3>
//                   <div className="flex flex-wrap gap-2">
//                     {selectedApplication.skills.map((skill, index) => (
//                       <span
//                         key={index}
//                         className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                     About
//                   </h3>
//                   <p className="text-gray-700">
//                     {selectedApplication.description}
//                   </p>
//                 </div>

//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                     Uploaded Documents
//                   </h3>
//                   {selectedApplication.files &&
//                   selectedApplication.files.length > 0 ? (
//                     <div className="space-y-3">
//                       {selectedApplication.files.map((file, index) => {
//                         const fileObj = fileMap.get(selectedApplication.id)?.[
//                           index
//                         ];
//                         const isPDF = file.type === "application/pdf";

//                         return (
//                           <div
//                             key={index}
//                             className="flex items-center justify-between px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
//                           >
//                             <div className="flex items-center gap-3">
//                               <svg
//                                 className="w-5 h-5 text-blue-600"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                               >
//                                 <path
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                   strokeWidth={2}
//                                   d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
//                                 />
//                               </svg>
//                               <div>
//                                 <p className="text-sm font-medium text-gray-900">
//                                   {file.name || `File ${index + 1}`}
//                                 </p>
//                                 <p className="text-xs text-gray-500">
//                                   {file.size
//                                     ? `${(file.size / 1024).toFixed(2)} KB`
//                                     : "Size unavailable"}
//                                 </p>
//                               </div>
//                             </div>
//                             <div className="flex items-center gap-2">
//                               {fileObj instanceof File && isPDF ? (
//                                 <button
//                                   onClick={() =>
//                                     setSelectedApplication({
//                                       ...selectedApplication,
//                                       previewFileIndex: index,
//                                     })
//                                   }
//                                   className="text-blue-600 hover:text-blue-800 p-2"
//                                   title="Preview"
//                                 >
//                                   <svg
//                                     className="w-5 h-5"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                   >
//                                     <path
//                                       strokeLinecap="round"
//                                       strokeLinejoin="round"
//                                       strokeWidth={2}
//                                       d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                                     />
//                                   </svg>
//                                 </button>
//                               ) : (
//                                 <span className="text-gray-500 text-xs p-2">
//                                   {fileObj instanceof File
//                                     ? "Preview not available for this file type"
//                                     : "File unavailable"}
//                                 </span>
//                               )}
//                               {fileObj instanceof File ? (
//                                 <a
//                                   href={URL.createObjectURL(fileObj)}
//                                   download={file.name || `file-${index + 1}`}
//                                   className="text-blue-600 hover:text-blue-800 p-2"
//                                   title="Download"
//                                 >
//                                   <svg
//                                     className="w-5 h-5"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                   >
//                                     <path
//                                       strokeLinecap="round"
//                                       strokeLinejoin="round"
//                                       strokeWidth={2}
//                                       d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
//                                     />
//                                   </svg>
//                                 </a>
//                               ) : (
//                                 <span className="text-gray-500 text-xs p-2">
//                                   File unavailable
//                                 </span>
//                               )}
//                             </div>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   ) : (
//                     <p className="text-gray-500">No documents uploaded</p>
//                   )}
//                 </div>

//                 <div className="flex flex-col sm:flex-row gap-3 pt-4">
//                   <button
//                     onClick={() => {
//                       updateApplicationStatus(
//                         selectedApplication.id,
//                         "approved"
//                       );
//                       setSelectedApplication(null);
//                     }}
//                     className="flex-1 bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition font-medium"
//                   >
//                     Approve
//                   </button>
//                   <button
//                     onClick={() => {
//                       updateApplicationStatus(
//                         selectedApplication.id,
//                         "rejected"
//                       );
//                       setSelectedApplication(null);
//                     }}
//                     className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition font-medium"
//                   >
//                     Decline
//                   </button>
//                   <button
//                     onClick={() => {
//                       if (
//                         window.confirm(
//                           "Are you sure you want to delete this application?"
//                         )
//                       ) {
//                         deleteApplication(selectedApplication.id);
//                         setSelectedApplication(null);
//                       }
//                     }}
//                     className="flex-1 bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition font-medium"
//                   >
//                     <Trash2 size={18} className="inline mr-2" />
//                     Delete
//                   </button>
//                 </div>
//               </div>

//               {selectedApplication.previewFileIndex !== undefined &&
//                 selectedApplication.files[selectedApplication.previewFileIndex]
//                   ?.type === "application/pdf" && (
//                   <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//                     <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//                       <div className="p-4 border-b sticky top-0 bg-white z-10">
//                         <div className="flex items-center justify-between">
//                           <h3 className="text-lg font-semibold text-gray-900">
//                             Preview:{" "}
//                             {selectedApplication.files[
//                               selectedApplication.previewFileIndex
//                             ]?.name ||
//                               `File ${
//                                 selectedApplication.previewFileIndex + 1
//                               }`}
//                           </h3>
//                           <button
//                             onClick={() =>
//                               setSelectedApplication({
//                                 ...selectedApplication,
//                                 previewFileIndex: undefined,
//                                 previewFileUrl: undefined,
//                               })
//                             }
//                             className="text-gray-400 hover:text-gray-600"
//                           >
//                             <XCircle size={24} />
//                           </button>
//                         </div>
//                       </div>
//                       <div className="p-4">
//                         {(() => {
//                           const fileObj = fileMap.get(selectedApplication.id)?.[
//                             selectedApplication.previewFileIndex
//                           ];
//                           if (fileObj instanceof File) {
//                             const fileUrl = URL.createObjectURL(fileObj);
//                             setSelectedApplication((prev) => ({
//                               ...prev,
//                               previewFileUrl: fileUrl,
//                             }));
//                             return (
//                               <object
//                                 data={fileUrl}
//                                 type="application/pdf"
//                                 width="100%"
//                                 height="600px"
//                                 className="rounded-lg"
//                               >
//                                 <p className="text-gray-500 text-center">
//                                   Your browser does not support PDF preview.{" "}
//                                   <a
//                                     href={fileUrl}
//                                     download={
//                                       selectedApplication.files[
//                                         selectedApplication.previewFileIndex
//                                       ]?.name ||
//                                       `file-${
//                                         selectedApplication.previewFileIndex + 1
//                                       }`
//                                     }
//                                     className="text-blue-600 hover:underline"
//                                   >
//                                     Download the file
//                                   </a>{" "}
//                                   to view it.
//                                 </p>
//                               </object>
//                             );
//                           }
//                           return (
//                             <p className="text-gray-500 text-center">
//                               File unavailable for preview
//                             </p>
//                           );
//                         })()}
//                       </div>
//                     </div>
//                   </div>
//                 )}
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Admin;
// Import necessary React hooks and icons from lucide-react library
import React, { useState, useEffect } from "react";
import {
  Users,
  Search,
  Download,
  Trash2,
  CheckCircle,
  XCircle,
  Clock,
  Bell,
  User,
  LayoutDashboard,
  FileText,
  UserCheck,
  Settings,
  Upload,
  Camera,
  Calendar,
  Menu,
  X,
} from "lucide-react";
// Import the Zustand store that manages application state
import useApplicationStore from "../../Store/UseApplicationStore";

const Admin = () => {
  // ==================== ZUSTAND STORE ACCESS ====================
  // Destructure the necessary state and functions from the Zustand store
  const {
    applications,              // Array of all submitted applications
    updateApplicationStatus,   // Function to update an application's status (pending/approved/rejected)
    deleteApplication,         // Function to delete an application
    deadlines,                 // Array of application deadlines
    updateDeadline,           // Function to update deadline information
    getFileFromBase64,        // Helper function to convert base64 back to File objects (if needed)
  } = useApplicationStore();

  // ==================== LOCAL STATE MANAGEMENT ====================
  // Search and filter states for applications table
  const [searchTerm, setSearchTerm] = useState("");           // Store search query
  const [filterStatus, setFilterStatus] = useState("all");     // Filter by status (all/pending/approved/rejected)
  const [filterSkill, setFilterSkill] = useState("all");       // Filter by skill
  const [filterUniversity, setFilterUniversity] = useState("all"); // Filter by university
  
  // UI state management
  const [selectedApplication, setSelectedApplication] = useState(null); // Currently viewed application details
  const [activeTab, setActiveTab] = useState("dashboard");    // Current active tab in sidebar
  const [profileImage, setProfileImage] = useState(null);     // Admin profile image
  const [showProfileModal, setShowProfileModal] = useState(false);   // Toggle profile upload modal
  const [editingDeadline, setEditingDeadline] = useState(null);      // Currently editing deadline
  const [showMobileMenu, setShowMobileMenu] = useState(false);       // Toggle mobile sidebar menu

  // ==================== SIDE EFFECTS ====================
  // Cleanup effect: Revoke object URLs when component unmounts or selectedApplication changes
  // This prevents memory leaks from blob URLs
  useEffect(() => {
    return () => {
      if (selectedApplication?.previewFileUrl) {
        URL.revokeObjectURL(selectedApplication.previewFileUrl);
      }
    };
  }, [selectedApplication]);

  // ==================== COMPUTED VALUES ====================
  // Calculate statistics for dashboard cards
  const stats = {
    total: applications.length,
    pending: applications.filter((app) => app.status === "pending").length,
    approved: applications.filter((app) => app.status === "approved").length,
    rejected: applications.filter((app) => app.status === "rejected").length,
  };

  // Extract unique skills and universities for filter dropdowns
  const allSkills = [...new Set(applications.flatMap((app) => app.skills))];
  const allUniversities = [...new Set(applications.map((app) => app.university))];

  // ==================== EVENT HANDLERS ====================
  
  /**
   * Handle profile image upload
   * Reads the selected file and converts it to base64 for display
   */
  const handleProfileImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // Store base64 image
        setShowProfileModal(false);      // Close modal
      };
      reader.readAsDataURL(file);
    }
  };

  /**
   * Filter applications based on search term and filter criteria
   * Searches across: firstName, lastName, email, university, course
   * Filters by: status, skill, university
   */
  const filteredApplications = applications.filter((app) => {
    const searchLower = searchTerm.toLowerCase();
    
    // Check if application matches search term
    const matchesSearch =
      searchTerm === "" ||
      app.firstName.toLowerCase().includes(searchLower) ||
      app.lastName.toLowerCase().includes(searchLower) ||
      app.email.toLowerCase().includes(searchLower) ||
      app.university.toLowerCase().includes(searchLower) ||
      app.course.toLowerCase().includes(searchLower);

    // Check if application matches filter criteria
    const matchesStatus = filterStatus === "all" || app.status === filterStatus;
    const matchesSkill = filterSkill === "all" || app.skills.includes(filterSkill);
    const matchesUniversity = filterUniversity === "all" || app.university === filterUniversity;

    return matchesSearch && matchesStatus && matchesSkill && matchesUniversity;
  });

  /**
   * Get appropriate Tailwind CSS classes for status badges
   * @param {string} status - Application status (approved/rejected/pending)
   * @returns {string} - Tailwind classes for badge styling
   */
  const getStatusBadgeStyle = (status) => {
    switch (status) {
      case "approved":
        return "bg-teal-100 text-teal-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  // ==================== RENDER FUNCTIONS ====================
  
  /**
   * Render Dashboard Tab
   * Shows statistics cards and recent activity list
   */
  const renderDashboard = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
      
      {/* Statistics Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Applicants Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-1">
                {stats.total}
              </div>
              <div className="text-gray-600 text-sm">Total Applicants</div>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="text-blue-600" size={24} />
            </div>
          </div>
        </div>

        {/* Pending Applications Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-1">
                {stats.pending}
              </div>
              <div className="text-gray-600 text-sm">Pending</div>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Clock className="text-orange-600" size={24} />
            </div>
          </div>
        </div>

        {/* Shortlisted Applications Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-1">
                {stats.approved}
              </div>
              <div className="text-gray-600 text-sm">Shortlisted</div>
            </div>
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="text-teal-600" size={24} />
            </div>
          </div>
        </div>

        {/* Declined Applications Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-1">
                {stats.rejected}
              </div>
              <div className="text-gray-600 text-sm">Declined</div>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <XCircle className="text-red-600" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Activity
        </h3>
        {applications.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No applications yet</p>
        ) : (
          <div className="space-y-3">
            {/* Show only the 5 most recent applications */}
            {applications.slice(0, 5).map((app) => (
              <div
                key={app.id}
                className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
              >
                {/* Applicant Info */}
                <div className="flex items-center gap-3">
                  {/* Avatar with initials */}
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">
                      {app.firstName[0]}{app.lastName[0]}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      {app.firstName} {app.lastName}
                    </div>
                    <div className="text-sm text-gray-600">
                      {app.university}
                    </div>
                  </div>
                </div>
                {/* Status Badge */}
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeStyle(
                    app.status
                  )}`}
                >
                  {app.status === "approved"
                    ? "Shortlisted"
                    : app.status === "rejected"
                    ? "Declined"
                    : "Pending"}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  /**
   * Render Applications Tab
   * Shows filterable table of all applications with export functionality
   */
  const renderApplications = () => (
    <div className="space-y-6">
      {/* Header with Export Button */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Applications</h2>
        <button
          onClick={() => {
            // Export applications as JSON file
            const dataStr = JSON.stringify(applications, null, 2);
            const dataBlob = new Blob([dataStr], { type: "application/json" });
            const url = URL.createObjectURL(dataBlob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `applications_${new Date().toISOString().split("T")[0]}.json`;
            link.click();
            URL.revokeObjectURL(url); // Clean up
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
        >
          <Download size={18} />
          Export
        </button>
      </div>

      {/* Filter Controls */}
      {allSkills.length > 0 || allUniversities.length > 0 ? (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Skills Filter Dropdown */}
            <select
              value={filterSkill}
              onChange={(e) => setFilterSkill(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              <option value="all">All Skills</option>
              {allSkills.map((skill) => (
                <option key={skill} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
            
            {/* University Filter Dropdown */}
            <select
              value={filterUniversity}
              onChange={(e) => setFilterUniversity(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              <option value="all">All Universities</option>
              {allUniversities.map((uni) => (
                <option key={uni} value={uni}>
                  {uni}
                </option>
              ))}
            </select>
            
            {/* Status Filter Dropdown */}
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Shortlisted</option>
              <option value="rejected">Declined</option>
            </select>
          </div>
        </div>
      ) : null}

      {/* Applications Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            {/* Table Header */}
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Institution
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Skills
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            
            {/* Table Body */}
            <tbody className="divide-y divide-gray-100">
              {filteredApplications.length === 0 ? (
                // Empty state
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center text-gray-500">
                    No applications found
                  </td>
                </tr>
              ) : (
                // Application rows
                filteredApplications.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50 transition">
                    {/* Name Column */}
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">
                        {app.firstName} {app.lastName}
                      </div>
                    </td>
                    
                    {/* Institution Column */}
                    <td className="px-6 py-4">
                      <div className="text-gray-700">{app.university}</div>
                    </td>
                    
                    {/* Skills Column - Show first 2 skills + count */}
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-2">
                        {app.skills.slice(0, 2).map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                        {app.skills.length > 2 && (
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                            +{app.skills.length - 2}
                          </span>
                        )}
                      </div>
                    </td>
                    
                    {/* Status Column */}
                    <td className="px-6 py-4">
                      <span
                        className={`px-4 py-1.5 rounded-full text-sm font-medium ${getStatusBadgeStyle(
                          app.status
                        )}`}
                      >
                        {app.status === "approved"
                          ? "Shortlisted"
                          : app.status === "rejected"
                          ? "Declined"
                          : "Pending"}
                      </span>
                    </td>
                    
                    {/* Actions Column */}
                    <td className="px-6 py-4">
                      <button
                        onClick={() => setSelectedApplication(app)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  /**
   * Render Shortlisted Tab
   * Shows grid of approved candidates
   */
  const renderShortlisted = () => {
    // Filter to show only approved applications
    const shortlisted = applications.filter((app) => app.status === "approved");

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Shortlisted Candidates
        </h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          {shortlisted.length === 0 ? (
            // Empty state
            <p className="text-gray-500 text-center py-8">
              No shortlisted candidates yet
            </p>
          ) : (
            // Grid of candidate cards
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {shortlisted.map((app) => (
                <div
                  key={app.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
                >
                  {/* Candidate Header with Avatar */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">
                        {app.firstName[0]}{app.lastName[0]}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {app.firstName} {app.lastName}
                      </div>
                      <div className="text-sm text-gray-600">
                        {app.university}
                      </div>
                    </div>
                  </div>
                  
                  {/* Skills Preview - First 3 skills */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {app.skills.slice(0, 3).map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* View Details Button */}
                  <button
                    onClick={() => setSelectedApplication(app)}
                    className="w-full px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  /**
   * Render Settings Tab
   * Shows account settings and notification preferences
   */
  const renderSettings = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="space-y-6">
          {/* Account Settings Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Account Settings
            </h3>
            <div className="space-y-4">
              {/* Company Name Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  defaultValue="Jnard IT Consult"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="admin@jnardit.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Notification Preferences Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Notification Preferences
            </h3>
            <div className="space-y-3">
              {/* Email Notifications Checkbox */}
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <span className="text-gray-700">
                  Email notifications for new applications
                </span>
              </label>
              
              {/* Daily Reports Checkbox */}
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <span className="text-gray-700">Daily summary reports</span>
              </label>
            </div>
          </div>

          {/* Save Button */}
          <button
            onClick={() => {
              if (window.confirm("Are you sure you want to save these settings?")) {
                alert("Settings saved successfully!");
              }
            }}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );

  /**
   * Render Deadlines Tab
   * Shows and manages application deadlines
   */
  const renderDeadlines = () => {
    /**
     * Calculate days remaining until deadline
     * @param {string} deadlineDate - Deadline date string
     * @returns {number} - Number of days (negative if overdue)
     */
    const getDaysUntilDeadline = (deadlineDate) => {
      const today = new Date();
      const deadline = new Date(deadlineDate);
      const diffTime = deadline - today;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    };

    /**
     * Get appropriate color classes based on days remaining
     * @param {number} days - Days until deadline
     * @returns {string} - Tailwind CSS classes
     */
    const getDeadlineColor = (days) => {
      if (days < 0) return "bg-gray-100 text-gray-800";  // Overdue
      if (days <= 3) return "bg-red-100 text-red-800";    // Urgent (3 days or less)
      if (days <= 7) return "bg-orange-100 text-orange-800"; // Warning (7 days or less)
      return "bg-green-100 text-green-800";               // Safe (more than 7 days)
    };

    /**
     * Get human-readable deadline message
     * @param {number} days - Days until deadline
     * @returns {string} - Formatted message
     */
    const getDeadlineMessage = (days) => {
      if (days < 0) return `${Math.abs(days)} days overdue`;
      if (days === 0) return "Due today";
      if (days === 1) return "Due tomorrow";
      return `${days} days left`;
    };

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Manage Deadlines</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Current Deadlines
          </h3>
          {deadlines.length === 0 ? (
            // Empty state
            <p className="text-gray-500 text-center py-8">No deadlines set</p>
          ) : (
            // List of deadlines
            <div className="space-y-4">
              {deadlines.map((deadline) => {
                const daysLeft = getDaysUntilDeadline(deadline.deadline);
                return (
                  <div
                    key={deadline.id}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-3 border-b border-gray-100 last:border-0"
                  >
                    {/* Deadline Info */}
                    <div className="flex items-center gap-3">
                      {/* Calendar Icon */}
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Calendar className="text-blue-600" size={20} />
                      </div>
                      
                      {/* Deadline Details */}
                      <div className="min-w-0 flex-1">
                        <div className="font-medium text-gray-900 truncate">
                          {deadline.title}
                        </div>
                        <div className="text-sm text-gray-600">
                          Deadline: {deadline.deadline}
                        </div>
                        <div className="text-sm text-gray-600">
                          Created: {deadline.createdDate}
                        </div>
                      </div>
                    </div>
                    
                    {/* Deadline Actions and Status */}
                    <div className="flex flex-wrap items-center gap-2">
                      {/* Days Remaining Badge */}
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getDeadlineColor(
                          daysLeft
                        )}`}
                      >
                        {getDeadlineMessage(daysLeft)}
                      </span>
                      
                      {/* Open/Closed Status Badge */}
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          deadline.status === "active"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {deadline.status === "active" ? "Open" : "Closed"}
                      </span>
                      
                      {/* Edit Button */}
                      <button
                        onClick={() => setEditingDeadline(deadline)}
                        className="px-3 sm:px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition text-sm font-medium"
                      >
                        Edit
                      </button>
                      
                      {/* Toggle Open/Close Button */}
                      <button
                        onClick={() => {
                          updateDeadline(deadline.id, {
                            ...deadline,
                            status: deadline.status === "active" ? "closed" : "active",
                          });
                        }}
                        className="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium whitespace-nowrap"
                      >
                        Toggle {deadline.status === "active" ? "Close" : "Open"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  };

  // ==================== MAIN RENDER ====================
  return (
    <>
      {/* Import Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        * {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      <div className="flex min-h-screen bg-gray-50">
        {/* Mobile Menu Overlay - Shows when mobile menu is open */}
        {showMobileMenu && (
          <div
            className="fixed inset-0  bg-opacity-50 z-40 lg:hidden"
            onClick={() => setShowMobileMenu(false)}
          />
        )}

        {/* ==================== SIDEBAR ====================  */}
        {/* Sidebar - Fixed on mobile (slides in), static on desktop */}
        <div
          className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-blue-600 text-white transform transition-transform duration-300 ease-in-out ${
            showMobileMenu ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 flex flex-col`}
        >
          {/* Sidebar Header - Logo and Close Button */}
          <div className="flex items-center justify-between p-6 border-b border-blue-500">
            <div className="flex items-center gap-3">
              {/* Company Logo */}
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
              </div>
              <span className="text-xl font-semibold">Jnard IT</span>
            </div>
            {/* Close Button (Mobile Only) */}
            <button
              onClick={() => setShowMobileMenu(false)}
              className="lg:hidden text-white hover:bg-blue-700 p-1 rounded"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 p-4">
            {/* Dashboard Tab */}
            <button
              onClick={() => {
                setActiveTab("dashboard");
                setShowMobileMenu(false); // Close mobile menu after selection
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition ${
                activeTab === "dashboard" ? "bg-blue-700" : "hover:bg-blue-700"
              }`}
            >
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </button>

            {/* Applications Tab */}
            <button
              onClick={() => {
                setActiveTab("applications");
                setShowMobileMenu(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition ${
                activeTab === "applications"
                  ? "bg-blue-700"
                  : "hover:bg-blue-700"
              }`}
            >
              <FileText size={20} />
              <span>Applications</span>
            </button>

            {/* Shortlisted Tab */}
            <button
              onClick={() => {
                setActiveTab("shortlisted");
                setShowMobileMenu(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition ${
                activeTab === "shortlisted"
                  ? "bg-blue-700"
                  : "hover:bg-blue-700"
              }`}
            >
              <UserCheck size={20} />
              <span>Shortlisted</span>
            </button>

            {/* Deadlines Tab */}
            <button
              onClick={() => {
                setActiveTab("deadlines");
                setShowMobileMenu(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition ${
                activeTab === "deadlines" ? "bg-blue-700" : "hover:bg-blue-700"
              }`}
            >
              <Calendar size={20} />
              <span>Deadlines</span>
            </button>

            {/* Settings Tab */}
            <button
              onClick={() => {
                setActiveTab("settings");
                setShowMobileMenu(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                activeTab === "settings" ? "bg-blue-700" : "hover:bg-blue-700"
              }`}
            >
              <Settings size={20} />
              <span>Settings</span>
            </button>
          </nav>
        </div>

        {/* ==================== MAIN CONTENT AREA ====================  */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top Header Bar */}
          <div className="bg-white px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between gap-4">
              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setShowMobileMenu(true)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <Menu size={24} className="text-gray-600" />
              </button>

              {/* Search Bar */}
              <div className="flex-1 max-w-md relative">
                <input
                  type="text"
                  placeholder="Search applications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white text-sm"
                />
                {/* Search Icon */}
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>

              {/* Right Side Actions */}
              <div className="flex items-center gap-2 sm:gap-4">
                {/* Notification Bell */}
                <button className="relative p-2 hover:bg-gray-100 rounded-lg transition">
                  <Bell size={20} className="text-gray-600" />
                  {/* Notification Badge - Shows pending count */}
                  {stats.pending > 0 && (
                    <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">
                        {stats.pending}
                      </span>
                    </span>
                  )}
                </button>

                {/* Profile Avatar */}
                <button
                  onClick={() => setShowProfileModal(true)}
                  className="relative w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition group"
                >
                  {profileImage ? (
                    // Show uploaded profile image
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    // Show default user icon
                    <User size={20} className="text-white" />
                  )}
                  {/* Camera overlay on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <Camera size={16} className="text-white" />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area - Renders active tab content */}
          <div className="flex-1 overflow-auto p-4 sm:p-6">
            {activeTab === "dashboard" && renderDashboard()}
            {activeTab === "applications" && renderApplications()}
            {activeTab === "shortlisted" && renderShortlisted()}
            {activeTab === "deadlines" && renderDeadlines()}
            {activeTab === "settings" && renderSettings()}
          </div>
        </div>

        {/* ==================== MODALS ====================  */}

        {/* Profile Image Upload Modal */}
        {showProfileModal && (
          <div className="fixed inset-0 bg-blue-600 bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-md w-full p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Upload Profile Picture
              </h2>
              <div className="space-y-4">
                {/* Image Preview */}
                <div className="flex justify-center">
                  <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User size={48} className="text-gray-400" />
                    )}
                  </div>
                </div>

                {/* File Upload Button */}
                <div>
                  <label className="block w-full cursor-pointer">
                    <div className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-center flex items-center justify-center gap-2">
                      <Upload size={18} />
                      <span>Choose Image</span>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleProfileImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Cancel Button */}
                <button
                  onClick={() => setShowProfileModal(false)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Deadline Modal */}
        {editingDeadline && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-md w-full p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Edit Deadline
              </h2>
              <div className="space-y-4">
                {/* Title Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    defaultValue={editingDeadline.title}
                    onChange={(e) =>
                      setEditingDeadline({
                        ...editingDeadline,
                        title: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Deadline Date Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Deadline Date
                  </label>
                  <input
                    type="date"
                    defaultValue={editingDeadline.deadline}
                    onChange={(e) =>
                      setEditingDeadline({
                        ...editingDeadline,
                        deadline: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {/* Save Button */}
                  <button
                    onClick={() => {
                      updateDeadline(editingDeadline.id, editingDeadline);
                      setEditingDeadline(null); // Close modal
                    }}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Save Changes
                  </button>

                  {/* Cancel Button */}
                  <button
                    onClick={() => setEditingDeadline(null)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== APPLICATION DETAILS MODAL ====================  */}
        {/* Shows full details of selected application with file management */}
        {selectedApplication && (
          <div className="fixed inset-0 bg-opacity-50 bg-blue-600  flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header - Sticky at top */}
              <div className="p-6 border-b sticky top-0 bg-white z-10">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Application Details
                  </h2>
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedApplication(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <XCircle size={24} />
                  </button>
                </div>
              </div>

              {/* Modal Content - Scrollable */}
              <div className="p-6 space-y-6">
                {/* Personal Information Section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <div>
                      <p className="text-sm text-gray-600">Name</p>
                      <p className="text-base font-medium text-gray-900">
                        {selectedApplication.firstName}{" "}
                        {selectedApplication.lastName}
                      </p>
                    </div>

                    {/* Email Field */}
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="text-base font-medium text-gray-900">
                        {selectedApplication.email}
                      </p>
                    </div>

                    {/* Phone Field */}
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="text-base font-medium text-gray-900">
                        {selectedApplication.phone}
                      </p>
                    </div>

                    {/* Date of Birth Field */}
                    <div>
                      <p className="text-sm text-gray-600">Date of Birth</p>
                      <p className="text-base font-medium text-gray-900">
                        {selectedApplication.dateOfBirth}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Education Section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Education
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* University Field */}
                    <div>
                      <p className="text-sm text-gray-600">University</p>
                      <p className="text-base font-medium text-gray-900">
                        {selectedApplication.university}
                      </p>
                    </div>

                    {/* Course Field */}
                    <div>
                      <p className="text-sm text-gray-600">Course</p>
                      <p className="text-base font-medium text-gray-900">
                        {selectedApplication.course}
                      </p>
                    </div>

                    {/* Year of Study Field */}
                    <div>
                      <p className="text-sm text-gray-600">Year of Study</p>
                      <p className="text-base font-medium text-gray-900">
                        {selectedApplication.yearOfStudy}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills Section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Skills
                  </h3>
                  {/* Display all skills as badges */}
                  <div className="flex flex-wrap gap-2">
                    {selectedApplication.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* About/Description Section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    About
                  </h3>
                  <p className="text-gray-700">
                    {selectedApplication.description}
                  </p>
                </div>

                {/* Uploaded Documents Section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Uploaded Documents
                  </h3>
                  {selectedApplication.files &&
                  selectedApplication.files.length > 0 ? (
                    <div className="space-y-3">
                      {/* Map through each uploaded file */}
                      {selectedApplication.files.map((file, index) => {
                        const isPDF = file.type === "application/pdf";
                        const hasData = file.data; // Check if base64 data exists

                        return (
                          <div
                            key={index}
                            className="flex items-center justify-between px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
                          >
                            {/* File Info */}
                            <div className="flex items-center gap-3">
                              {/* File Icon */}
                              <svg
                                className="w-5 h-5 text-blue-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                />
                              </svg>

                              {/* File Details */}
                              <div>
                                <p className="text-sm font-medium text-gray-900">
                                  {file.name || `File ${index + 1}`}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {file.size
                                    ? `${(file.size / 1024).toFixed(2)} KB`
                                    : "Size unavailable"}
                                </p>
                              </div>
                            </div>

                            {/* File Actions */}
                            <div className="flex items-center gap-2">
                              {/* Preview Button - Only for PDFs with data */}
                              {hasData && isPDF ? (
                                <button
                                  onClick={() =>
                                    setSelectedApplication({
                                      ...selectedApplication,
                                      previewFileIndex: index,
                                    })
                                  }
                                  className="text-blue-600 hover:text-blue-800 p-2"
                                  title="Preview"
                                >
                                  <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                </button>
                              ) : (
                                <span className="text-gray-500 text-xs p-2">
                                  {hasData
                                    ? "Preview not available"
                                    : "File unavailable"}
                                </span>
                              )}

                              {/* Download Button - Uses base64 data */}
                              {hasData ? (
                                <a
                                  href={file.data}
                                  download={file.name || `file-${index + 1}`}
                                  className="text-blue-600 hover:text-blue-800 p-2"
                                  title="Download"
                                >
                                  <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                    />
                                  </svg>
                                </a>
                              ) : (
                                <span className="text-gray-500 text-xs p-2">
                                  Download unavailable
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    // No files uploaded
                    <p className="text-gray-500">No documents uploaded</p>
                  )}
                </div>

                {/* Action Buttons - Approve, Decline, Delete */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  {/* Approve Button */}
                  <button
                    onClick={() => {
                      updateApplicationStatus(
                        selectedApplication.id,
                        "approved"
                      );
                      setSelectedApplication(null); // Close modal
                    }}
                    className="flex-1 bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition font-medium"
                  >
                    Approve
                  </button>

                  {/* Decline Button */}
                  <button
                    onClick={() => {
                      updateApplicationStatus(
                        selectedApplication.id,
                        "rejected"
                      );
                      setSelectedApplication(null);
                    }}
                    className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition font-medium"
                  >
                    Decline
                  </button>

                  {/* Delete Button */}
                  <button
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you want to delete this application?"
                        )
                      ) {
                        deleteApplication(selectedApplication.id);
                        setSelectedApplication(null);
                      }
                    }}
                    className="flex-1 bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition font-medium"
                  >
                    <Trash2 size={18} className="inline mr-2" />
                    Delete
                  </button>
                </div>
              </div>

              {/* ==================== PDF PREVIEW MODAL ====================  */}
              {/* Nested modal for PDF preview - Shows when previewFileIndex is set */}
              {selectedApplication.previewFileIndex !== undefined &&
                selectedApplication.files[selectedApplication.previewFileIndex]
                  ?.type === "application/pdf" &&
                selectedApplication.files[selectedApplication.previewFileIndex]
                  ?.data && (
                  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] flex flex-col">
                      {/* PDF Preview Header */}
                      <div className="p-4 border-b">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-gray-900">
                            Preview:{" "}
                            {selectedApplication.files[
                              selectedApplication.previewFileIndex
                            ]?.name ||
                              `File ${
                                selectedApplication.previewFileIndex + 1
                              }`}
                          </h3>
                          {/* Close Preview Button */}
                          <button
                            onClick={() =>
                              setSelectedApplication({
                                ...selectedApplication,
                                previewFileIndex: undefined,
                              })
                            }
                            className="text-gray-400 hover:text-gray-600"
                          >
                            <XCircle size={24} />
                          </button>
                        </div>
                      </div>

                      {/* PDF Viewer Container */}
                      <div className="flex-1 overflow-auto p-4">
                        <object
                          data={
                            selectedApplication.files[
                              selectedApplication.previewFileIndex
                            ].data
                          }
                          type="application/pdf"
                          width="100%"
                          height="600px"
                          className="rounded-lg"
                        >
                          {/* Fallback message if browser doesn't support PDF preview */}
                          <p className="text-gray-500 text-center">
                            Your browser does not support PDF preview.{" "}
                            <a
                              href={
                                selectedApplication.files[
                                  selectedApplication.previewFileIndex
                                ].data
                              }
                              download={
                                selectedApplication.files[
                                  selectedApplication.previewFileIndex
                                ]?.name ||
                                `file-${
                                  selectedApplication.previewFileIndex + 1
                                }`
                              }
                              className="text-blue-600 hover:underline"
                            >
                              Download the file
                            </a>{" "}
                            to view it.
                          </p>
                        </object>
                      </div>
                    </div>
                  </div>
                )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Admin;
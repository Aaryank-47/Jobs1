import { useAuth } from "../context/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./JobList.css";

export default function Hero() {
  const { authUser, logout } = useAuth();
  const navigate = useNavigate();

  // State for dropdown selections
  const [filters, setFilters] = useState({
    remote: "",
    jobType: "",
    experience_level: "",
    time_posted: "",
    industry: "",
  });

  // If the user is not logged in, redirect to the login page
  if (!authUser) {
    navigate("/");
    return null;
  }

  // Handle dropdown change
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="job-list-container">
      {/* Profile Icon (Top Right) */}
      <FaUserCircle className="profile-icon" onClick={() => navigate("/profile")} />

      {/* Logout Button (Bottom Middle) */}
      <button className="logout-button" onClick={() => { logout(); navigate("/"); }}>Logout</button>

      {/* Search Bar */}
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Job Title / Keywords" />
        <input type="text" className="search-input" placeholder="City / State / Zip Code" />
        <button className="search-button">Search</button>
      </div>

      {/* Dropdown Filters */}
      <div className="filter-container">
        <select className="filter-dropdown" name="remote" value={filters.remote} onChange={handleFilterChange}>
          <option value="">Remote</option>
          <option value="remote">Remote</option>
          <option value="onsite">On-Site</option>
          <option value="hybrid">Hybrid</option>
        </select>

        <select className="filter-dropdown" name="jobType" value={filters.jobType} onChange={handleFilterChange}>
          <option value="">Job Type</option>
          <option value="full-time">Full-Time</option>
          <option value="part-time">Part-Time</option>
          <option value="contract">Contract</option>
          <option value="internship">Internship</option>
        </select>

        
        <input
          className="filter-dropdown"
          type="number"
          name="time_posted"
          value={filters.time_posted}
          onChange={handleFilterChange}
          placeholder="Time Posted (hrs)"
          min="0"
        />

        <select className="filter-dropdown" name="jobLanguage" value={filters.jobLanguage} onChange={handleFilterChange}>
          <option value="">Job Language</option>
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
          <option value="spanish">Spanish</option>
          <option value="german">German</option>
        </select>

        <select className="filter-dropdown" name="experience_level" value={filters.experience_level} onChange={handleFilterChange}>
          <option value="">Internship Level</option>
          <option value="Entery_level"> Entry Level</option>
          <option value="associate"> Associate</option>
          <option value="Mid-senior_level">Mid-Senior level</option>
          <option value="director">Director</option>
          <option value="executive">Executive</option>
        </select>

        <select className="filter-dropdown" name="industry" value={filters.industry} onChange={handleFilterChange}>
          <option value="">Industry</option>
          <option value="tech">Tech</option>
          <option value="finance">Finance</option>
          <option value="healthcare">Healthcare</option>
          <option value="education">Education</option>
        </select>
      </div>

      {/* Animated Title */}
      <h1 className="animated-title">
        <span className="animated-word">Find</span>
        <span className="animated-word">Your</span>
        <span className="animated-word">Dream</span>
        <span className="animated-word">Job</span>
      </h1>

      {/* Job Listings Placeholder */}
      <div className="job-list-content">
        {/* Jobs will be listed here dynamically */}
      </div>
    </div>
  );
}





















// import { useAuth } from "./frontend/src/Components/context/AuthProvider";
// import { useNavigate } from "react-router-dom";

// export default function Hero() {
//   const { authUser, logout } = useAuth(); // Get user authentication and logout function
//   const navigate = useNavigate(); // Navigation hook

//   // If the user is not logged in, redirect to the login page
//   if (!authUser) {
//     navigate("/");
//     return null;
//   }

//   return (
//     <div style={{
//       minHeight: "100vh",minWidth: "100vw", display: "flex", flexDirection: "column",
//       alignItems: "center", justifyContent: "center", backgroundColor: "#1a1a1a", color: "white"
//     }}>
//       <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Welcome to the Hero Page</h1>

//       <div style={{ marginTop: "2rem", display: "flex", gap: "1.5rem" }}>
//         {/* Profile Button */}
//         <button onClick={() => navigate("/profile")}
//           style={{
//             padding: "0.75rem 1.5rem", fontSize: "1.25rem", backgroundColor: "#4CAF50",
//             border: "none", color: "white", borderRadius: "8px", cursor: "pointer"
//           }}>
//           Profile
//         </button>

//         {/* Logout Button */}
//         <button onClick={() => { logout(); navigate("/"); }}
//           style={{
//             padding: "0.75rem 1.5rem", fontSize: "1.25rem", backgroundColor: "#e63946",
//             border: "none", color: "white", borderRadius: "8px", cursor: "pointer"
//           }}>
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// }

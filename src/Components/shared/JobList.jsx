import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./JobList.css";
import { useState } from "react";
import { useAuth } from "../context/AuthProvider";


function JobList() {

  const{authUser,logout} = useAuth();
  const navigate = useNavigate();

  // State for dropdown selections
  const [filters, setFilters] = useState({
    remote: "",
    jobType: "",
    company: "",
    jobLanguage: "",
    educationLevel: "",
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

        <select className="filter-dropdown" name="company" value={filters.company} onChange={handleFilterChange}>
          <option value="">Company</option>
          <option value="google">Google</option>
          <option value="amazon">Amazon</option>
          <option value="microsoft">Microsoft</option>
          <option value="meta">Meta</option>
        </select>

        <select className="filter-dropdown" name="jobLanguage" value={filters.jobLanguage} onChange={handleFilterChange}>
          <option value="">Job Language</option>
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
          <option value="spanish">Spanish</option>
          <option value="german">German</option>
        </select>

        <select className="filter-dropdown" name="educationLevel" value={filters.educationLevel} onChange={handleFilterChange}>
          <option value="">Education Level</option>
          <option value="high-school">High School</option>
          <option value="bachelors">Bachelor&apos;s</option>
          <option value="masters">Master&apos;s</option>
          <option value="phd">PhD</option>
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

export default JobList;
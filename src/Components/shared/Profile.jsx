import { useState } from "react";
import { motion } from "framer-motion";
import "./Profile.css";

const ProfileSetup = () => {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedIn: "",
    github: "",
    location: "",
    languages: "",
    workExperience: "",
    currentlyWorking: "",
    college: "",
    domain: "",
    skills: "",
    preferredJobs: "",
    profilePicture: null,
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleNext = () => {
    setPage(2);
  };

  const handleBack = () => {
    setPage(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="profile-container">
      <motion.div 
        initial={{ opacity: 0, x: page === 1 ? -100 : 100 }} 
        animate={{ opacity: 1, x: 0 }} 
        exit={{ opacity: 0, x: page === 1 ? 100 : -100 }} 
        transition={{ duration: 0.5 }} 
        key={page}
        className="form-section"
      >
        {page === 1 ? (
          <>
            <h2>Basic Details</h2>
            <p>Enter your basic details to create your profile</p>
            <form>
              <div className="file-upload">
                <label>Profile Picture</label>
                <input type="file" name="profilePicture" onChange={handleFileChange} required />
              </div>

              <div className="file-upload">
                <label>Resume Upload</label>
                <input type="file" name="resume" onChange={handleFileChange} required/>
              </div>

              <div className="input-group">
                <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required/>
                <input type="email" name="email" placeholder="Email ID" onChange={handleChange} required/>
              </div>

              <div className="input-group">
                <input type="text" name="phone" placeholder="Phone Number (Optional)" onChange={handleChange} />
                <input type="text" name="linkedIn" placeholder="LinkedIn Profile" onChange={handleChange} />
              </div>

              <div className="input-group">
                <input type="text" name="github" placeholder="GitHub Profile" onChange={handleChange} />
                <input type="text" name="location" placeholder="Location (City, State)" onChange={handleChange} />
              </div>

              <input type="text" name="languages" placeholder="Languages Spoken" onChange={handleChange} />

              <button type="button" className="next-btn" onClick={handleNext}>Next</button>
            </form>
          </>
        ) : (
          <>
            <h2>Professional Background</h2>
            <p>Enter details about your work experience and skills</p>
            <form onSubmit={handleSubmit}>
              <textarea name="workExperience" placeholder="Work Experience (if any)" onChange={handleChange}></textarea>

              <div className="radio-group">
                <label>Currently Working?</label>
                <input type="radio" name="currentlyWorking" value="Yes" onChange={handleChange} /> Yes
                <input type="radio" name="currentlyWorking" value="No" onChange={handleChange} /> No
              </div>

              <div className="input-group">
                <input type="text" name="college" placeholder="College / University" onChange={handleChange} />
                <input type="text" name="domain" placeholder="Domain (e.g., IT, Healthcare)" onChange={handleChange} />
              </div>

              <input type="text" name="skills" placeholder="Key Skills" onChange={handleChange} />
              <input type="text" name="preferredJobs" placeholder="Preferred Jobs (e.g., Full-time, Freelance)" onChange={handleChange} />

              <div className="button-group">
                <button type="button" className="back-btn" onClick={handleBack}>Back</button>
                <button type="submit" className="submit-btn">Save Profile</button>
              </div>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default ProfileSetup;
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "./Profile.css";

const UserProfile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const userId = "67bcbb43fbbf50d22dc878dd";

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/users/getProfile/${userId}`
        );
        setUserData(response.data.user);
      } catch (error) {
        toast.error("Failed to load profile data",error);
      }
    };

    fetchUserProfile();
  }, []);

  if (!userData) {
    return <div className="loading">Loading profile...</div>;
  }

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-details">
        <img
          src={userData.profilePhoto || "default-avatar.png"}
          alt="Profile"
          className="profile-picture"
        />
        <h3>{userData.name}</h3>
        <p>Email: {userData.email}</p>
        <p>Phone: {userData.phoneNumber || "N/A"}</p>
        <p>LinkedIn: <a href={userData.linkedIn} target="_blank">{userData.linkedIn}</a></p>
        <p>GitHub: <a href={userData.github} target="_blank">{userData.github}</a></p>
        <p>College: {userData.college}</p>
        <p>Work Experience: {userData.workExperience || "N/A"}</p>
        <p>Currently Working: {userData.workingState ? "Yes" : "No"}</p>
        <p>Skills: {userData.skills}</p>
        <p>Preferred Jobs: {userData.preferredJobs}</p>
        {userData.resume && (
          <p>
            Resume: <a href={userData.resume} target="_blank">Download</a>
          </p>
        )}
      </div>
      <button className="edit-btn" onClick={() => navigate("/edit-profile")}>
        Edit Profile
      </button>
    </div>
  );
};

export default UserProfile;

import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const { authUser, logout } = useAuth(); // Get user authentication and logout function
  const navigate = useNavigate(); // Navigation hook

  // If the user is not logged in, redirect to the login page
  if (!authUser) {
    navigate("/");
    return null;
  }

  return (
    <div style={{
      minHeight: "100vh",minWidth: "100vw", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", backgroundColor: "#1a1a1a", color: "white"
    }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Welcome to the Hero Page</h1>

      <div style={{ marginTop: "2rem", display: "flex", gap: "1.5rem" }}>
        {/* Profile Button */}
        <button onClick={() => navigate("/profile")}
          style={{
            padding: "0.75rem 1.5rem", fontSize: "1.25rem", backgroundColor: "#4CAF50",
            border: "none", color: "white", borderRadius: "8px", cursor: "pointer"
          }}>
          Profile
        </button>

        {/* Logout Button */}
        <button onClick={() => { logout(); navigate("/"); }}
          style={{
            padding: "0.75rem 1.5rem", fontSize: "1.25rem", backgroundColor: "#e63946",
            border: "none", color: "white", borderRadius: "8px", cursor: "pointer"
          }}>
          Logout
        </button>
      </div>
    </div>
  );
}

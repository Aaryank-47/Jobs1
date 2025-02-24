// import { useState } from "react";
// import Login from "./Login";
// const Home = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     return (
//         <div style={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center" }}>
//             <h1>Welcome to the Home Page</h1>
//             <button
//                 className="login-btn"
//                 onClick={() => document.getElementById("login-container").showModal()}  // Open the login modal when clicked
//             >
//                 Login
//             </button>
//             {/* Login Modal */}
//             <Login isOpen={isModalOpen} setIsOpen={setIsModalOpen} />  {/* Pass modal state to Login component */}
//         </div>
//     )
// }

// export default Home;
 
 import { motion } from "framer-motion";
 import { useState,useEffect } from "react";
 import { useAuth } from "../context/AuthProvider.jsx"; 
 import Login from "./Login";
 import Hero from "./Hero"
 import { useNavigate } from "react-router-dom"; // Import useNavigate

 export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {authUser} = useAuth();  // Check if the user is authenticated
  const navigate = useNavigate(); // Get navigate function

  // Redirect to Hero page if user is authenticated
  useEffect(() => {
    if (authUser) {
      navigate("/hero"); // Redirect to Hero page
    }
  }, [authUser, navigate]); 


   return (
     <div style={{ minHeight: "100vh", backgroundColor: "#1a1a1a", color: "white", padding: "1rem", display: "flex", alignItems: "center", justifyContent: "center", width:"100vw" }}>
       <div style={{ width: "100%", maxWidth: "64rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "center" }}>
         <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
           <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
             <div style={{ height: "5rem", width: "5rem", borderRadius: "50%", background: "linear-gradient(to right, #9333ea, #ec4899)", padding: "0.25rem", display: "flex", alignItems: "center", justifyContent: "center", animation: "pulse 2s infinite" }}>
               <div style={{ height: "100%", width: "100%", borderRadius: "50%", backgroundColor: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center" }}>
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ815i8u4_W8gMoIwIA8ZKMOTPB57ctp1pgXA&s" alt="Company Logo" style={{ height: "4.5rem", borderRadius:"70%",width: "4.5rem" }} />
               </div>
             </div>
             <span style={{ fontSize: "1.875rem", fontWeight: "bold", background: "linear-gradient(to right, #c084fc, #ec4899)", WebkitBackgroundClip: "text", color: "transparent" }}>
               CareerLaunch
             </span>
           </motion.div>

           <h1 style={{ fontSize: "3rem", fontWeight: "bold", lineHeight: "1.2", background: "linear-gradient(to right, #c084fc, #ec4899, #f97316)", WebkitBackgroundClip: "text", color: "transparent" }}>
             Your Next Career Move Starts Here
           </h1>
           <p style={{ color: "#9ca3af", fontSize: "1.125rem" }}>
             Join thousands of professionals who've found their dream jobs through our platform.
           </p>

           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
             {[{ title: "Corporate", color: "#9333ea" }, { title: "Tech", color: "#ec4899" }, { title: "Creative", color: "#f97316" }].map((item) => (
               <motion.div key={item.title} whileHover={{ scale: 1.05 }} style={{ background: item.color, padding: "1rem", borderRadius: "1rem", textAlign: "center", cursor: "pointer", color: "white" }}>
                 <p style={{ fontSize: "0.875rem", fontWeight: "500" }}>{item.title}</p>
               </motion.div>
             ))}
           </motion.div>
         </div>

         <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} style={{ display: "flex", flexDirection: "column", gap: "1.5rem", backgroundColor: "#2a2a3c", padding: "2rem", borderRadius: "1rem" }}>
           <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Create your account</h2>
          <div className="btns">
          {authUser ? (
            <p>Redirecting...</p> // Avoid rendering extra components before redirect
          ) : (
            <button className="auth-btn login"
             onClick={() => document.getElementById("login-container").showModal()} >
               login
            </button>
          )}
            <Login isOpen={isModalOpen} setIsOpen={setIsModalOpen} />  {/* Pass modal state to Login component */}
          </div>
         </motion.div>
       </div>
     </div>
   );
 }

// import { useState } from 'react' 
// import { motion, AnimatePresence } from 'framer-motion'
// import Typewriter from 'typewriter-effect'
// import "./Home.css"
// import axios from "axios";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { toast } from "react-toastify";

//function Home() {

  // const location = useLocation();
  // const navigate = useNavigate();
  // const from = location.state?.from?.pathname || "/";
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = async (data) => {
  //   const userInfo = {
  //     fullname: data.fullname,
  //     email: data.email,
  //     password: data.password,
  //   };
  //   await axios
  //     .post("http://localhost:3000/api/v1/users/login", userInfo)
  //     .then((res) => {
  //       console.log(res.data);
  //       if (res.data) {
  //         toast.success("Signup Successfully");
  //         navigate(from, { replace: true });
  //       }
  //       localStorage.setItem("Users", JSON.stringify(res.data.user));
  //     })
  //     .catch((err) => {
  //       if (err.response) {
  //         console.log(err);
  //         toast.error("Error: " + err.response.data.message);
  //       }
  //     });
  // };






//   const [showForm, setShowForm] = useState(null) // null, 'login', or 'signup'

//   const AuthForm = ({ type }) => (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.95 }}
//       className="auth-form"
//     >
//       <h2>{type === 'login' ? 'Welcome Back' : 'Create Account'}</h2>
//       <p className="form-subtitle">
//         {type === 'login' 
//           ? 'Enter your credentials to continue' 
//           : 'Enter your details to get started'}
//       </p>
      
//       {type === 'signup' && (
//         <div className="input-row">
//           <div className="input-group">
//             <label>First Name</label>
//             <input type="text" placeholder="John" />
//           </div>
//           <div className="input-group">
//             <label>Last Name</label>
//             <input type="text" placeholder="Doe" />
//           </div>
//         </div>
//       )}
      
//       <div className="input-group">
//         <label>Email</label>
//         <input type="email" placeholder="name@example.com" />
//       </div>
      
//       <div className="input-group">
//         <label>Password</label>
//         <input type="password" />
//       </div>

//       <motion.button
//         className="submit-btn"
//         whileHover={{ scale: 1.02 }}
//         whileTap={{ scale: 0.98 }}
//       >
//         {type === 'login' ? 'Login' : 'Sign Up'}
//       </motion.button>
//       <p>New User?</p>
//       <button 
//         className="back-btn"
//         onClick={() => setShowForm('signup')}
//       >
//         SignUp
//       </button>
//     </motion.div>
//   )

//   return (
//     <div className="app">
//       <div className="left-section">
//         <div className="intro-content">
//           <h1 className="intro-title">
//             Your Next Career
//             <br />
//             Move{' '}
//             <div className="animated-text">
//               <Typewriter
//                 options={{
//                   strings: ['Starts Here'],
//                   autoStart: true,
//                   loop: true,
//                   delay: 75,
//                 }}
//               />
//             </div>
//           </h1>
//           <p className="intro-subtitle">
//             Join thousands of professionals who have found their
//             dream jobs through our platform.
//           </p>
//         </div>
//       </div>

//       <div className="right-section">
//         <div className="auth-container">
//           <motion.div 
//             className="logo-container"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <img src="https://t3.ftcdn.net/jpg/03/65/42/00/360_F_365420014_xjsSDkKzrhq4gr9GFzP6S97H7MJyNI5B.jpg" alt="CareerLaunch" className="logo" />
//             <h2 className="logo-text">CareerLaunch</h2>
//           </motion.div>

//           <AnimatePresence mode="wait">
//             {!showForm ? (
//               <motion.div 
//                 className="buttons-container"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//               >
//                 <motion.button
//                   className="auth-btn login"
//                   whileHover={{ scale: 1.05 }}
//                   onClick={() => setShowForm('login')}
//                 >
//                   Login button
//                 </motion.button>
//                 <motion.button
//                   className="auth-btn signup"
//                   whileHover={{ scale: 1.05 }}
//                   onClick={() => setShowForm('signup')}
//                 >
//                   Sign Up
//                 </motion.button>
//               </motion.div>
//             ) : (
//               <AuthForm type={showForm} />
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home
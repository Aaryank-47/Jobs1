import { Route, Routes } from 'react-router-dom';  // Importing Route and Routes from 'react-router-dom' to manage navigation
import './App.css';  // Importing the CSS file for styling
import UserProfile from './Components/shared/UserProfile.jsx';
import { Toaster } from 'react-hot-toast';
import Home from './Components/shared/Home.jsx';  // Importing the Home component
import Signup from './Components/shared/signup.jsx';
import Hero from './Components/shared/Hero.jsx';
import Profile from './Components/shared/Profile.jsx';
// import JobList from './Components/shared/JobList.jsx';

// The App function is the main component where all routes and components are managed.
function App() {
  return (
    <>
      <div >
       
          {/* The Routes component manages the routing of the app */}
          <Routes>
            {/* Define the route for Home page. The path '/' will render the Home component */}
            <Route path="/" element={<Home />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path='/userProfile' element={<UserProfile />} />
          </Routes>
          <Toaster />
       
      </div>
    </>
  );
}

export default App;  // Export the App component to be used in index.js
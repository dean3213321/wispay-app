import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar"; // Import the Sidebar component
import "./index.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router";
import Payments from "./components/Payments";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
  <Router>
    <div className={`dashboard ${isSidebarOpen ? 'sidebar-open' : ''}`}> {/* Add conditional class */}
      <Navbar toggleSidebar={toggleSidebar} /> {/* Pass toggleSidebar to Navbar */}
      <div className="container">
        <Sidebar isOpen={isSidebarOpen} />
      
        <Routes>
        <Route  exact path="/" element={<MainContent />} />
        <Route  exact path="/Payments" element={<Payments />} />
        
        </Routes>
      
      </div>
    </div>
  </Router>
    
  );
};

export default App;
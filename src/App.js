import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar"; // Import the Sidebar component
import "./index.css";
import { useState } from "react";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`dashboard ${isSidebarOpen ? 'sidebar-open' : ''}`}> {/* Add conditional class */}
      <Navbar toggleSidebar={toggleSidebar} /> {/* Pass toggleSidebar to Navbar */}
      <div className="container">
        <Sidebar isOpen={isSidebarOpen} />
        <MainContent />
      </div>
    </div>
  );
};

export default App;
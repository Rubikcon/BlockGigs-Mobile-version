// DashboardLayout.js
import { React, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  return (
    <div className="flex h-screen">
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      /> {/* Sidebar visible only in DashboardLayout */}
      <main
        // className="flex-1 bg-gray-100 ml-64 p-8"
        className="flex-1 bg-gray-100 p-4 sm:p-6 lg:p-8 transition-all duration-300"
        style={{ marginLeft: isSidebarOpen ? "16rem" : "5rem" }}
      >
        <Outlet /> {/* Renders the current dashboard page */}
      </main>
    </div>
  );
};

export default DashboardLayout;

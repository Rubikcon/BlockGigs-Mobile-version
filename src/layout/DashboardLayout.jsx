// DashboardLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar /> {/* Sidebar visible only in DashboardLayout */}
      <main className="flex-1 bg-gray-100 ml-64 p-8">
        <Outlet /> {/* Renders the current dashboard page */}
      </main>
    </div>
  );
};

export default DashboardLayout;

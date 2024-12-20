// components/Activity.js
import React, { useState, useEffect } from "react";
import { FiUser } from "react-icons/fi"; // Profile picture icon (user)
import Blank from "./Blank";

// const Activity = () => {

const Activity = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch jobs when the component mounts
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // Make GET request to fetch jobs
        // const response = await axios.get(`${API_URL}/clients`);
        const response = await axios.get("/api/projects"); // Proxy will forward to the actual API

        setJobs(response.data); // Assuming the response contains a list of jobs
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch jobs");
        setLoading(false);
      }
    };

    fetchJobs();
  }, []); // Empty dependency array to run once on component mount

  // Render loading state, error, or jobs
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <Blank param={"Activities"} />;
  }

  // Define the activity data directly within the component
  const activities = [
    {
      userImage: FiUser,
      activityDescription: "Received payment from John Doe",
      activityDetail: "Amount: $150",
    },
    {
      userImage: FiUser,
      activityDescription: "Sent money to Jane Smith",
      activityDetail: "Amount: $200",
    },
    {
      userImage: FiUser,
      activityDescription: "Received payment from XYZ Company",
      activityDetail: "Amount: $500",
    },
  ];

  return (
    <div className="bg-gray-50 rounded-lg shadow-md p-4 sm:p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-800 text-lg sm:text-xl font-semibold">
          Activity
        </h3>
        <a
          href="#"
          className="text-blue-500 text-sm sm:text-base hover:underline"
        >
          View All
        </a>
      </div>
      {activities.map((activity, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row items-start sm:items-center p-4 mb-4 border-b border-gray-200"
        >
          {/* User Image */}
          <FiUser className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-4" />

          {/* Activity Information */}
          <div>
            {/* Responsive font sizes */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-800 font-semibold">
              {activity.activityDescription}
            </p>
            <p className="text-xs sm:text-sm lg:text-base text-gray-500">
              {activity.activityDetail}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Activity;

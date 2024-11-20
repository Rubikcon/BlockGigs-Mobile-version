// jobsAndRecommendedJobs.js
import React, { useState, useEffect } from "react";
import { FiBookmark } from "react-icons/fi";
import axios from "axios";
import Blank from "./Blank";

const Recommended = () => {
  const [jobs_, setJobs] = useState([]);
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
    return <Blank param={"Recommended Jobs"} />;
  }

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer Needed",
      description:
        "Looking for a frontend developer to work on various UI/UX projects...",
      posted: "Jacob",
      amount: "$5000/3 milestones",
      skills: "Javascript, MongoDB, Node js",
    },
    {
      id: 2,
      title: "Backend Developer for E-commerce",
      description:
        "Need an experienced backend developer to build scalable systems...",
      posted: "Sophia",
      amount: "$8000/4 milestones",
      skills: "Javascript, MongoDB, Node js",
    },
  ];

  return (
    <div className="bg-gray-50 rounded-lg shadow-md p-4 sm:p-6">
      <h3 className="text-[#3C3B3B] text-lg sm:text-xl font-semibold mb-4">
        Recommended Jobs
      </h3>
      {jobs.map((offer) => (
        <div
          key={offer.id}
          className="bg-white mb-4 text-gray-700 rounded-md p-4 sm:p-6 shadow-sm"
        >
          {/* Job Title */}
          <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
            {offer.title}
          </h4>
          {/* Posted Time and Name */}
          <div className="flex justify-between text-sm sm:text-base text-gray-500 mb-2">
            <span>{offer.posted}</span>
            <span>{offer.skills}</span>
          </div>
          {/* Job Description */}
          <p className="text-sm sm:text-base text-gray-600 mb-2">
            {offer.description}
          </p>
          {/* Job Amount */}
          {/* Save and Bookmark Button */}
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center mt-3">
            <button className="bg-[#2f66f6] text-white py-1 px-4 rounded-md text-sm sm:text-base mb-2 sm:mb-0">
              Save Job
            </button>
            <button className="bg-[#2f66f6] text-white p-2 rounded-full">
              <FiBookmark size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recommended;

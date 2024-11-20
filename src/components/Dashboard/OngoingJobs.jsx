// OngoingJobs.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Blank from "./Blank";

// import { useEffect, useState } from 'react';

// Circular progress tracker component
const CircularProgress = ({ progress }) => {
  const radius = 18; // Radius of the circle
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width="50" height="50" className="ml-4">
      <circle
        cx="25"
        cy="25"
        r={radius}
        stroke="#E5E7EB"
        strokeWidth="4"
        fill="none"
      />
      <circle
        cx="25"
        cy="25"
        r={radius}
        stroke="#3B82F6" // Blue color
        strokeWidth="4"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
      <text
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
        className="text-xs font-semibold text-gray-700"
      >
        {progress}%
      </text>
    </svg>
  );
};

const OngoingJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const API_URL = import.meta.env.VITE_API_URL;

  // console.log(API_URL)

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
    return <Blank param={"Ongoing jobs"} />;
  }

  const jobs_ = [
    {
      id: 1,
      title: "Web Development",
      owner: "Alice",
      time: "2h",
      progress: 50,
    },
    {
      id: 2,
      title: "Mobile App Design",
      owner: "Bob",
      time: "3h",
      progress: 75,
    },
  ];

  return (
    <div className="bg-gray-50 rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-800 text-lg sm:text-xl font-semibold">
          Ongoing Jobs
        </h3>
        <a
          href="#"
          className="text-blue-500 text-xs sm:text-sm hover:underline"
        >
          View All
        </a>
      </div>

      {jobs.map((job) => (
        <div
          key={job.id}
          className="flex items-center p-3 bg-gray-100 border border-gray-300 rounded-lg mb-4"
        >
          <div className="flex-1">
            <p className="text-gray-800 font-semibold text-sm sm:text-base md:text-lg">
              {job.title}
            </p>
            <div className="text-gray-500 text-xs sm:text-sm md:text-base">
              {job.clientId} &bull; {job.time}
              <small>{job.requiredSkills}</small>
            </div>
          </div>

          {/* Circular progress tracker */}
          <CircularProgress progress={job.progress} />
        </div>
      ))}
    </div>
  );
};

export default OngoingJobs;

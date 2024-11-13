// OngoingJobs.js
import React from 'react';

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
    const jobs = [
        { id: 1, title: "Web Development", owner: "Alice", time: "2h", progress: 50 },
        { id: 2, title: "Mobile App Design", owner: "Bob", time: "3h", progress: 75 },
    ];

    return (
        <div className="bg-gray-50 rounded-lg shadow-md p-4">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-gray-800 text-lg font-semibold">Ongoing Jobs</h3>
                <a href="#" className="text-blue-500 text-sm hover:underline">
                    View All
                </a>
            </div>

            {jobs.map((job) => (
                <div key={job.id} className="flex items-center p-3 bg-gray-100 border border-gray-300 rounded-lg mb-4">
                    <div className="flex-1">
                        <p className="text-gray-800 font-semibold text-base md:text-lg">{job.title}</p>
                        <div className="text-gray-500 text-xs md:text-sm">
                            {job.owner} &bull; {job.time}
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

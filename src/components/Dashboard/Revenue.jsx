import React, { useState } from 'react';

const RevenueDisplay = () => {
  const [view, setView] = useState('monthly'); // State to track the selected view

  const revenue = 1200.50;
  const months = [
    { name: 'Jan', jobsCompleted: 12, milestonesCovered: 8 },
    { name: 'Feb', jobsCompleted: 10, milestonesCovered: 7 },
    { name: 'Mar', jobsCompleted: 15, milestonesCovered: 10 },
    { name: 'Apr', jobsCompleted: 8, milestonesCovered: 5 },
    { name: 'May', jobsCompleted: 20, milestonesCovered: 14 },
    { name: 'Jun', jobsCompleted: 18, milestonesCovered: 12 },
    { name: 'Jul', jobsCompleted: 22, milestonesCovered: 16 },
    { name: 'Aug', jobsCompleted: 14, milestonesCovered: 9 },
    { name: 'Sep', jobsCompleted: 10, milestonesCovered: 6 },
    { name: 'Oct', jobsCompleted: 17, milestonesCovered: 11 },
    { name: 'Nov', jobsCompleted: 9, milestonesCovered: 7 },
    { name: 'Dec', jobsCompleted: 11, milestonesCovered: 8 },
  ];

  const handleViewChange = (e) => {
    setView(e.target.value);
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-800 text-sm sm:text-md font-semibold">Revenue Overview</h3>

        {/* Select for View Change */}
        <select
          value={view}
          onChange={handleViewChange}
          className="text-sm px-4 py-2 rounded-md border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="monthly">Monthly</option>
          <option value="weekly">Weekly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      <div className="text-3xl font-bold text-green-500 mb-4">
        ${revenue.toFixed(2)}
      </div>

      {/* Chart */}
      <svg
        width="100%"
        height="112"
        viewBox="0 0 336 112"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto mb-4"
      >
        <path
          d="M55.2421 13.7944C23.2242 3.77343 -20 49.8699 -20 49.8699V112H337V23.8154C337 23.8154 326.482 8.46019 316.188 2.77134C282.587 -15.7991 277.059 65.1792 238.278 61.3941C207.519 58.3919 207.397 21.016 177.444 13.7944C143.663 5.65006 124.249 44.7116 90.9955 34.8385C75.2832 30.1734 87.2601 23.8154 55.2421 13.7944Z"
          fill="url(#paint0_linear_11_1970)"
          fillOpacity="0.2"
        />
        <defs>
          <linearGradient
            id="paint0_linear_11_1970"
            x1="159"
            y1="-58.5"
            x2="165"
            y2="163.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#177F9F" />
            <stop offset="1" stopColor="#EEFAFD" />
          </linearGradient>
        </defs>
      </svg>

      <p className="text-gray-600 text-sm mb-6">Total revenue this {view}</p>

      {/* Months List in Flexbox Layout */}
      {/* <div className="flex flex-wrap justify-start gap-4 mb-6">
        {months.map((month) => (
          <div
            key={month.name}
            className="bg-blue-50 p-4 rounded-md w-32 sm:w-40 text-center shadow-md"
          >
            <div className="text-lg font-semibold text-blue-500">{month.name}</div>
            <div className="text-sm text-gray-600">Jobs: {month.jobsCompleted}</div>
            <div className="text-sm text-gray-600">Milestones: {month.milestonesCovered}</div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default RevenueDisplay;

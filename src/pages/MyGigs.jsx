import React from 'react';
import { Link } from 'react-router-dom';

const MyGigs = () => {
  return (
    <div className="bg-[#FFF] min-h-screen p-6 rounded-md">
      <h2 className="text-2xl font-semibold mb-4">My Gigs</h2>
      <p className="text-lg mb-6">Manage your gigs and projects here. View ongoing, completed, and upcoming jobs.</p>
      
      {/* Gigs Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold">Ongoing Gigs</h3>
          <p>List of ongoing gigs</p>
        </div>
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold">Completed Gigs</h3>
          <p>List of completed gigs</p>
        </div>
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold">Upcoming Gigs</h3>
          <p>List of upcoming gigs</p>
        </div>
      </div>
    </div>
  );
};

export default MyGigs;

import React from 'react';
import { Link } from 'react-router-dom';

const Discover = () => {
  return (
    <div className="bg-[#FFF] min-h-screen p-6 rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Discover</h2>
      <p className="text-lg mb-6">Explore new opportunities and trending gigs in your field.</p>
      
      {/* Discover Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold">Trending Gigs</h3>
          <p>Explore the most popular gigs available right now.</p>
        </div>
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold">New Opportunities</h3>
          <p>Check out the latest gigs and job offers.</p>
        </div>
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold">Explore Categories</h3>
          <p>Browse gigs based on categories of interest.</p>
        </div>
      </div>
    </div>
  );
};

export default Discover;

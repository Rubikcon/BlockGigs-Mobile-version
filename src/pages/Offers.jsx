import React from 'react';
import { Link } from 'react-router-dom';

const Offers = () => {
  return (
    <div className="bg-[#FFF] min-h-screen p-6 rounded-md">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Offers</h2>
      <p className="text-lg sm:text-xl mb-6">Browse offers and special deals.</p>
      
      {/* Offers Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold text-lg sm:text-xl">Exclusive Deals</h3>
          <p className="text-sm sm:text-base">Get access to exclusive offers for premium users.</p>
        </div>
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold text-lg sm:text-xl">Limited Time Offers</h3>
          <p className="text-sm sm:text-base">Don't miss out on these time-sensitive offers.</p>
        </div>
      </div>
    </div>
  );
};

export default Offers;

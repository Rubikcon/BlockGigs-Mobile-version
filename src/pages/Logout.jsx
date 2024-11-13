import React from 'react';
import { Link } from 'react-router-dom';

const Logout = () => {
  return (
    <div className="bg-[#FFF] min-h-screen p-6 rounded-md flex justify-center items-center">
      <div>
        <h2 className="text-2xl font-semibold mb-4">You have successfully logged out</h2>
        <Link to="/" className="text-teal-500 text-lg font-semibold">Return to Login</Link>
      </div>
    </div>
  );
};

export default Logout;

import React from 'react';
import { Link } from 'react-router-dom';

const Messages = () => {
  return (
    <div className="bg-[#FFF] min-h-screen p-6 rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Messages</h2>
      <p className="text-lg mb-6">Communicate with clients and fellow professionals.</p>
      
      {/* Messages Content */}
      <div className="border p-4 rounded-lg mb-6">
        <h3 className="font-semibold">Inbox</h3>
        <p>View and manage all your incoming messages.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold">Sent Messages</h3>
          <p>View your sent messages and responses.</p>
        </div>
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold">Archived</h3>
          <p>Review archived conversations.</p>
        </div>
      </div>
    </div>
  );
};

export default Messages;

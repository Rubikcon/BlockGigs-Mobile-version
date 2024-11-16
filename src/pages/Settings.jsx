import React from 'react';
import { Link } from 'react-router-dom';

const Settings = () => {
  return (
    <div className="bg-[#FFF] min-h-screen p-6 rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>
      <p className="text-lg mb-6">Adjust your profile and app settings here.</p>
      
      {/* Settings Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold">Account Settings</h3>
          <p>Edit your personal information and preferences.</p>
        </div>
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold">Notifications</h3>
          <p>Manage your notifications and alerts.</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;

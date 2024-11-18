// AccountSection.js
import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa'; // Notification icon
import { FiUser } from 'react-icons/fi'; // Profile picture icon (user)

const AccountSection = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const handleEdit = () => {
        alert('Edit Profile');
    };

    const handleLogout = () => {
        alert('Logged Out');
    };

    return (
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow-md flex justify-between items-center">
            <div className="flex items-center space-x-3">
                {/* Notification Icon */}
                <FaBell className="text-gray-600 dark:text-gray-300" size={24} />
            </div>

            {/* Profile Section */}
            <div className="flex items-center space-x-2">
                {/* Profile Picture */}
                <div className="w-9 h-9 bg-gray-300 dark:bg-gray-600 flex items-center justify-center rounded-full">
                    <FiUser className="text-white" size={20} />
                </div>
                <button
                    onClick={handleDropdownToggle}
                    className="text-sm sm:text-base md:text-lg text-gray-800 dark:text-gray-100 font-semibold"
                >
                    Username Here
                </button>
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
                <div className="absolute bg-white dark:bg-gray-700 rounded-md shadow-lg mt-2 right-0 w-40 z-10">
                    <a href="dashboard/profile">
                        <button
                            className="block w-full text-left text-gray-800 dark:text-gray-100 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
                        >
                            Profile
                        </button>
                    </a>
                    <a href="/dashboard/logout">
                        <button
                            className="block w-full text-left text-gray-800 dark:text-gray-100 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
                        >
                            Logout
                        </button>
                    </a>
                </div>
            )}
        </div>
    );
};

export default AccountSection;

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
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow-md">
            <div className="flex items-center space-x-3">
                {/* Notification Icon using React Icons */}
                <FaBell className="text-gray-600 dark:text-gray-300" size={24} />

                {/* Profile Section */}
                <div className="flex items-center space-x-2">
                    {/* Profile Picture using React Icons */}
                    <div className="w-9 h-9 bg-gray-300 dark:bg-gray-600 flex items-center justify-center rounded-full">
                        <FiUser className="text-white" size={20} />
                    </div>
                    <button
                        onClick={handleDropdownToggle}
                        className="text-gray-800 dark:text-gray-100 text-sm md:text-base font-semibold"
                    >
                        Username Here
                    </button>
                </div>

                {/* Dropdown for edit/logout options */}
                {isDropdownOpen && (
                    <div className="absolute bg-white dark:bg-gray-700 rounded-md shadow-lg mt-2 right-0 w-40">
                        <button
                            onClick={handleEdit}
                            className="block w-full text-left text-gray-800 dark:text-gray-100 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
                        >
                            Edit Profile
                        </button>
                        <button
                            onClick={handleLogout}
                            className="block w-full text-left text-gray-800 dark:text-gray-100 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AccountSection;

// Sidebar.js
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import logo from "../../assets/logo1.svg";
import { FaCog } from "react-icons/fa";
import { IoCubeSharp } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { FaFolderClosed } from "react-icons/fa6";
import { TbMessageFilled } from "react-icons/tb";
import { IoWallet } from "react-icons/io5";
import { PiChartDonutFill } from "react-icons/pi";
import { TbLogout2 } from "react-icons/tb";





const Sidebar = ({isOpen, setIsOpen }) => {
    // const [isOpen, setIsOpen] = useState(true);
    const location = useLocation();


    const isActive = (path) => location.pathname === path;

    return (
        <div className={`bg-[#1C2335] text-white h-screen ${isOpen ? "w-64" : "w-20"} transition-width duration-300 fixed top-0 left-0 flex flex-col`}>
            <div className="flex items-center justify-center p-4 border-b border-gray-700">
                <img src={logo} alt="Logo"

                    // className="w-[500px] h-[80px]"
                    className={`w-full ${isOpen ? "h-12" : "h-8"} transition-all`}
                />
            </div>

            <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <span className={`text-2xl font-semibold ${isOpen ? "block" : "hidden"}`}>
                    Dashboard
                </span>
                <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                    {isOpen ? "◄" : "►"}
                </button>
            </div>

            <nav className="flex-1 p-4">
                <ul className="space-y-4">
                    <li>
                        <Link
                            to="/"
                            className={`flex items-center p-2 ${isActive("/home") ? "bg-white text-black rounded-lg" : "text-gray-300"} hover:text-white`}
                        >
                            < CiHome className="mr-3" />
                            {isOpen && <span>Home</span>}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/dashboard"
                            className={`flex items-center p-2 ${isActive("/dashboard") ? "bg-white text-black rounded-lg" : "text-gray-300"} hover:text-white`}
                        >
                            < RxDashboard className="mr-3" />
                            {isOpen && <span>Dashboard</span>}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/dashboard/my-gigs"
                            className={`flex items-center p-2 ${isActive("/dashboard/my-gigs") ? "bg-white text-black rounded-lg" : "text-gray-300 "} hover:text-white`}
                        >
                            <IoCubeSharp className="mr-3" />
                            {isOpen && <span>My Gigs</span>}
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/dashboard/discover"
                            className={`flex items-center p-2 ${isActive("/dashboard/discover") ? "bg-white text-black rounded-lg" : "text-gray-300 "} hover:text-white`}
                        >
                            <PiChartDonutFill className="mr-3" />
                            {isOpen && <span>Discover</span>}
                        </Link>
                    </li>


                    <li>
                        <Link
                            to="/dashboard/wallet"
                            className={`flex items-center p-2 ${isActive("/dashboard/wallet") ? "bg-white text-black rounded-lg" : "text-gray-300"} hover:text-white`}
                        >
                            <IoWallet className="mr-3" />
                            {isOpen && <span>Wallet</span>}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/dashboard/messages"
                            className={`flex items-center p-2 ${isActive("/dashboard/messages") ? "bg-white text-black rounded-lg" : "text-gray-300"} hover:text-white`}
                        >
                            <TbMessageFilled className="mr-3" />
                            {isOpen && <span>Chat</span>}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/dashboard/offers"
                            className={`flex items-center p-2 ${isActive("/dashboard/offers") ? "bg-white text-black rounded-lg" : "text-gray-300"} hover:text-white`}
                        >
                            <FaFolderClosed className="mr-3" />
                            {isOpen && <span>Offers & Application</span>}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/dashboard/settings"
                            className={`flex items-center p-2 ${isActive("/dashboard/settings") ? "bg-white text-black rounded-lg" : "text-gray-300"} hover:text-white`}
                        >
                            <FaCog className="mr-3" />
                            {isOpen && <span>Settings</span>}
                        </Link>
                    </li>
                    <li className="mt-auto text-red">
                        <Link
                            to="/dashboard/logout"
                            className={`flex items-center p-2 ${isActive("/dashboard/logout") ? "bg-white text-black rounded-lg" : "text-red-600"} hover:text-white`}
                        >
                            <TbLogout2 className="mr-3" />
                            {isOpen && <span>Logout</span>}
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;

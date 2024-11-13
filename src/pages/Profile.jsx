import React from 'react';
import { lazy, Suspense } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // To style the tabs

const MyGigs = lazy(() => import('../pages/MyGigs'));
const Discover = lazy(() => import('../pages/Discover'));
const Wallet = lazy(() => import('../pages/Wallet'));
const Messages = lazy(() => import('../pages/Messages'));
const Offers = lazy(() => import('../pages/Offers'));
const Settings = lazy(() => import('../pages/Settings'));
const Logout = lazy(() => import('../pages/Logout'));

const ProfilePage = () => {
  return (
    <div className="bg-[#FFF] min-h-screen p-6 rounded-md">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center md:space-x-4 mb-6">
        <img
          src="https://www.w3schools.com/w3images/avatar2.png" // Placeholder profile picture
          alt="Profile"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-teal-500 mb-4 md:mb-0"
        />
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold">Grace Sunday</h2>
          <p className="text-teal-500">Software Developer & Backend Engineer</p>
        </div>
      </div>

      {/* Profile Bio */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Bio</h3>
        <p className="text-lg">
          I'm a software engineer specializing in backend development with a keen interest in blockchain technology. I enjoy working with innovative technologies and building scalable solutions.
        </p>
      </div>

      {/* Tabs for Different Sections */}
      <div className="mt-6">
        <Tabs>
          <TabList className="flex flex-wrap justify-center md:justify-start space-x-4">
            <Tab className="p-2 text-teal-500 cursor-pointer">My Gigs</Tab>
            <Tab className="p-2 text-teal-500 cursor-pointer">Discover</Tab>
            <Tab className="p-2 text-teal-500 cursor-pointer">Wallet</Tab>
            <Tab className="p-2 text-teal-500 cursor-pointer">Messages</Tab>
            <Tab className="p-2 text-teal-500 cursor-pointer">Offers</Tab>
            <Tab className="p-2 text-teal-500 cursor-pointer">Settings</Tab>
            <Tab className="p-2 text-teal-500 cursor-pointer">Logout</Tab>
          </TabList>

          <TabPanel>
            <MyGigs />
          </TabPanel>
          <TabPanel>
            <Discover />
          </TabPanel>
          <TabPanel>
            <Wallet />
          </TabPanel>
          <TabPanel>
            <Messages />
          </TabPanel>
          <TabPanel>
            <Offers />
          </TabPanel>
          <TabPanel>
            <Settings />
          </TabPanel>
          <TabPanel>
            <Logout />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfilePage;

import React from 'react';
import SearchBar from '../components/Dashboard/SearchBar';
import OngoingJobs from "../components/Dashboard/OngoingJobs";
import RevenueDisplay from '../components/Dashboard/Revenue';
import Recommended from '../components/Dashboard/RecommendedJobs';
import Activity from '../components/Dashboard/Activity';
import AccountSection from '../components/Dashboard/AccountSection';
import Offers from '../components/Dashboard/Offers';

const Dashboard = () => {
  return (
    <div className="bg-[#FFF] min-h-screen p-4 md:p-6 rounded-md">
      <div className="flex flex-col gap-4 md:gap-6">

        {/* Top Section: Search Bar */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-6 mb-6'>
          <div>
            <h2 className="text-lg md:text-2xl font-semibold">
              Welcome Back, Let's <span className='work'>Work</span>
            </h2>
          </div>

          <div className="flex justify-between items-center">
            <SearchBar />
          </div>
          <AccountSection />
        </div>

        {/* Main Section: Ongoing Jobs and Revenue */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-6 mb-6">
          <OngoingJobs />
          <Offers />
          <RevenueDisplay />
        </div>

        {/* Bottom Section: Recommended and Activity */}
        <div className="mt-4 md:mt-12 grid grid-cols-1 md:grid-cols-10 gap-6 mb-6">
          {/* Activity component - appears above Recommended on mobile */}
          <div className="md:col-span-3 order-1 md:order-2">
            <Activity />
          </div>

          {/* Recommended component - takes up more space on desktop */}
          <div className="md:col-span-7 order-2 md:order-1">
            <Recommended />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;


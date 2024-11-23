import React from 'react';
import logo from '../assets/logo.png';

const Clientpage = () => {
  return (
    <div className="w-full h-screen bg-[#0a0f29] flex flex-col items-center">
      <div className="flex items-center gap-3 mt-4 md:mt-8 lg:justify-start lg:ml-[-80rem]">
        <img className="w-10 h-10" src={logo} alt="logo" />
        <h1 className="text-[#f3f3f3] text-lg md:text-2xl font-oleo-script">BlockGigs</h1>
      </div>

      <div className="flex flex-col w-[90%] max-w-[400px] px-6 py-8 md:p-10 items-center rounded-lg bg-white mt-8 md:mt-12 space-y-8 lg:space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-[#292929] text-xl md:text-2xl font-medium">Profile Information</h2>
          <p className="text-[#676767] tracking-[0.07px] text-sm md:text-base font-onest leading-5">
            Client, Please fill out your information
          </p>
        </div>

        <div className="flex flex-col items-start space-y-2 w-full max-w-[470px]">
          <h4 className="text-[#292929] font-onest text-sm md:text-base not-italic font-normal leading-6 tracking-[0.08px]">Full Name</h4>
          <input
            className="flex w-full p-[12px_16px] items-center gap-4 rounded-lg border border-[#DBDBDB] text-[#292929] font-onest text-sm md:text-base not-italic font-normal leading-6 tracking-[0.08px] outline-none"
            type="text"
            placeholder="Anita Razer"
          />
        </div>

        <div className="flex flex-col items-start space-y-2 w-full max-w-[470px]">
          <h4 className="text-[#292929] font-onest text-sm md:text-base not-italic font-normal leading-6 tracking-[0.08px]">About you & what you do</h4>
          <textarea
            placeholder="Business or an individual looking to hire...."
            className="flex w-full p-[12px_16px] items-center gap-4 rounded-lg border border-[#DBDBDB] text-[#292929] font-onest text-sm md:text-base not-italic font-normal leading-6 tracking-[0.08px] outline-none resize-y min-h-[100px] max-h-[300px]"
          ></textarea>
        </div>

        <button className="flex p-[12px_32px] justify-center items-center gap-3 self-stretch rounded-lg bg-[#177F9F] text-[#fff] font-onest text-sm md:text-base not-italic font-medium leading-6">
          Profile Done!
        </button>

        <button className="text-[#177f9f] font-onest text-sm md:text-base font-normal leading-6 tracking-[0.08px]">
          Skip Profile, I will fill later
        </button>
      </div>
    </div>
  );
};

export default Clientpage;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0f29] w-full flex flex-col items-center px-4 lg:px-0 space-y-9 py-10 lg:py-20">
      {/** div one */}
      <div className="max-w-[544px] w-full flex flex-col items-center text-center gap-4 mt-10 mb-16">
        <h1 className="font-montserrat text-2xl md:text-3xl lg:text-[54px] leading-tight lg:leading-[64px] text-white font-bold">
          Get started <span className="text-[#2f66f6]">today</span>
        </h1>
        <p className="font-montserrat text-sm md:text-base lg:text-[18px] font-normal leading-[24px] text-white">
          Connecting Talent, Transcending Boundaries
        </p>

        <div className="flex justify-between  items-center gap-3 w-full sm:w-auto p-3 lg:p-[10px_20px] rounded-lg bg-white shadow-md shadow-black/5">
          <input
            className="flex-1 outline-none text-[#696f8c] text-sm md:text-base font-medium leading-[24px] px-3 py-2 rounded-md"
            type="text"
            placeholder="Type email"
          />
          <button className="flex justify-center items-center gap-2 px-5 py-3 rounded-md bg-[#2F66F6] text-sm md:text-base font-medium leading-[24px] text-white">
            Subscribe
          </button>
        </div>
      </div>

      {/** div two */}
      <div className="w-full max-w-[1120px] h-px opacity-15 bg-white"></div>

      {/** div three */}
      <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-[1120px] mt-6 space-y-4 sm:space-y-0">
        <div className="text-center sm:text-left">
          <h1 className="font-oleo font-bold text-white text-xl md:text-[31.333px]">BlockGigs</h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-2 sm:mt-0">
          <span className="font-montserrat text-sm md:text-base font-medium text-white">
            Privacy Policy
          </span>
          <span className="font-montserrat text-sm md:text-base font-medium text-white">
            Terms and Conditions
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

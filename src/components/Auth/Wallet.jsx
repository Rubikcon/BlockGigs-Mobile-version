import React from "react";
import logo from "../../assets/logo.png";
import metamask from "../../assets/metamask.png";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Wallet = () => {
  return (
    <div className="w-full h-screen bg-[#0a0f29] flex flex-col items-center">
      {/* Logo Section */}
      <div className="flex items-center gap-3 mt-4 md:mt-8 lg:justify-start ml-0 lg:ml-[-80rem]">
        <img className="w-10 h-10" src={logo} alt="logo" />
        <h1 className="text-[#f3f3f3] text-lg md:text-2xl font-oleo-script">
          BlockGigs
        </h1>
      </div>

      {/* Wallet Connection Card */}
      <div className="flex flex-col w-[90%] max-w-[400px] px-6 py-8 md:p-10 items-center rounded-lg bg-white mt-8 md:mt-12 space-y-12">
        {/* Title Section */}
        <div className="text-center space-y-2">
          <h2 className="text-[#292929] text-xl md:text-2xl font-medium">
            Wallet Connection
          </h2>
          <p className="text-[#676767] tracking-[0.07px] text-[14px] font-onest leading-5">
            By signing up/connecting wallet, you agree to our
            <span className="text-[#177f9f] leading-5 text-[14px] tracking-[0.07px]">
              {" "}
              Terms & Conditions{" "}
            </span>
            and
            <span className="text-[#177f9f] leading-5 text-[14px] tracking-[0.07px]">
              {" "}
              Privacy Policy
            </span>
            .
          </p>
        </div>

        {/* Wallet Button */}
        <div className="w-full flex flex-col items-center space-y-4">
          <Link
            to="/Wallet"
            className="flex items-center gap-4 w-full px-4 py-3 border rounded-lg bg-[#FAFAFA]"
          >
            <img className="w-6 h-6" src={metamask} alt="metamask" />
            <span className="text-sm md:text-base font-medium text-[#242d44] ml-[1rem] truncate">
              0xfg55ytois.....Ef5
            </span>
            <IoIosArrowDown className="ml-auto" />
          </Link>
        </div>

        <Link
          to="/Code"
          className="flex w-full max-w-[350px] p-[12px] px-[32px] justify-center items-center gap-[12px] rounded-[8px] bg-[#177F9F] text-white font-onest text-base not-italic font-medium leading-6"
        >
          Approve Connection
        </Link>
      </div>
    </div>
  );
};

export default Wallet;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import ic from "../../assets/ic.png";
import user from "../../assets/user.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Register = () => {
  const [selectedOption, setSelectedOption] = useState(null); // Track selected option
  const navigate = useNavigate(); // For navigation

  const handleNext = () => {
    if (selectedOption === "client") {
      navigate("/Clientpage"); // Navigate to client page
    } else if (selectedOption === "talent") {
      navigate("/Talentpage"); // Navigate to talent page
    } else {
      alert("Please select an option before proceeding."); // Error handling
    }
  };

  return (
    <div className="w-full h-screen bg-[#0a0f29] flex flex-col items-center">
      {/* Header Section */}
      <div className="flex items-center gap-3 mt-4 md:mt-8 lg:justify-start ml-0 lg:ml-[-80rem]">
        <img className="w-10 h-10" src={logo} alt="logo" />
        <h1 className="text-[#f3f3f3] text-lg md:text-2xl font-oleo-script">
          BlockGigs
        </h1>
      </div>

      {/* Card Section */}
      <div className="flex flex-col w-[90%] max-w-[400px] px-6 py-8 md:p-10 items-center rounded-lg bg-white mt-8 md:mt-12 space-y-12">
        {/* Title */}
        <div className="text-center space-y-2">
          <h2 className="text-[#292929] text-xl md:text-2xl font-medium">
            Persona
          </h2>
          <p className="text-[#676767] tracking-[0.07px] text-[14px] font-onest leading-5">
            Are you signing up as a Client or Talent?
          </p>
        </div>

        {/* Options */}
        <div className="flex flex-col items-center space-y-3">
          {/* Client Option */}
          <div
            className={`flex items-start gap-4 p-3 pl-4 self-stretch rounded-lg border border-gray-300 hover:bg-[rgba(190,212,223,1)] cursor-pointer ${
              selectedOption === "client" ? "bg-[rgba(190,212,223,1)]" : ""
            }`}
            onClick={() => setSelectedOption("client")} // Set as selected
          >
            <img className="w-[16px] h-[16px]" src={ic} alt="ic" />
            <div className="flex flex-col items-start space-y-1">
              <h4 className="text-[#242d44] font-onest text-base not-italic font-medium leading-6">
                Client
              </h4>
              <p className="text-[#676767] font-onest text-[12px] not-italic font-normal leading-5">
                Looking to procure talents to get projects
                <br /> done efficiently
              </p>
            </div>
          </div>

          {/* Talent Option */}
          <div
            className={`flex items-start gap-4 p-3 pl-4 self-stretch rounded-lg border border-gray-300 hover:bg-[rgba(190,212,223,1)] cursor-pointer ${
              selectedOption === "talent" ? "bg-[rgba(190,212,223,1)]" : ""
            }`}
            onClick={() => setSelectedOption("talent")} // Set as selected
          >
            <img className="w-[16px] h-[16px]" src={user} alt="user" />
            <div className="flex flex-col items-start space-y-1">
              <h4 className="text-[#242d44] font-onest text-base not-italic font-medium leading-6">
                Talent
              </h4>
              <p className="text-[#676767] font-onest text-[12px] not-italic font-normal leading-5">
                Seeking to secure gigs/job to deliver specialized services
              </p>
            </div>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="flex w-[334px] p-3 px-8 justify-center items-center gap-3 rounded-md bg-[#177F9F] text-white font-onest text-base not-italic font-medium leading-6"
        >
          Next <FaArrowRightLong className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default Register;

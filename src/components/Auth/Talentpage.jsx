import React from "react";
import logo from "../../assets/logo.png";

const Talentpage = () => {
  return (
    <div className="w-full h-full bg-[#0a0f29] flex flex-col items-center">
      {/* Logo and Title */}
      <div className="flex items-center gap-3 mt-4 md:mt-8 lg:justify-start lg:ml-[-80rem]">
        <img className="w-10 h-10" src={logo} alt="logo" />
        <h1 className="text-[#f3f3f3] text-lg md:text-2xl font-oleo-script">
          BlockGigs
        </h1>
      </div>

      {/* Profile Information Form */}
      <div className="flex flex-col w-[90%] max-w-[400px] px-6 py-8 md:p-10 items-center rounded-lg bg-white mt-8 md:mt-12 space-y-8">
        {/* Title and Description */}
        <div className="text-center space-y-2">
          <h2 className="text-[#292929] text-xl md:text-2xl font-medium">
            Profile Information
          </h2>
          <p className="text-[#676767] tracking-[0.07px] text-sm md:text-base font-onest leading-5">
            Tell clients about you and what you do. Profiles are pseudonymous to
            keep your identity private and avoid biased hiring.
          </p>
        </div>

        {/* Full Name and Pseudonymous Name */}
        <div className="flex flex-col md:flex-row w-full justify-between gap-4">
          <div className="flex flex-col items-start w-full md:w-[45%]">
            <h4 className="text-[#292929] font-onest text-base font-normal leading-6">
              Full Name
            </h4>
            <input
              type="text"
              placeholder="Anita Razer"
              className="w-full p-3 rounded-lg border border-[#DBDBDB] text-[#a9a9a9] font-onest text-base"
            />
          </div>

          <div className="flex flex-col items-start w-full md:w-[45%]">
            <h4 className="text-[#292929] font-onest text-base font-normal leading-6">
              Pseudonymous/Work Name
            </h4>
            <input
              type="text"
              placeholder="Designhandz"
              className="w-full p-3 rounded-lg border border-[#DBDBDB] text-[#a9a9a9] font-onest text-base"
            />
          </div>
        </div>

        {/* What You Do */}
        <div className="flex flex-col items-start w-full">
          <h4 className="text-[#292929] font-onest text-base font-normal leading-6">
            What you do?
          </h4>
          <input
            type="text"
            placeholder="Product Designer"
            className="w-full p-3 rounded-lg border border-[#DBDBDB] text-[#a9a9a9] font-onest text-base"
          />
        </div>

        {/* About You & What You Do */}
        <div className="flex flex-col items-start w-full">
          <h4 className="text-[#292929] font-onest text-base font-normal leading-6">
            About you & what you do
          </h4>
          <textarea
            placeholder="A well profession...."
            className="w-full h-[122px] p-3 rounded-lg border border-[#DBDBDB] text-[#a9a9a9] font-onest text-base"
          ></textarea>
        </div>

        {/* Profile Done Button */}
        <button className="w-full p-[12px_32px] justify-center items-center gap-3 rounded-lg bg-[#177F9F] text-white font-onest text-sm md:text-base font-medium leading-6">
          Profile Done!
        </button>

        {/* Skip Profile Button */}
        <button className="text-[#177f9f] font-onest text-sm md:text-base font-normal leading-6">
          Skip Profile, I will fill later
        </button>
      </div>
    </div>
  );
};

export default Talentpage;

import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import metamask from "../../assets/metamask.png";
import celo from "../../assets/celo.png";
import wallet from "../../assets/wallet.png";
import { connectWallet } from "../../utils/WalletUtils";

const Signup = ({ formData, onUpdate }) => {
  const [email, setEmail] = useState(formData.email || "");
  const [error, setError] = useState("");
  const [account, setAccount] = useState(null);

  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    onUpdate({ email });
  };

  const handleNext = () => {
    onUpdate({ email });
    navigate("/register");
  };

  const handleConnectWallet = async () => {
    try {
      const userAccount = await connectWallet();
      setAccount(userAccount);
      console.log("Connected Account ", userAccount);
    } catch (err) {
      console.error("Error connecting wallet", err.message);
    }
  };

  const handleDisconnectWallet = () => {
    setAccount(null);
    console.log("Disconnect Wallet successfully");
  };

  return (
    <div className="w-full h-screen bg-[#0a0f29] flex flex-col items-center">
      <div className="flex items-center gap-3 mt-4 md:mt-8 lg:justify-start lg:ml-[-80rem]">
        <img className="w-10 h-10" src={logo} alt="logo" />
        <h1 className="text-[#f3f3f3] text-lg md:text-2xl font-oleo-script">
          BlockGigs
        </h1>
      </div>

      <form
        action="#"
        onSubmit={handleFormSubmit}
        className="flex flex-col w-[90%] max-w-[400px] px-6 py-8 md:p-10 items-center rounded-lg bg-white mt-8 md:mt-12"
      >
        <div className="text-center">
          <h2 className="text-[#292929] text-xl md:text-2xl font-medium">
            Sign Up
          </h2>
          <p className="text-[#676767] text-sm md:text-base text-nowrap">
            Create an account with us by email or wallet
          </p>
        </div>

        <div className="w-full mt-6">
          <label className="block text-[#292929] text-sm md:text-base font-medium mb-1">
            Email Address
          </label>
          <div className="flex w-full p-3 items-center gap-3 border rounded-lg border-[#DBDBDB]">
            <input
              className="flex-1 text-gray-600 placeholder-gray-400 outline-none text-sm md:text-base"
              type="text"
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Continue with email"
            />
            <button
              className="h-8 w-8 flex justify-center items-center bg-[#177F9F] rounded-md"
              onClick={handleNext}
            >
              <FaArrowRightLong className="text-white" />
            </button>
          </div>
          {error || <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        <div className="flex items-center w-full mt-6">
          <div className="flex-grow h-px bg-[#e6e6e6]"></div>
          <span className="text-[#888] mx-3 text-sm md:text-base">OR</span>
          <div className="flex-grow h-px bg-[#e6e6e6]"></div>
        </div>

        <div className="w-full space-y-4 mt-6">
          {!account ? (
            <button
              className="flex items-center gap-4 w-full px-4 py-3 border rounded-lg bg-[#FAFAFA]"
              onClick={handleConnectWallet}
            >
              <img className="w-6 h-6" src={metamask} alt="metamask" />
              <span className="text-sm md:text-base font-medium text-[#242d44]">
                Metamask
              </span>
            </button>
          ) : (
            <div className="wallet-info">
              <span className="wallet-address">
                Connected: {account.slice(0, 6) + "..." + account.slice(-4)}
              </span>
              <button
                onClick={handleDisconnectWallet}
                className="disconnect-button"
              >
                Disconnect
              </button>
            </div>
          )}

          <button className="flex items-center gap-4 w-full px-4 py-3 border rounded-lg bg-[#FAFAFA]">
            <img className="w-6 h-6" src={celo} alt="celo" />
            <span className="text-sm md:text-base font-medium text-[#242d44]">
              Celo
            </span>
          </button>

          <button className="flex items-center gap-4 w-full px-4 py-3 border rounded-lg bg-[#FAFAFA]">
            <img className="w-6 h-6" src={wallet} alt="wallet" />
            <span className="text-sm md:text-base font-medium text-[#242d44]">
              Wallet Connect
            </span>
          </button>
        </div>

        <div className="flex justify-center items-center mt-6 space-x-2">
          <p className="text-sm md:text-base text-[#292929]">
            Already have an account?
          </p>
          <Link className="text-sm md:text-base text-[#177f9f]" to="/signin">
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;

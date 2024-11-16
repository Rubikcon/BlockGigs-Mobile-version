// pages/Wallet.js
import React from "react";
// const eth = "../config/detect"
import "../components/LandingPage/style.css"
import MetaMaskConnector from "../components/MetaMask/MetaMaskConnector"

import { Link } from 'react-router-dom';

const Wallet = () => {
  return (
    <div className="bg-[#FFF] min-h-screen p-6 rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Wallet</h2>
      <div>
        <MetaMaskConnector />
      </div>

      <p className="text-lg mb-6">Track your earnings and transactions here.</p>

      {/* Wallet Content */}
      <div className="border p-6 rounded-lg mb-6">
        <h3 className="font-semibold">Balance</h3>
        <p className="text-xl font-bold text-teal-500">$5000.00</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold">Transaction History</h3>
          <p>View your recent earnings and expenses.</p>
        </div>
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold">Withdraw Funds</h3>
          <p>Withdraw your balance to your bank or PayPal account.</p>
        </div>
      </div>
    </div>
  );
};

export default Wallet;

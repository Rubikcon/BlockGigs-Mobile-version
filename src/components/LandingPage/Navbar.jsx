import React, { useState } from 'react';
import { CiMenuFries } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import { connectWallet } from "../../utils/WalletUtils"
import { Link } from 'react-router-dom';
import "./style.css"

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [account, setAccount] = useState(null);

  const toggleNav = () => {
    setOpen(!open);
  };

  const handleConnectWallet = async () => {
    try {
      const userAccount = await connectWallet();
      setAccount(userAccount);
      console.log("Connected Account ", userAccount)

    } catch (err) {
      console.error("Error connecting wallet", err.message)
    }
  };

  const handleDisconnectWallet = () => {
    setAccount(null);
    console.log("Disconnect Wallet successfully");
  }


  return (
    <nav className="sticky top-0 flex justify-between items-center w-full px-6 md:px-[160px] py-4 md:py-[30px] bg-gradient-to-r from-[#ecf3ff] via-[#ffffff] to-[#ecf3ff]">
      <div className='shrink-0'>
        <h1 className="font-oleo font-bold text-[#2f66f6] text-xl md:text-[31.333px]">BlockGigs</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-between items-center gap-9">
        <li><a className='text-[#2f66f6] font-extrabold text-base' href="/">Home</a></li>
        {/* <li><a className='text-[#696f8c] font-medium text-base' href="/dashboard">Dashboard</a></li> */}
        <Link to="/dashboard" className='no -underline text-[#2f66f6] font-extrabold text-base'>
          Dashboard
        </Link>
        <li><a className='text-[#696f8c] font-medium text-base' href="#talents">Browse Talents</a></li>
        {/* <button

          onClick={!account ? handleConnectWallet : null} className='px-4 py-2 bg-[#2F66F6] text-white font-medium rounded'>{account ? `Connected: ${account}` : 'Connect Wallet'}</button> */}
        {!account ? (<button className='px-4 py-2 bg-[#2F66F6] text-white font-medium rounded' onClick={handleConnectWallet}>Connect Wallet</button>) : (<div className='wallet-info'><span className='wallet-address'>Connected: {account.slice(0, 6) + '...' + account.slice(-4)}</span>
          <button onClick={handleDisconnectWallet} className='disconnect-button'>
            Disconnect
          </button>
        </div>)}
      </ul>


      {/* Mobile Menu Icon */}
      <div className='md:hidden text-2xl text-[#2f66f6]' onClick={toggleNav}>
        {open ? <LiaTimesSolid /> : <CiMenuFries />}
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="fixed top-14 left-0 w-full h-screen flex flex-col items-center justify-center gap-8 bg-gradient-to-r from-[#ecf3ff] via-[#ffffff] to-[#ecf3ff] z-40">
          <li><a href="/" className='text-[#2f66f6] font-extrabold text-lg' onClick={toggleNav}>Home</a></li>
          {/* <li><a href="/dashboard" className='text-[#696f8c] font-medium text-lg' onClick={toggleNav}>Dashboard</a></li> */}
          <Link to="/dashboard" className='no -underline text-[#696f8c] font-medium text-lg' onClick={toggleNav}>
            Dashboard
          </Link>

          <li><a href="#talents" className='text-[#696f8c] font-medium text-lg' onClick={toggleNav}>Browse Talents</a></li>
          {/* <button onClick={handleConnectWallet} className='px-4 py-2 bg-[#2F66F6] text-white font-medium rounded'>Connect Wallet</button> */}
          {!account ? (<button className='px-4 py-2 bg-[#2F66F6] text-white font-medium rounded' onClick={handleConnectWallet}>Connect Wallet</button>) : (<div className='wallet-info'><span className='wallet-address'>Connected: {account.slice(0, 6) + '...' + account.slice(-4)}</span>
            <button onClick={handleDisconnectWallet} className='disconnect-button'>
              Disconnect
            </button>
          </div>)}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

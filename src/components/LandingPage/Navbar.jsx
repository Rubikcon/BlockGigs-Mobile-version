import React, { useState } from 'react';
import { CiMenuFries } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom"
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();

  const handlConnectMetaMask = () => {
    navigate('/dashboard/connect-metamask')
  }

  return (
    <nav className="sticky top-0 flex justify-between items-center w-full px-6 md:px-[160px] py-4 md:py-[30px] bg-gradient-to-r from-[#ecf3ff] via-[#ffffff] to-[#ecf3ff]">
      <div className='shrink-0'>
        <h1 className="font-oleo font-bold text-[#2f66f6] text-xl md:text-[31.333px]">BlockGigs</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-between items-center gap-9">
        <li><a className='text-[#2f66f6] font-extrabold text-base' href="/home">Home</a></li>
        <li><a className='text-[#696f8c] font-medium text-base' href="/dashboard">Dashboard</a></li>
        <li><a className='text-[#696f8c] font-medium text-base' href="#talents">Browse Talents</a></li>
        <button onClick={handlConnectMetaMask} className='px-4 py-2 bg-[#2F66F6] text-white font-medium rounded'>Connect Wallet</button>
      </ul>


      {/* Mobile Menu Icon */}
      <div className='md:hidden text-2xl text-[#2f66f6]' onClick={toggleNav}>
        {open ? <LiaTimesSolid /> : <CiMenuFries />}
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="fixed top-14 left-0 w-full h-screen flex flex-col items-center justify-center gap-8 bg-gradient-to-r from-[#ecf3ff] via-[#ffffff] to-[#ecf3ff] z-40">
          <li><a href="#home" className='text-[#2f66f6] font-extrabold text-lg' onClick={toggleNav}>Home</a></li>
          <li><a href="#dashboard" className='text-[#696f8c] font-medium text-lg' onClick={toggleNav}>Dashboard</a></li>
          <li><a href="#talents" className='text-[#696f8c] font-medium text-lg' onClick={toggleNav}>Browse Talents</a></li>
          <button className='px-4 py-2 bg-[#2F66F6] text-white font-medium rounded'>Connect Wallet</button>

        </ul>
      )}
    </nav>
  );
};

export default Navbar;

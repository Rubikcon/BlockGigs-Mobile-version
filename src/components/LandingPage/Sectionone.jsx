import React from 'react';
import Huge from '../../assets/huge.png';
import Fluent from '../../assets/fluent.png';
import Debug from '../../assets/debug.png';

const Sectionone = () => {
  return (
   <section className='flex flex-col items-center space-x-4'>
    <div className='w-[1120px] flex flex-col items-center space-y-6 mt-[3rem]'>
      <h2 className='font-montserrat text-[29px] lg:text-[36px] font-semibold leading-[48px] text-[#0a0f29] not-italic'>Why Choose BlockGigs?</h2>
      <p className='font-montserrat text-[14px] lg:text-[18px] font-normal not-italic leading-6 text-[#0a0f29]'>Find top African tech talents, hire anonymously, <br /> and pay securely in crypto.</p>
    </div>

     <div className='flex flex-col lg:flex-row lg:justify-between items-center gap-8 mt-[3rem] lg:mt-[4rem]'>
      {/**div one */}
      <div className='w-[325px] gap-6 flex flex-col items-center'>
        <div className='flex w-20 h-20 p-4 justify-center items-center rounded-full bg-[#2F66F6]'>
          <img src={Huge} alt="huge" />
        </div>
        <h4 className='font-montserrat text-base lg:text-[18px] font-semibold leading-6 not-italic text-[#0a0f29] text-center'>Anonymity Guaranteed</h4>
        <p className='font-montserrat text-[14px] lg:text-[18px] font-normal leading-6 not-italic text-[#0a0f29] text-center'>Your identity is safe. Hire and get hired based solely on merit</p>
      </div>

      {/**div two */}
      <div className='w-[325px] gap-6 flex flex-col items-center'>
        <div className='flex w-20 h-20 p-4 justify-center items-center rounded-full bg-[#2F66F6]'>
          <img src={Fluent} alt="fluent" />
        </div>

        <h4 className='font-montserrat text-base lg:text-[18px] font-semibold leading-6 not-italic text-[#0a0f29] text-center'>Milestone-Based Payments</h4>
        <p className='font-montserrat text-[14px] lg:text-[18px] font-normal leading-6 not-italic text-[#0a0f29] text-center'>Get paid in crypto for each milestone you complete</p>
      </div>

      {/**div three */}

      <div className='w-[325px] gap-6 flex flex-col items-center'>
        <div className='flex w-20 h-20 p-4 justify-center items-center rounded-full bg-[#2F66F6]'>
          <img src={Debug} alt="code" />
        </div>

        <h4 className='font-montserrat text-base lg:text-[18px] font-semibold leading-6 not-italic text-[#0a0f29] text-center'>Secure Smart Contracts</h4>
        <p className='font-montserrat text-[14px] lg:text-[18px] font-normal leading-6 not-italic text-[#0a0f29] text-center text-wrap'>Smart contracts ensure transparency and trust in every transaction</p>
      </div>
     </div>
   </section>
  )
}

export default Sectionone
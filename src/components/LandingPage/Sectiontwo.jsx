import React from 'react';
import Kwame from '../../assets/kwame.png';
import Ama from '../../assets/ama.png';
import Larry from '../../assets/larry.png';
import Event from '../../assets/event.png';

const Sectiontwo = () => {
  return (
   <section className='w-full h-[608px] flex flex-col items-center space-x-4'>
      <div className='w-[1120px] flex flex-col items-center space-y-6 mt-[5rem]'>
      <h2 className='font-montserrat text-[29px] lg:text-[36px] font-semibold leading-[48px] text-[#0a0f29] not-italic'>Featured Talents</h2>
      <p className='font-montserrat text-[14px] lg:text-[18px] font-normal not-italic leading-6 text-[#0a0f29]'>Browse through series of tech talents here on BlockGigs</p>
    </div>



    <div className='flex flex-col lg:flex-row lg:justify-between items-center gap-8 mt-[3rem] lg:mt-[4rem]'>
      {/**div one */}
      <div className='w-[290px] lg:w-[352px] flex flex-col items-center gap-6 p-[16px] bg-[#161831] rounded-lg border border-[#3E4565]'>
        <div className='flex justify-start items-center gap-3 h-[48px] mr-[6rem]'>
          <img className='w-[48px] h-[48px]' src={Kwame} alt="kwame" />
          <p className='font-montserrat font-semibold text-base lg:text-[18px] not-italic leading-6 text-white text-nowrap'>Kwame Jones</p>
        </div>

        <div className='flex justify-start items-center gap-3'>
          <span className='flex text-nowrap px-2 lg:px-4 py-2 justify-center items-center gap-2.5 rounded-md bg-[#D7D9E4] font-normal text-[12px] leading-[14px] not-italic font-montserrat'>Web3 development</span>
          <span className='flex text-nowrap px-2 lg:px-4 py-2 justify-center items-center gap-2.5 rounded-md bg-[#D7D9E4] font-normal text-[12px] leading-[14px] not-italic font-montserrat'>Smart Contratcs</span>
        </div>

        <span className='flex text-nowrap px-2 lg:px-4 py-2 justify-center items-center gap-2.5 rounded-md bg-[#D7D9E4] font-normal text-[12px] leading-[14px] not-italic font-montserrat mr-[9rem] lg:mr-[10rem]'>Project Manager</span>

        <div className='flex justify-start items-center space-x-4 mr-[6rem]'>
         <div className='flex justify-between items-center space-x-1'>
          <p className='font-montserrat text-base not-italic font-medium text-white leading-[18px]'>Rates:</p>
          <span className='font-montserrat text-[12px] text-white not-italic leading-[14px] font-normal mt-[-0.3rem]'>0.5ETH</span>
         </div>

         <div className='flex justify-between items-center space-x-2'>
          <img src={Event} alt="calendar" />
          <p className='font-montserrat text-[12px] text-white not-italic leading-[14px]'>Available</p>
         </div>
        </div>

        <button className='flex px-4 lg:px-6 py-2 lg:py-3 justify-center items-center gap-2 align-self-stretch rounded bg-[#2F66F6] text-center font-medium leading-[24px] text-white w-full'>View Profile</button>
      </div>

      {/**div two */}
      <div className='w-[290px] lg:w-[352px] flex flex-col items-center gap-6 p-[16px] bg-[#161831] rounded-lg border border-[#3E4565]'>
        <div className='flex justify-start items-center gap-3 h-[48px] mr-[6rem]'>
          <img className='w-[48px] h-[48px]' src={Ama} alt="ama" />
          <p className='font-montserrat font-semibold text-base lg:text-[18px] not-italic leading-6 text-white text-nowrap'>Ama Serwaa</p>
        </div>

        <div  className='flex justify-start items-center gap-3 mr-[1.5rem] lg:mr-0' >
          <span className='flex text-nowrap px-2 lg:px-4 py-2 justify-center items-center gap-2.5 rounded-md bg-[#D7D9E4] font-normal text-[12px] leading-[14px] not-italic font-montserrat'>frontend development</span>
         <span className='flex text-nowrap px-2 lg:px-4 py-2 justify-center items-center gap-2.5 rounded-md bg-[#D7D9E4] font-normal text-[12px] leading-[14px] not-italic font-montserrat'>Designer</span>
        </div>

        <span className='flex text-nowrap px-2 lg:px-4 py-2 justify-center items-center gap-2.5 rounded-md bg-[#D7D9E4] font-normal text-[12px] leading-[14px] not-italic font-montserrat mr-[9rem] lg:mr-[10rem]' >Project Manager</span>

        <div  className='flex justify-start items-center space-x-4 mr-[6rem]'>
         <div className='flex justify-between items-center space-x-1'>
          <p  className='font-montserrat text-base not-italic font-medium text-white leading-[18px]'>Rates:</p>
          <span className='font-montserrat text-[12px] text-white not-italic leading-[14px] font-normal mt-[-0.3rem]'>0.5ETH</span>
         </div>

         <div className='flex justify-between items-center space-x-2' >
          <img src={Event} alt="calendar" />
          <p className='font-montserrat text-[12px] text-white not-italic leading-[14px]'>Available</p>
         </div>
        </div>

        <button className='flex px-4 lg:px-6 py-2 lg:py-3 justify-center items-center gap-2 align-self-stretch rounded bg-[#2F66F6] text-center font-medium leading-[24px] text-white w-full'>View Profile</button>
      </div>

      {/**div three */}
      <div className='w-[290px] lg:w-[352px] flex flex-col items-center gap-6 p-[16px] bg-[#161831] rounded-lg border border-[#3E4565]'>
        <div  className='flex justify-start items-center gap-3 h-[48px] mr-[6rem]'>
          <img  className='w-[48px] h-[48px]' src={Larry} alt="larry" />
          <p className='font-montserrat font-semibold text-base lg:text-[18px] not-italic leading-6 text-white text-nowrap'>Larry Gaga</p>
        </div>

        <div  className='flex justify-start items-center gap-3 mr-[1.5rem] lg:mr-0'>
         <span className='flex text-nowrap px-2 lg:px-4 py-2 justify-center items-center gap-2.5 rounded-md bg-[#D7D9E4] font-normal text-[12px] leading-[14px] not-italic font-montserrat'>frontend development</span>
          <span className='flex text-nowrap px-2 lg:px-4 py-2 justify-center items-center gap-2.5 rounded-md bg-[#D7D9E4] font-normal text-[12px] leading-[14px] not-italic font-montserrat'>Designer</span>
        </div>

        <span className='flex text-nowrap px-2 lg:px-4 py-2 justify-center items-center gap-2.5 rounded-md bg-[#D7D9E4] font-normal text-[12px] leading-[14px] not-italic font-montserrat mr-[9rem] lg:mr-[10rem]'>Project Manager</span>

        <div  className='flex justify-start items-center space-x-4 mr-[6rem]'>
         <div  className='flex justify-between items-center space-x-1'>
          <p className='font-montserrat text-base not-italic font-medium text-white leading-[18px]'>Rates:</p>
          <span className='font-montserrat text-[12px] text-white not-italic leading-[14px] font-normal mt-[-0.3rem]'>0.5ETH</span>
         </div>

         <div  className='flex justify-between items-center space-x-2'>
          <img src={Event} alt="calendar" />
          <p  className='font-montserrat text-[12px] text-white not-italic leading-[14px]'>Available</p>
         </div>
        </div>

        <button className='flex px-4 lg:px-6 py-2 lg:py-3 justify-center items-center gap-2 align-self-stretch rounded bg-[#2F66F6] text-center font-medium leading-[24px] text-white w-full'>View Profile</button>
      </div>
    </div>
   </section>
  )
}

export default Sectiontwo
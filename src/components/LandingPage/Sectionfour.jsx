import React from 'react';
import Laptop from '../../assets/laptop.png';

const Sectionfour = () => {
  return (
    <section className='flex flex-col lg:flex-row justify-between items-center max-w-[1120px] w-full mx-auto gap-8 lg:gap-[56px] mt-[5rem] lg:mt-[7rem] px-4 mb-[5rem]'>
      <div className='w-full lg:w-[571px] flex flex-col text-center lg:text-left space-y-4'>
        <h4 className='font-montserrat text-[#0a0f29] font-semibold text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] lg:leading-[40px]'>
          Find or Post Projects
        </h4>
        <p className='font-montserrat text-[16px] sm:text-[18px] font-normal leading-[22px] sm:leading-[24px] text-[#0a0f29]'>
          Browse projects or hire top talent with ease—experience <br className="hidden sm:block" /> seamless transactions and milestone-based payments, all <br className="hidden sm:block" /> powered by secure smart contracts.
        </p>
      </div>

      <div className='w-full max-w-[448px] h-auto ml-[9rem] lg:ml-0'>
        <img className='w-[300px] sm:w-[400px] lg:w-[448px] h-auto' src={Laptop} alt="laptop" />
      </div>
    </section>
  );
}

export default Sectionfour;

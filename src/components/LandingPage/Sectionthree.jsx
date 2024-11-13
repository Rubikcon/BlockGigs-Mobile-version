import React from 'react';
import Computer from '../../assets/computer.png';

const Sectionthree = () => {
  return (
    <section className='flex flex-col items-center space-y-20 mt-[40rem] lg:mt-[3rem] px-4'>
      {/* div one */}
      <div className='max-w-[1120px] w-full flex flex-col items-center text-center space-y-6'>
        <h2 className='font-montserrat text-[24px] sm:text-[29px] lg:text-[36px] font-semibold leading-[32px] sm:leading-[40px] lg:leading-[48px] text-[#0a0f29]'>
          Why Choose BlockGigs?
        </h2>
        <p className='font-montserrat text-[16px] sm:text-[18px] font-normal leading-[22px] sm:leading-[24px] text-[#0a0f29]'>
          BlockGigs offers a user-friendly interface. Very <br className="hidden sm:block" /> simple and easy to navigate.
        </p>
      </div>

      {/* div two */}
      <div className='max-w-[1120px] w-full flex flex-col lg:flex-row items-center lg:justify-between gap-4 mt-[3rem]'>
        <div className='flex-shrink-0'>
          <img className='w-[300px] sm:w-[400px] lg:w-[448px] h-auto' src={Computer} alt="computer" />
        </div>

        <div className='w-full lg:w-[571px] flex flex-col lg:items-start text-center lg:text-left space-y-4 mt-6 lg:mt-0'>
          <h4 className='text-[16px] sm:text-[18px] lg:text-[24px] font-semibold text-[#0a0f29] font-montserrat leading-[24px] sm:leading-[32px] lg:leading-[40px]'>
            Create Your Profile, work and get paid
          </h4>
          <p className='text-[14px] sm:text-[16px] lg:text-[18px] text-[#0a0f29] font-normal leading-[20px] sm:leading-[24px] lg:leading-[28px] font-montserrat'>
            Set up a pseudonymous profile, showcase your skills, and <br className="hidden sm:block" /> unlock global opportunities—get hired and paid securely in <br className="hidden sm:block" /> crypto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sectionthree;

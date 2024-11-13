import React from 'react';
import Code from '../../assets/code.png';

const Heroblue = () => {
  return (
    <section className='w-full h-[70px] bg-[#2f66f6]'>
        <div className='flex justify-center lg:justify-start items-center space-x-3 m-auto ml-0 lg:ml-[30rem]'>
            <p className='not-italic text-center font-montserrat text-white text-base lg:text-[24px] font-semibold leading-[40px] mt-4'>Connecting Talent, Transcending Boundaries</p>
            <img src={Code} className='mt-4' alt="code" />
        </div>
    </section>
  )
}

export default Heroblue
import React from 'react';
import Ellipse439 from '../../assets/Ellipse 439.png';
import Ellips438 from '../../assets/Ellipse 438.png';
import Stars from '../../assets/stars.png';
import Ellipse441 from '../../assets/Ellipse 441.png';
import Ellipse440 from '../../assets/Ellipse 440.png';
import {connectWallet} from "../../utils/WalletUtils"
import { useState } from 'react';

const Hero = () => {
    const [account, setAccount] = useState(null);

    const handleConnectWallet = async () => {
        try {
          const userAccount = await connectWallet();
          setAccount(userAccount);
          console.log("Connected Account ", userAccount)
    
        } catch (err) {
          console.error("Error connecting wallet", err.message)
        }
      };

  return (
    <section className='w-full h-[600px] bg-gradient-to-r from-[#ecf3ff] via-[#ffffff] to-[#ecf3ff] flex flex-col lg:flex-row lg:justify-between items-center'>
        {/* First div */}
        <div className='flex flex-row lg:flex-col justify-between items-center ml-0 lg:ml-[9rem] space-x-8 lg:space-y-6 mt-[5rem] lg:mt-0'>
            <div className='mt-0 lg:mt-[-8rem] ml-0 lg:ml-[4rem]'>
                <img className='w-[50px] h-[50px] lg:w-[73px] lg:h-[73px]' src={Ellipse439} alt="rounded image" />
            </div>

            <div className='flex justify-between items-center space-x-8'>
            <div className='w-[11.689px] h-[11.689px] shrink-0 bg-[#f17105] rounded-full mr-0 lg:mr-[7rem] mt-2 lg:mt-[-3rem] lg:mb-0'></div>

            <div className='w-[11.689px] h-[11.689px] shrink-0 bg-[#f17105] rounded-full ml-0 lg:ml-[10rem] mt-2 lg:mt-[4rem]'></div>

            </div>
           
            <div className='ml-[3rem]'>
                <img className='w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]' src={Ellips438} alt="rounded image" />
            </div>
        </div>

        {/* Second div */}
        <div className='w-[544px] flex flex-col items-center gap-3 mt-[3rem] lg:mt-[-5rem]'>
            <div className='flex justify-between items-center gap-3'>
                <img src={Stars} alt="stars" />
                <p className='text-[#000] text-[14px] lg:text-base text-center not-italic font-medium leading-6 font-montserrat'>Used by 1,000 + tech talents and clients</p>
            </div>

            <h1 className='text-[#0a0f29] font-montserrat text-[30px] lg:text-[54px] not-italic font-bold leading-[64px] text-center'>
                Bringing <span className='text-[#2f66f6] font-montserrat text-[30px] lg:text-[54px] not-italic font-bold leading-[64px]'>Great Work</span> to You
            </h1>

            <p className='text-[#0a0f29] text-center font-montserrat text-[16px] lg:text-[18px] not-italic font-normal leading-6'>
                Find top African tech talents, hire anonymously, and pay <br /> securely in crypto.
            </p>

            <div className='flex justify-between items-center gap-6'>
                <button onClick={handleConnectWallet} className='flex w-[193px] h-[48px] px-6 py-3 justify-center items-center gap-2 rounded bg-[#2F66F6] font-montserrat text-base text-white not-italic font-medium leading-6'>Sign up as Talent</button>
                <button onClick={handleConnectWallet} className='flex px-6 py-3 justify-center items-center gap-2 rounded border border-[#D7D9E4] bg-[#696F8C] font-montserrat text-base text-white not-italic font-medium leading-6'>Hire Talent</button>
            </div>
        </div>

        {/* Third div */}
        <div className='flex flex-row justify-between lg:flex-col items-center space-x-8 lg:space-y-6 mr-0 lg:mr-[7rem] mt-[3rem] lg:mt-[-7rem]'>
            <div className='lg:mr-[7rem]'>
                <img className='w-[50px] h-[50px] lg:w-[59px] lg:h-[59px]' src={Ellipse441} alt="rounded image" />
            </div>


             <div className='flex justify-between items-center space-x-8'>
             <div className='w-[11.689px] h-[11.689px] shrink-0 bg-[#f17105] rounded-full mt-0 lg:mt-[4rem] ml-0 lg:mr-[9rem]'></div>

           <div className='w-[11.689px] h-[11.689px] shrink-0 bg-[#f17105] rounded-full ml-[-6rem] '></div>

             </div>
           
            <div className='lg:mr-[3rem]'>
                <img className='w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]' src={Ellipse440} alt="rounded image" />
            </div>
        </div>
    </section>
  )
}

export default Hero;

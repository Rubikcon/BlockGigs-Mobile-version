import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Code = () => {
  const [otp, setOtp] = useState(new Array(6).fill('')); // The Array to store the 6 OTP digits
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // This is For the animation
  const navigate = useNavigate();

  const handleChange = (value, index) => {
    if (!isNaN(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input if the current one is filled
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleBackspace = (value, index) => {
    if (value === '' && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp === '123456') { // Replace '123456' with backend logic. this is temporary.
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate('/Register'); // Redirect to the registration page
      }, 2000); 
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className='w-full h-screen bg-[#0a0f29] flex flex-col items-center'>
      {/* Logo Section */}
      <div className="flex items-center gap-3 mt-4 md:mt-8 lg:justify-start ml-0 lg:ml-[-80rem]">
        <img className="w-10 h-10" src={logo} alt="logo" />
        <h1 className="text-[#f3f3f3] text-lg md:text-2xl font-oleo-script">BlockGigs</h1>
      </div>

      {/* Main Card */}
      <div className="flex flex-col w-[90%] max-w-[400px] px-6 py-8 md:p-10 items-center rounded-lg bg-white mt-8 md:mt-12 space-y-8">
        {/* Title Section */}
        <div className="text-center space-y-2">
          <h2 className="text-[#292929] text-xl md:text-2xl font-medium">Enter Email Code</h2>
          <p className="text-[#676767] tracking-[0.07px] text-[14px] font-onest leading-5">
            Enter the OTP code we just sent to your registered email address to reset your password.
          </p>
        </div>

        {/* OTP Input */}
        <div className='flex gap-2 justify-center'>
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => e.key === 'Backspace' && handleBackspace(e.target.value, index)}
              className='w-[51px] h-[51px] text-center text-xl border border-[#ccdada] rounded-md shadow-[0px_0.985px_1.97px_rgba(16,24,40,0.05)] outline-none focus:ring-2 focus:ring-[#177f9f] bg-white text-[#292929]'
            />
          ))}
        </div>

        {/* Error Message */}
        {error && <p className='text-red-500 text-sm'>{error}</p>}

        {/* Timer */}
        <div className='text-center'>
          <p className='font-poppins text-[#303030] text-xs font-normal leading-[18px]'>
            Code sent will expire in <span className='text-[#ff4f4f]'>10 minutes</span>.
          </p>
        </div>

        {/* Resend Code */}
        <div className='text-center'>
          <p className='text-[#292929] font-onest text-base font-normal leading-6 tracking-[0.08px]'>
            Didn’t Receive It?{' '}
            <button className='text-[#177f9f] font-onest text-base font-normal leading-6 tracking-[0.08px]'>
              Resend Code
            </button>
          </p>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={loading} // Disable button during animation
          className={`flex w-full max-w-[350px] p-3 justify-center items-center gap-2 rounded-lg ${
            loading ? 'bg-gray-400' : 'bg-[#177F9F]'
          } text-white font-onest text-base font-medium leading-6`}>
          {loading ? (
            <div className='w-5 h-5 rounded-full bg-white animate-roll'></div>
          ) : (
            'Verify Code'
          )}
        </button>
      </div>

      {/* Ball Animation Styling */}
      <style>
        {`
          @keyframes roll {
            0% { transform: translateX(0); }
            100% { transform: translateX(100px); }
          }

          .animate-roll {
            animation: roll 2s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Code;

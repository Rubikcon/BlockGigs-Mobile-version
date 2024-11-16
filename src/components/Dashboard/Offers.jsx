// OffersAndRecommendedJobs.js
import React from 'react';

const Offers = () => {
    const offers = [
        { id: 1, title: "Frontend Developer Needed", description: "Looking for a frontend developer..." },
        { id: 2, title: "React.js Freelance Work", description: "Freelance opportunity for React.js" },
    ];

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-[#3C3B3B] text-lg mb-4">My Offers</h3>

            {/* Centered SVG Image */}
            <div className="flex justify-center mb-4">
                <svg width="83" height="83" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64.273 20.3058L69.3567 14.7131C69.8097 14.2025 70.0431 13.534 70.0064 12.8524C69.9698 12.1709 69.666 11.5313 69.1609 11.0723C68.6558 10.6132 67.9901 10.3718 67.3082 10.4003C66.6262 10.4288 65.983 10.7249 65.518 11.2245L60.4342 16.814C54.2443 12.06 46.4935 9.80652 38.7196 10.5005C30.9457 11.1945 23.7166 14.7853 18.4667 20.5605C13.2167 26.3358 10.3294 33.8734 10.3775 41.6781C10.4257 49.4828 13.4059 56.9842 18.7267 62.6942L13.643 68.287C13.4091 68.5382 13.2274 68.8333 13.1085 69.1553C12.9895 69.4773 12.9356 69.8196 12.95 70.1626C12.9643 70.5055 13.0465 70.8422 13.1919 71.1531C13.3373 71.464 13.543 71.743 13.797 71.9738C14.051 72.2046 14.3483 72.3828 14.6717 72.4979C14.9951 72.613 15.338 72.6627 15.6808 72.6443C16.0235 72.6258 16.3592 72.5396 16.6683 72.3904C16.9775 72.2413 17.254 72.0323 17.4817 71.7756L22.5655 66.186C28.7554 70.94 36.5062 73.1935 44.2801 72.4995C52.054 71.8055 59.2831 68.2147 64.5331 62.4395C69.783 56.6643 72.6703 49.1266 72.6222 41.3219C72.574 33.5173 69.5939 26.0158 64.273 20.3058ZM15.5624 41.5C15.5652 36.6982 16.901 31.9914 19.421 27.9039C21.9409 23.8164 25.5461 20.5087 29.8349 18.3492C34.1238 16.1896 38.9279 15.263 43.7122 15.6726C48.4966 16.0822 53.0733 17.8119 56.9327 20.669L22.2413 58.8392C17.9402 54.0887 15.5596 47.9084 15.5624 41.5ZM41.4999 67.4375C35.9396 67.4434 30.5264 65.6522 26.067 62.3311L60.7584 24.1608C64.1148 27.8842 66.3195 32.5009 67.1055 37.4518C67.8915 42.4027 67.2251 47.4752 65.187 52.0551C63.1489 56.6349 59.8266 60.5255 55.6225 63.2557C51.4183 65.9859 46.5127 67.4385 41.4999 67.4375Z" fill="#687AA8" fill-opacity="0.6" />
                </svg>
            </div>
            
            <p className='text-gray-600 text-sm text-center mb-4'>No offers Now</p>

            {/* Looping through offers */}
            {/* {offers.map((offer) => ( */}
                {/* <div key={offer.id} className="bg-gray-50 p-4 rounded-md mb-4 shadow-sm"> */}
                    {/* Job Title */}
                    {/* <h4 className="text-[#3C3B3B] text-lg font-semibold">{offer.title}</h4> */}
                    {/* Job Description */}
                    {/* <p className="text-gray-500 text-sm">{offer.description}</p> */}
                {/* </div> */}
            {/* ))} */}
        </div>
    );
};

export default Offers;

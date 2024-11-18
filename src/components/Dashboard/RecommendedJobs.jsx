// OffersAndRecommendedJobs.js
import React from 'react';
import { FiBookmark } from 'react-icons/fi';

const Recommended = () => {
    const offers = [
        { id: 1, title: "Frontend Developer Needed", description: "Looking for a frontend developer to work on various UI/UX projects...", posted: "Jacob", amount: "$5000/3 milestones" },
        { id: 2, title: "Backend Developer for E-commerce", description: "Need an experienced backend developer to build scalable systems...", posted: "Sophia", amount: "$8000/4 milestones" },
    ];

    return (
        <div className="bg-gray-50 rounded-lg shadow-md p-4 sm:p-6">
            <h3 className="text-[#3C3B3B] text-lg sm:text-xl font-semibold mb-4">Recommended Jobs</h3>
            {offers.map((offer) => (
                <div key={offer.id} className="bg-white mb-4 text-gray-700 rounded-md p-4 sm:p-6 shadow-sm">
                    {/* Job Title */}
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{offer.title}</h4>
                    {/* Posted Time and Name */}
                    <div className="flex justify-between text-sm sm:text-base text-gray-500 mb-2">
                        <span>{offer.posted}</span>
                        <span>{offer.posted}</span>
                    </div>
                    {/* Job Description */}
                    <p className="text-sm sm:text-base text-gray-600 mb-2">{offer.description}</p>
                    {/* Job Amount */}
                    <p className="text-lg sm:text-xl text-gray-800 font-semibold mb-4">{offer.amount}</p>
                    {/* Save and Bookmark Button */}
                    <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center mt-3">
                        <button className="bg-teal-500 text-white py-1 px-4 rounded-md text-sm sm:text-base mb-2 sm:mb-0">
                            Save Job
                        </button>
                        <button className="bg-teal-100 text-teal-500 p-2 rounded-full">
                            <FiBookmark size={18} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Recommended;

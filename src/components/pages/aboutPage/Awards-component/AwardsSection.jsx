import React from 'react';

import awardImage from "../../../../assets/awards-img1.png";

const AwardsSection = () => {
  return (
    <>
      {/* Section: Awards & Recognitions */}
      <div className="w-full bg-white py-12 px-6 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-[#293b95] mb-4 border-b-2 border-orange-400 inline-block">
            Awards & Recognitions
          </h2>
          <p className="text-gray-800 text-base leading-relaxed mt-4 max-w-xl">
            Since its formation in 1992, Artech has received numerous awards and
            accolades from staffing, technology and diversity media and associations.
            Artech is pleased to state that it was nominated for many of these
            awards by its clients and industry peers.
          </p>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-end">
          <img
            src={awardImage}
            alt="Awards Image"
            className=" h-auto"
          />
        </div>
      </div>

      {/* Section: Recent Wins Banner */}
      <div className="bg-[#293b95] py-10 px-6 text-center">
        <h3 className="text-white text-2xl md:text-3xl font-bold">
          A snapshot of our recent wins
        </h3>
        <div className="h-1 w-24 bg-orange-400 mx-auto mt-2 rounded"></div>
      </div>
    </>
  );
};

export default AwardsSection;
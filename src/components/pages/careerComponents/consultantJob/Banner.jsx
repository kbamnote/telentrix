import React from 'react';
import bannerImg from '../../.././../assets/consultants-banner.jpg'

const Banner = () => {
  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96">
      {/* Base image */}
      <img 
        src={bannerImg}
        alt="Artech consultants team" 
        className="w-full h-full object-cover"
      />
      
      {/* Text overlay for the right side */}
      <div className="absolute top-0 right-0 bottom-0 w-1/2 flex flex-col justify-between p-6 text-white">
       
       <div className='ml-18 text-center space-y-10'>
        <div className="  pt-4">
          <h2 className=" text-xl md:text-xl lg:text-3xl font-bold leading-tight">
            At Artech, our Consultants are empowered to shape their future.
          </h2>
          
          <div className=" mt-4">
            <button className="bg-white text-purple-800 font-semibold px-4 py-2 rounded-full cursor-pointer md:px-4 md:py-2">
              Apply Now
            </button>
          </div>
        </div>
        
        <div className=" text-xs md:text-[12px]">
          <p className="font-semibold mb-1">
            Largest Women-owned IT staffing firm in the US
          </p>
          <p className="mb-1">
            More than 11,500 empowered Consultants | Expansive client base |
          </p>
          <p>
            Responsive and connected
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
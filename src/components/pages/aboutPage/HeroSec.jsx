import React from 'react';
import Banner from '../../../assets/aboutHeroImg.jpg';
import ContactModal from '../../common/ContactModal';
import { useState } from 'react';

const HeroSec = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div
      className="flex flex-col items-end justify-center text-center p-5 bg-cover bg-right lg:bg-center h-auto lg:h-[451px]"
      style={{ backgroundImage: `url(${Banner})` }}
    >
      <div className="bg-transparent bg-opacity-90 p-5 md:p-10">
        <h1 className="text-white text-1xl md:text-[26px] font-semibold">
          The Largest Women-Owned <br /> IT Staffing Firm in the US with
        </h1>
        <div className="mt-4 text-xl font-semibold text-[#E1A941]">
          Expertise in most Non-IT Professional Verticals
        </div>
        <p className="mt-6 text-white text-lg">
          To find out how we can help you
        </p>
       
        <button  onClick={() => setIsModalOpen(true)}
            className="mt-4 text-black bg-[#E1A941] font-semibold py-2 px-4 rounded-full text-md shadow-md hover:bg-gray-200">
              CONTACT US TODAY!
            </button>
        
      </div>
      <ContactModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
    </div>
    
  );
};

export default HeroSec;

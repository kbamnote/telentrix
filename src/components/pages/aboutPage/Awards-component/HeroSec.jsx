import React from "react";
import Banner from "../../../../assets/Awards-banner.png";
import ContactModal from "../../../common/ContactModal";
import { useState } from "react";

const Herosec = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] bg-cover bg-center flex items-center lg:mt-24"
      style={{ backgroundImage: `url(${Banner})` }}
    >
      <div className="w-full flex justify-center sm:justify-end px-4 sm:px-6 md:px-12 relative z-10">
        <div className="w-full sm:w-3/4 md:w-1/2 flex flex-col justify-center text-center">
          <h1 className="text-lg sm:text-xl lg:text-3xl text-white font-bold ml-4 sm:ml-6">
            Focus On Performance, <br /> rewords will follow
          </h1>
          <p className="mt-2 sm:mt-4 md:mt-12 text-base sm:text-lg text-white font-semibold">
            To find out how we can help you
          </p>
          <a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block mt-2 px-4 py-2 bg-white text-blue-900 font-semibold rounded-full shadow-md hover:bg-black hover:text-white transition"
            >
              CONTACT US TODAY!
            </button>
          </a>
        </div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Herosec;
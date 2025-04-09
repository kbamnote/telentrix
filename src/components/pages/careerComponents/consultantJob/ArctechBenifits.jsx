import React from 'react';
import consultantBenifit from '../../../../assets/consultant_benefits_img-1536x686.png'

const ArtechBenefits = () => {
  return (
    <section className="w-full bg-white py-16 px-4">
      {/* Main Title */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-[#6c348d]">Our Benefits</h2>
        <div className="w-32 h-1 bg-yellow-400 mx-auto mt-2"></div>
      </div>
      
      {/* Tagline */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <p className="text-lg text-gray-800">When you don't worry about your benefits, you're free to chase excellence.</p>
      </div>
      
      {/* Benefits Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Text Content */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <p className="text-lg text-gray-800 leading-relaxed">
            Our Consultants' benefits are industry standard and payments come in on time, freeing them to focus on their work. We support them by empowering their careers and maximizing their intelligence with unlimited growth opportunities.
          </p>
          
          <div className="mt-8 flex justify-center">
            <button className=" bg-[#253e91] text-white py-3 px-8 rounded-full font-medium hover:bg-blue-800 transition duration-300">
              Apply Now
            </button>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="w-full md:w-1/2 relative">
          <div className=" overflow-hidden">
            <img 
              src={consultantBenifit} 
              alt="Smiling consultant with team members in background" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Footer Note */}
      <div className="max-w-6xl mx-auto text-center mt-16 text-sm text-gray-700">
        <p className="mb-2">
          Artech is an equal employment opportunity employer. For job opportunities in the US, if you need accommodation for any part of the application process because of a disability, please send an email to <span className="text-[#4300ff]">AskHR@artech.com</span> or call <span className="text-[#4300ff]">973 998 2500</span> to let us know the nature of your request.
        </p>
        <p>
          For job opportunities in India, <span className="text-[#4300ff]">visit here for Consultant roles</span> and <span className="text-[#4300ff]">here for Corporate roles</span>.
        </p>
      </div>
    </section>
  );
};

export default ArtechBenefits;
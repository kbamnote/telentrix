import React, { useState } from 'react';
import image from '../../../assets/Video-screenshot.png'; // Assuming you have the poster image
import video from '../../../assets/Intelligence-AV.mp4';

const Optimized = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoToggle = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center overflow-hidden">
      {/* Text Content Section */}
      <div className="w-full md:w-1/2 p-8 space-y-6">
        <h1 className="text-3xl font-bold text-[#253e91]">
          Achieve Optimized Efficiencies Intelligently.
        </h1>
        
        <div className="text-gray-700 space-y-4">
          <p className="text-lg font-semibold">
            Workforce Solutions to Managed Services, today most organizations need a complete spectrum of intelligent business solutions. They need experienced partners with expertise who can provide value, flexibility and financial predictability.
          </p>
          
          <p className="text-lg font-semibold">
            Plus talent needs opportunities to apply their intellect and progress in their career.
          </p>
          
          <p className="font-semibold text-lg">
            We empower both and are the eco system that connects people, technologies and opportunities with intelligence.
          </p>
        </div>
      </div>
      
      {/* Video Section */}
      <div className="w-full md:w-1/2 relative">
        <div className="aspect-video w-full relative">
          {!isPlaying ? (
            <div className="relative w-full h-full">
              <img 
                src={image} 
                alt="Artech Intelligence" 
                className="w-full h-full object-cover"
              />
              <button 
                onClick={handleVideoToggle}
                className="absolute bottom-4 left-4 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-white" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </button>
            </div>
          ) : (
            <video 
              src={video}
              className="w-full h-full object-cover"
              controls
              autoPlay
              onEnded={() => setIsPlaying(false)}
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </div>
  );
};

export default Optimized;
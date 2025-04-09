import React, { useState, useRef } from 'react';
import consultaniVideo from '../../../../assets/FINAL-Consultants-campaign-Lowress.mp4'
import consultantImage from '../../../../assets/Consultant-Video.png'

const EmpoweringCareer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto p-6 gap-8 items-center">
      {/* Text Content Section */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-[#253e91] text-center mb-6">
          Empowering your career. Maximizing your intelligence.
        </h1>
        <div className="w-32 h-1 bg-yellow-400 mx-auto mb-8"></div>
        
        <p className="text-gray-800 mb-6">
          At Artech, the Largest Women-owned IT staffing firm in the US, we earn the
          trust of our Consultants, empowering their careers with our stellar client base
          and maximizing their intelligence with multiple growth opportunities. We are
          transparent, responsive, connected and invest in their futures with training &
          development programs. We're not just business associates but our
          Consultants' partners in growth. Over 11,500 empowered Consultants across
          the world are testimony to this trusted relationship.
        </p>
        
        <div className="flex justify-center mt-6">
          <button className="bg-[#253e91] hover:bg-[#253e91] text-white py-3 px-8 rounded-full font-medium w-64">
            Apply Now
          </button>
        </div>
      </div>
      
      {/* Video Section */}
      <div className="flex-1">
        <div className="relative bg-black rounded-lg overflow-hidden w-full">
          <div className="relative aspect-w-16 aspect-h-9">
            {/* Actual video element */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster={consultantImage}
              onClick={togglePlay}
            >
              {/* Replace this source with your actual video file path */}
              <source src={consultaniVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
           
        
            
            {/* Play button overlay (shows when video is paused) */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center z-10" onClick={togglePlay}>
                
              </div>
            )}
            
            {/* Video controls */}
            <div className="absolute bottom-0 left-0 right-0 flex items-center bg-black bg-opacity-50 p-2 text-white z-10">
              <button className="mr-3" onClick={togglePlay}>
                {isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <rect x="6" y="4" width="4" height="16"></rect>
                    <rect x="14" y="4" width="4" height="16"></rect>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                )}
              </button>
              <span className="mr-2">0:00 / 1:47</span>
              <div className="flex-grow">
                <div className="h-1 bg-gray-500 rounded-full">
                  <div className="h-1 bg-blue-500 rounded-full" style={{ width: '0%' }}></div>
                </div>
              </div>
              <button className="mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>
              </button>
              <button className="mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                </svg>
              </button>
              <button className="ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpoweringCareer;
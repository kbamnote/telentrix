import React, { useState, useRef } from 'react';
import videoSrc from '../../../../assets/ArtechSocialVideo.mp4'
import thumbnailImage from '../../../../assets/artech-social.jpg'

const ArtechSocial = () => {
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
    <div className="w-full bg-[#293b95] py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
        {/* Video Section */}
        <div className="w-full lg:w-1/2">
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            {/* Video Player */}
            <div className="relative">
              <video
                ref={videoRef}
                src={videoSrc}
                poster={thumbnailImage}
                className="w-full"
                controls
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
              
              {/* Custom Play Button Overlay (optional) */}
              {!isPlaying && (
                <div> </div>
              )}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Artech Social for networking opportunities
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-lg mb-8">
            Artech Social is an empowering platform created and curated by Artech only
            for our consultants. It's where they can network, share, build communities,
            stay updated, seek and provide help and of course – have some fun!
          </p>
          <div className='flex justify-around'>
          <a 
            href="#apply" 
            className=" bg-white text-[#293b95] font-medium px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
          >
            Apply Now
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtechSocial;
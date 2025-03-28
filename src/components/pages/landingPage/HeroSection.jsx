import React, { useState, useEffect } from 'react';
import banner1 from '../../../assets/homebannernew.png'
import banner2 from '../../../assets/banner22.jpg'

const HeroSection = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        {
            backgroundImage: banner1
        },
        {
            backgroundImage: banner2
        }
    ];

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 4000);

        return () => clearInterval(slideInterval);
    }, []);

    return (
        <div className="relative w-full h-[calc(100vh-80px)] overflow-hidden">
            {slides.map((slide, index) => (
                <div 
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        activeSlide === index ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <img 
                        src={slide.backgroundImage} 
                        alt={`Slide ${index + 1}`} 
                        className={`absolute inset-0 w-full h-full ${
                            index === 1 ? 'object-contain' : 'object-cover'
                        }`}
                    />

                    {/* Workforce Solutions Navigation */}
                    <div className="absolute bottom-0 left-0 right-0">
  <div className="container mx-auto px-4">
    <div className="bg-white/90 rounded-lg max-w-6xl mx-auto">
      <div className="flex justify-center py-4">
        <a href="#" className="text-black hover:text-blue-600 font-medium text-center underline px-6">
          Managed Services and<br />Project Delivery
        </a>
        <div className="border-l border-gray-400 h-8 mx-6"></div>
        <a href="#" className="text-black hover:text-blue-600 font-medium text-center underline px-6">
          Workforce<br />Solutions
        </a>
        <div className="border-l border-gray-400 h-8 mx-6"></div>
        <a href="#" className="text-black hover:text-blue-600 font-medium text-center underline px-6">
          Diversity and Inclusion<br />Programs
        </a>
        <div className="border-l border-gray-400 h-8 mx-6"></div>
        <a href="#" className="text-black hover:text-blue-600 font-medium text-center underline px-6">
          Consulting<br />Opportunities
        </a>
      </div>
    </div>
  </div>
</div>

                </div>
            ))}
        </div>
    );
};

export default HeroSection;
import React, { useState } from 'react';
import flip1 from '../../../../assets/flip1.jpg'
import flip2 from '../../../../assets/flip2.png'
import flip3 from '../../../../assets/flip3.jpg'
import flip4 from '../../../../assets/flip4.png'
import flip5 from '../../../../assets/flip5.png'
import red from '../../../../assets/red3.jpg'
import green from '../../../../assets/green3.jpg'
import purple from '../../../../assets/purple3.jpg'
import blue from '../../../../assets/Blue3.jpg' 

import pink from '../../../../assets/pink.png'

const FlipGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Updated grid items to use images instead of text overlays
  const gridItems = [
    {
      type: "colored",
      frontImage: blue, // Use the image for the blue card
      backContent: {
        quote: "With Artech there are so many opportunities. I feel I can do anything!",
        name: "Ross,",
        position: "Consultant"
      }
    },
    {
      type: "person",
      image: flip1
    },
    {
      type: "colored",
      frontImage: red,
      backContent: {
        quote: "So many of my first choice companies were Artech clients, that I started thinking big.",
        name: "Lynn",
        position: "Consultant"
      },
    },
    {
      type: "person",
      image: flip2
    },
    {
      type: "colored",
      frontImage: purple, // Use the image for the purple card
      backContent: {
        quote: "Wherever I work, they are with me I feel someone has my back!",
        name: "Sandeep",
        position: "Consultant"
      },
    },
    {
      type: "person",
      image: flip3
    },
    {
      type: "person",
      image: flip4
    },
    {
      type: "colored",
      frontImage: green, // Use the image for the green card
      backContent: {
        quote: "They invest in me, empower me, give me opportunities to learn & grow.They give me superpowers!",
        name: "Dana",
        position: "Consultant"
      },
    },
    {
      type: "person",
      image: flip5
    },
    {
      type: "colored",
      frontImage: pink, // Use the image for the pink card
      backContent: {
        quote: "I am not just a consultant with Artech. I am an empowered growth partner!",
        name: "James",
        position: "Consultant"
      },
    }
  ];

  return (
    <div className="p-8 w-full max-w-8xl mx-auto">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
        {gridItems.map((item, index) => (
          <div key={index} className="relative h-64">
            {item.type === "person" ? (
              // Person images (no flip effect)
              <div className="w-full h-full">
                <img src={item.image} alt="Person" className="w-full h-full object-cover" />
              </div>
            ) : (
              // Colored blocks with flip effect
              <div 
                className="relative w-full h-full perspective-1000"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`w-full h-full transition-transform duration-500 transform-style-preserve-3d ${hoveredIndex === index ? 'rotate-y-180' : ''}`}>
                  {/* Front side - Colored image */}
                  <div className="absolute w-full h-full backface-hidden">
                    <img 
                      src={item.frontImage} 
                      alt="Card front" 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  
                  
                  {/* Back side - White with text */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gray-100 p-4">
                    {item.backContent.quote ? (
                      <div className="flex flex-col h-full justify-center">
                        <p className="text-sm font-medium mb-4 text-center">"{item.backContent.quote}"</p>
                        <p className="font-bold text-center">{item.backContent.name}</p>
                        <p className="text-sm text-center">{item.backContent.position}</p>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <p>Additional information here</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        <div className="mt-auto mb-auto ml-auto">
        <button className="bg-[#253e91] text-white px-8 py-2 rounded-full hover:bg-blue-900 transition-colors">
          Apply Now
        </button>
      </div>
      </div>
      
      
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default FlipGrid;
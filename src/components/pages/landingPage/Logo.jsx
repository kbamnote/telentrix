import React from 'react';

// Import flags
import usaFlag from '../../../assets/USA-85x85.png';
import canadaFlag from '../../../assets/Canada-85x85.png';
import indiaFlag from '../../../assets/India-85x85.png';
import philippinesFlag from '../../../assets/philippines-flag.png';

const Logo = () => {
  const countries = [
    { name: 'USA', flag: usaFlag },
    { name: 'CANADA', flag: canadaFlag },
    { name: 'INDIA', flag: indiaFlag },
    { name: 'PHILIPPINES', flag: philippinesFlag }
  ];

  return (
    <div className="bg-[#253e91] text-white py-4">
      <div className="container mx-auto flex items-center justify-center space-x-8 px-4">
        {/* Call to Action */}
        <div className="">
          <p className="text-lg font-bold">To find out how we can empower you, contact us now!</p>
        </div>

        {/* Flags and Partner Locations Container */}
       
          {/* Country Flags */}
          <div className="flex items-center space-x-8">
            {countries.map((country) => (
              <div key={country.name} className="flex flex-col items-center">
                <img 
                  src={country.flag} 
                  alt={`${country.name} Flag`} 
                  className="w-20 h-20 rounded-full mb-1 object-cover"
                />
                <span className="text-xs">{country.name}</span>
              </div>
            ))}
          </div>

          {/* Partner Locations */}
          <div className="text-right ml-4">
            <p className="text-sm font-semibold">Our Partner Office Locations:</p>
            <p className="text-xs">Singapore, Ireland, Poland, & Mexico</p>
         
        </div>
      </div>
    </div>
  );
};

export default Logo;
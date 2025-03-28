import React from 'react'
import img1 from '../../../../src/assets/Largest.jpg'
import img2 from '../../../assets/925-Million.jpg'
import img3 from '../../../assets/11500.jpg'
import img4 from '../../../assets/Preferred.jpg'

const WhyArtech = () => {
    const data = [
      {
        image: img1,
        title: "Largest Women-Owned IT Staffing Firm in the US",
      },
      {
        image: img2,
        title: "$925+ Million Global Revenue Run Rate",
      },
      {
        image: img3,
        title: "11,500+ Global Workforce",
      },
      {
        image: img4,
        title: "Preferred Supplier to 100+ Fortune 500 Clients",
      },
    ];
  
    return (
      <div>
        <section className="bg-[#dd3333] text-white py-10">
          <h2 className="text-center text-3xl font-bold">Why Artech?</h2>
        </section>
        <section className="bg-white text-black py-8 px-6 flex flex-wrap justify-center gap-10">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-xs">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
              <p className="mt-4 font-semibold">{item.title}</p>
            </div>
          ))}
        </section>
      </div>
    );
  }

export default WhyArtech
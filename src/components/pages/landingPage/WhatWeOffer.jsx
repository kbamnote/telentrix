import React from 'react';
import img1 from '../../../assets/Project-Delivery.jpg';
import img2 from '../../../assets/Workforce-Solutions.jpg';
import img3 from '../../../assets/Diversity-and-Inclusion.jpg';

const ServiceCard = ({ title, description, services, imageSrc }) => {
  return (
    <div className="   flex flex-col items-center">
      <img src={imageSrc} alt={title} className=" h-48  rounded-t-lg mb-4" />
      <h2 className="text-xl font-bold text-[#dc2911] text-center mb-2">{title}</h2>
      <p className="text-gray-700 text-center mb-4">{description}</p>
      <ul className="text-gray-600 text-center mb-4">
        {services.map((service, index) => (
          <li key={index} className="font-semibold text-[#dc2911]">{service}</li>
        ))}
      </ul>
      <button className="bg-[#253e91] text-white py-2 px-6 rounded-lg hover:bg-blue-800 transition duration-300">
        Know More
      </button>
    </div>
  );
};

const WhatWeOffer = () => {
  const services = [
    {
      title: "Managed Services and Project Delivery",
      description: "Artech Solutions leverages the larger talent-sourcing engine to build optimized delivery teams to achieve exceptional business results for our customers. We provide you with a combination of people, processes, tools and technologies that can help you maximize productivity, improve operations, facilitate agility and scale, reshape spending, and deliver innovation"

 ,
      services: [
        "Application Services",
        "Cloud and Infrastructure",
        "Business Resiliency",
        "Digital Experience"
      ],
      imageSrc: img1
    },
    {
      title: "Workforce Solutions",
      description: "Our Workforce Solutions Teams provide business solutions beyond staffing by understanding client needs, utilizing a unique talent supply chain, high-performing teams, and flexible engagement models to deliver impactful human intellect.",
      services: [
        "Contingent Staffing",
        "Project Staffing",
        "Master Vendor",
        "RPO - Projects and Programs" ,  
        "Direct Hire",
        "Payroll and Transition Services"
      ],
      imageSrc: img2
    },
    {
      title: "Diversity and Inclusion Programs",
      description: "At Artech, diversity is in our DNA and is an organizing principle in how we do business. As a certified minority and women-owned business, we are at the forefront of diverse hiring in the United States for three decades. We are committed to inclusive hiring practices internally, with our suppliers, and for our clients and outperform the national average by leaps and bounds. By partnering with Artech, clients benefit from the workforce representation we have already attained.",
      services: [],
      imageSrc: img3
    }
  ];

  return (
    <div className=" py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          <span className="text-[#253e91] border-b-4 border-[#fba91e]">What We Offer</span>
        
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              services={service.services}
              imageSrc={service.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;

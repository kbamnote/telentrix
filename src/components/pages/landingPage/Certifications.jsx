import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import c1 from '../../../assets/c1.jpg'
import c2 from '../../../assets/c2.jpg'
import c3 from '../../../assets/c3.jpg'
import c4 from '../../../assets/c4.png'
import c5 from '../../../assets/c-5.jpg'
import c6 from '../../../assets/c6.jpg'
import c7 from '../../../assets/c-7.jpg'
import c8 from '../../../assets/c-8.jpg'
import c9 from '../../../assets/c-9.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const certificationImages = [
  c3, c4,c9,c1,c5,c8,c7,c8,c6,c2
  
];

const Certifications = () => {
  return (
    <div className="w-full bg-white py-8">
        <section className="bg-[#253e91]  text-white py-10 ">
          <h2 className="text-center text-3xl font-bold">Certifications</h2>
        </section>
      <div className="container mx-auto px-4">
      
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // When window width is >= 320px
            320: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            // When window width is >= 480px
            480: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            // When window width is >= 640px
            640: {
              slidesPerView: 4,
              spaceBetween: 30
            }
          }}
          className="certifications-swiper"
        >
          {certificationImages.map((image, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <div className="w-full h-32 flex items-center justify-center p-4 bg-white shadow-md rounded-lg">
                <img 
                  src={image} 
                  alt={`Certification ${index + 1}`} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Certifications;
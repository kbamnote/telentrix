import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import c1 from "../../../assets/c1.jpg";
import c2 from "../../../assets/c2.jpg";
import c3 from "../../../assets/c3.jpg";
import c4 from "../../../assets/c4.png";
import c5 from "../../../assets/c-5.jpg";
import c6 from "../../../assets/c6.jpg";
import c7 from "../../../assets/c-7.jpg";
import c8 from "../../../assets/c-8.jpg";
import c9 from "../../../assets/c-9.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const certificationImages = [c3, c4, c9, c1, c5, c8, c7, c8, c6, c2];

const Certifications = () => {
  return (
    <div className="w-full bg-white py-8">
      {/* Header Section */}
      <section className="bg-[#253e91] text-white py-10">
        <h2 className="text-center text-3xl font-bold">Certifications</h2>
      </section>

      {/* Swiper Container */}
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={15}
          slidesPerView={5}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 }, // Mobile
            480: { slidesPerView: 3, spaceBetween: 15 }, // Tablets
            768: { slidesPerView: 4, spaceBetween: 20 }, // Medium Screens
            1024: { slidesPerView: 5, spaceBetween: 25 }, // Laptops & Desktops
          }}
          className="certifications-swiper"
        >
          {certificationImages.map((image, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <div className="w-full h-[200px] flex items-center justify-center p-2 md:p-4 rounded-lg">
                <img
                  src={image}
                  alt={`Certification ${index + 1}`}
                  className="w-auto h-auto max-h-full max-w-full object-contain"
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

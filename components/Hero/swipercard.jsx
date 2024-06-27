"use client";

import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { FaCalendarAlt } from 'react-icons/fa';

import { eventData } from "./data";

const ActiveSlider = () => {
  return (
    <div className="flex items-center justify-center flex-col h-auto bg-white py-10">
      <Swiper
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="max-w-[90%] lg:max-w-[80%]"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          pauseOnMouseLeave: true,
        }}
      >
        {eventData.map((event, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-4 mb-10 group relative shadow-lg text-black rounded-xl p-4 h-[300px] w-[300px] md:h-[350px] md:w-[350px] lg:h-[450px] lg:w-[350px] overflow-hidden cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl">
                <img
                  src={event.image.src}
                  alt={event.title}
                  className="w-full h-2/3 object-contain rounded-lg"
                />
                <div className="flex items-center text-gray-500 text-xs md:text-sm">
                  <FaCalendarAlt className="mr-1" />
                  {event.date}
                </div>
                <div className="relative flex flex-col gap-2">
                  <h1 className="text-lg md:text-xl lg:text-2xl">{event.title}</h1>
                  <p className="text-xs md:text-sm lg:text-[18px]">{event.shortSynopsis}</p>
                  <a href={event.href} className="text-black text-xs md:text-sm hover:underline font-bold">Read more</a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;

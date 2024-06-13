"use client";

import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination,Autoplay } from "swiper/modules";
import { FaCalendarAlt } from 'react-icons/fa';

import {eventData} from "./data"


const ActiveSlider = () => {
  return (
    <div className="flex items-center justify-center flex-col h-[900px] bg-white">
      <Swiper
      loop={true}
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination,Autoplay]}
        className="max-w-[80%] lg:max-w-[80%]"
    

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
              <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-black rounded-xl p-4 h-[200px] w-[200px] lg:h-[450px] lg:w-[350px] overflow-hidden cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl"> {/* Height and width of the card and all its hover animations*/}
                <img 
                  src={event.image.src}
                  alt={event.title}
                  className="w-full h-full   object-contain rounded-lg" // Make sure to set the image size of all the same.
                />
                  <div className="flex items-center text-gray-500 text-sm">
              <FaCalendarAlt className="mr-1" />
              {event.date}
            </div>
                <div className="relative flex flex-col gap-3">
                  <h1 className="text-xl lg:text-2xl">{event.title}</h1>
                  <p className="lg:text-[18px]">{event.shortSynopsis}</p>
                  <a href={event.href} className="text-black text-sm hover:underline font-bold">Read more</a>
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

import Story from './Story';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';

const Stories = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.swiper.slideNext();
  };

  return ( 
    <div className='min-h-screen w-full mt-32'>
      <hr className='w-[90%] m-auto border-t border-[#363535d8]' />
      
      <div className='flex justify-end px-10 pt-10 gap-3'>
        <div className='w-6 cursor-pointer' id="prevSlide" onClick={handlePrev}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 12h-15m0 0l5.625-6M4.5 12l5.625 6"/>
          </svg>
        </div>
        <div className='w-6 cursor-pointer' id="nextSlide" onClick={handleNext}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="black" fillRule="evenodd" d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06" clipRule="evenodd"/>
          </svg>
        </div>
      </div>

     
        <Swiper
          ref={swiperRef}
          // spaceBetween={250}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 260,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 250,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 80,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 180,
            },
            1060:{
              slidesPerView: 6,
              spaceBetween: 180,
            }


          }}
          modules={[FreeMode, Pagination]}
          onResize={() => swiperRef.current?.swiper.update()}
        >
          <SwiperSlide><Story/></SwiperSlide>
          <SwiperSlide><Story/></SwiperSlide>
          <SwiperSlide><Story/></SwiperSlide>
          <SwiperSlide><Story/></SwiperSlide>
          <SwiperSlide><Story/></SwiperSlide>
          <SwiperSlide><Story/></SwiperSlide>
        </Swiper>
      </div>
    
  );
};

export default Stories;

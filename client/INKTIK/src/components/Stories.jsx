import axios from 'axios';
import Story from './Story';
import React, { useEffect, useRef, useState } from 'react';

const Stories = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://bytvance-backend.vercel.app/blog/approved-blogs')
      .then((res) => {
        setBlogs(res.data);
      }).catch((err) => {
        console.log(err);
      });
  }, []);

  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
      const width = swiperRef.current.firstChild.offsetWidth; 
      swiperRef.current.scrollBy({ left: width, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      const width = swiperRef.current.firstChild.offsetWidth;
      swiperRef.current.scrollBy({ left: -width, behavior: 'smooth' }); // Scroll back by one card width
    }
  };

  return (
    <div className='min-h-auto w-full mt-10 px-2 md:px-10'>
      <hr className='w-[90%] m-auto border-t border-[#37363647] ' />
     <div className='flex items-center justify-between px-5 pt-5'>

      <h1 className='text-lg md:text-xl'> 
      Get started with our <span className='text-xl font-semibold md:text-2xl'>best stories</span>
      </h1>


        <div className='xs:flex justify-end gap-3 hidden'>
        <div className='w-6 cursor-pointer' id="prevSlide" onClick={handlePrev}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 12h-15m0 0l5.625-6M4.5 12l5.625 6" />
          </svg>
        </div>
        <div className='w-6 cursor-pointer' id="nextSlide" onClick={handleNext}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="black" fillRule="evenodd" d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06" clipRule="evenodd" />
          </svg>
        </div>
      </div>
     </div>

      <div
      ref={swiperRef}
      className='flex  px-4  overflow-auto md:my-6 hide-scrollbar'
      style={{ scrollSnapType: 'x mandatory' }}
    >
      {Array.isArray(blogs) && blogs.length > 0 ? ( // Check if blogs is an array and has items
        blogs.map((blog) => (
          <Story key={blog._id} {...blog} />
        ))
      ) : (
        <div role='status' className='max-w-md mt-6 md:h-96 border border-gray-300 rounded-lg p-4 xs:w-60 sm:w-72 md:w-80 lg:w-96'>
      <div class="animate-pulse w-full bg-gray-300 h-48 rounded-lg mb-5 flex justify-center items-center">
        <svg class="w-8 h-8 stroke-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.2352 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z" stroke="stroke-current" stroke-width="1.6" stroke-linecap="round"></path>
        </svg>
      </div>
      <div class=' w-full flex justify-between items-start animate-pulse'>
        <div class="block">
            <h3 class='h-3 bg-gray-300 rounded-full  w-48 mb-4'></h3>
            <p class='h-2 bg-gray-300 rounded-full w-32 mb-2.5'></p>
        </div>
        <span class="h-2 bg-gray-300 rounded-full w-16 "></span>
      </div>
      </div>
      )}
    </div>
    </div>
  );
};

export default Stories;

import axios from 'axios';
import Story from './Story';
import React, { useEffect, useRef, useState } from 'react';

const Stories = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/blog/approved-blogs')
      .then((res) => {
        setBlogs(res.data);
      }).catch((err) => {
        console.log(err);
      });
  }, []);

  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
      const width = swiperRef.current.firstChild.offsetWidth; // Get the width of one card
      swiperRef.current.scrollBy({ left: width, behavior: 'smooth' }); // Scroll by one card width
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      const width = swiperRef.current.firstChild.offsetWidth;
      swiperRef.current.scrollBy({ left: -width, behavior: 'smooth' }); // Scroll back by one card width
    }
  };

  return (
    <div className='min-h-screen w-full mt-32 px-2 md:px-10'>
      <hr className='w-[90%] m-auto border-t border-[#363535d8]' />

      <div className='flex justify-end px-10 pt-10 gap-3'>
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

      <div
      ref={swiperRef}
      className='flex gap-4 overflow-hidden scrollbar-hide cursor-grab my-6'
      style={{ scrollSnapType: 'x mandatory' }}
    >
      {Array.isArray(blogs) && blogs.length > 0 ? ( // Check if blogs is an array and has items
        blogs.map((blog) => (
          <Story key={blog._id} {...blog} />
        ))
      ) : (
        <p>No blogs available.</p> // Optional: a fallback message
      )}
    </div>
    </div>
  );
};

export default Stories;

import React, { useEffect, useState } from 'react';
import LatelyCards from './LatelyCards';
import axios from 'axios';
import { admin, mariyam, zain } from '../assets';
import { Link } from 'react-router-dom';

const Lately = () => {
  const [adminBlogs, setAdminBlogs] = useState([]);
  const [visibleBlogs, setVisibleBlogs] = useState(6); 
  const [loading, setLoading] = useState(true); 


  useEffect(() => {
    axios.get('http://localhost:4000/admin/admin-blogs')
      .then(response => {
        setAdminBlogs(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // Function to load more blogs
  const loadMoreBlogs = () => {
    setVisibleBlogs(prevVisibleBlogs => prevVisibleBlogs + 6); // Increase the visible blogs by 6
  };

  return (
    <div className='w-full'>
      <hr className='w-[90%] m-auto border-t border-[rgba(54,53,53,0.85)] mt-10'/>
      
      <div className='flex items-center justify-between py-8 px-8 md:px-12'>
      <h1 className='text-3xl xs:text-4xl sm:text-5xl md:text-5xl whitespace-nowrap tracking-wider font-thin leading-[2.8rem]'>
  See what we’ve
  <br />
  <span className='text-3xl xs:text-5xl sm:text-6xl md:text-6xl font-bold'>
    Written lately
  </span>
</h1>

        <div>
          <div className="flex hidden sm:block items-center -space-x-4">
            {/* Author avatars */}

            <Link to={`/author-info/1`}>
            <img alt="user 1" src={admin} className="relative inline-block h-16 w-16 md:w-20 md:h-20 !rounded-full  border-4 border-white object-cover  hover:z-10 focus:z-10 object-top" />
            </Link>
            <Link to={`/author-info/2`}>
            <img alt="user 2" src={zain} className="relative inline-block  h-16 w-16 md:w-20 md:h-20 !rounded-full border-4 border-white object-cover object-top hover:z-10 focus:z-10" />
            </Link>
            <Link to={`/author-info/3`}>
            <img alt="user 3" src={mariyam} className="relative inline-block  h-16 w-16 md:w-20 md:h-20 !rounded-full border-4 border-white object-cover object-center hover:z-10 focus:z-10" />
            </Link>
            
          </div>
          <p className='hidden sm:block text-center text-gray-600 p-2 text-sm md:text-base'>Meet our top authors</p>
        </div>
      </div>

      {adminBlogs.length === 0 ?   <div role='status' className='max-w-md md:h-96 mx-8 border border-gray-300 rounded-lg p-4 xs:w-60 sm:w-72 md:w-80 lg:w-96'>
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
      </div>:  <div className='grid w-full grid-cols-1 xs:grid-cols-2 md:grid-cols-3  md:px-14 px-5 gap-3 lg:gap-5'>
        {adminBlogs.slice(0, visibleBlogs).map((blog) => (
          <LatelyCards key={blog._id} {...blog} />
        ))}
      </div>  }


      {/* Load More Button */}
      {visibleBlogs < adminBlogs.length && (
        <div className='flex items-center justify-center'>
          <div onClick={loadMoreBlogs} className='bg-black text-white w-36 text-center p-3 py-5 rounded-[5rem] cursor-pointer'>
            Load More
          </div>
        </div>
      )}
    </div>
  );
}

export default Lately;

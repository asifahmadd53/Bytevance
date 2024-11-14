import React, { useEffect, useState } from 'react';
import LatelyCards from './LatelyCards';
import RecomendedCards from './RecomendedCards';
import Footer from './Footer';
import axios from 'axios';

const Recomended = () => {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('https://bytvance-backend.vercel.app/blog/approved-blogs')
      .then((res) => {
        setBlogs(res.data);
      }).catch((err) => {
        console.log(err);
      });
  }, []);

  return (

<div className='pt-12 h-auto w-full px-2 '>
<hr className='w-[90%] m-auto border-t border-[#3736366c] mb-10' />
<h1 className='px-6 text-xl font-bold mb-4 md:text-2xl md:px-10'>Recomended</h1>
    {blogs.length === 0 ?  <div role='status' className=' border border-gray-300 rounded-lg p-4 xs:w-44 w-36 md:w-40  mb-5  mx-4 md:mx-12'>
      <div class="animate-pulse w-full bg-gray-300 h-32 rounded-lg mb-5 flex justify-center items-center">
       <svg class="w-8 h-8 stroke-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.2352 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z" stroke="stroke-current" stroke-width="1.6" stroke-linecap="round"></path>
       </svg>
      </div>
       <div class=' w-full flex justify-between items-start animate-pulse'>
        <div class="block">
           <h3 class='h-3 bg-gray-300 rounded-full  w-28 mb-4'></h3>
             <p class='h-2 bg-gray-300 rounded-full w-32 mb-2.5'></p>
        </div>
        <span class="h-2 bg-gray-300 rounded-full w-16 "></span>
       </div>
       </div> : <div className='grid w-full grid-cols-2 xs:grid-cols-3 md:px-14 lg:px-20 px-6 sm:grid-cols-4 md:gap-5 md:grid-cols-5 pt-8 gap-2'>
       {
       blogs.slice(3, 9).map((blog) => {
          return <RecomendedCards key={blog._id} {...blog} />
       })
   }
</div> }


</div>
  );
};

export default Recomended;

import React, { useEffect, useState } from 'react';
import LatelyCards from './LatelyCards';
import axios from 'axios';

const Lately = () => {
  const [adminBlogs, setAdminBlogs] = useState([]);
  const [visibleBlogs, setVisibleBlogs] = useState(6); // Limit initial visible cards to 6

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
      <hr className='w-[90%] m-auto border-t border-[#363535d8]' />
      
      <div className='flex items-center justify-between py-10 px-8 md:px-12'>
        <h1 className='text-5xl whitespace-nowrap tracking-wider'>
          See what we’ve
          <hr className='border-none' />
          <span className='text-5xl md:text-6xl font-bold'>Written lately</span>
        </h1>
        <div>
          <div className="flex hidden sm:block items-center -space-x-4">
            {/* Author avatars */}
            <img alt="user 1" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80" className="relative inline-block h-16 w-16 md:w-20 md:h-20 !rounded-full  border-2 border-white object-cover object-center hover:z-10 focus:z-10" />
            <img alt="user 2" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80" className="relative inline-block  h-16 w-16 md:w-20 md:h-20 !rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10" />
            <img alt="user 3" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1288&amp;q=80" className="relative inline-block  h-16 w-16 md:w-20 md:h-20 !rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10" />
            <img alt="user 4" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1287&amp;q=80" className="relative inline-block  h-16 w-16 md:w-20 md:h-20 !rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10" />
            <img alt="user 5" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1760&amp;q=80" className="relative inline-block  h-16 w-16 md:w-20 md:h-20 !rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10" />
          </div>
          <p className='hidden sm:block text-right text-gray-600 p-2 text-sm'>Meet our top authors</p>
        </div>
      </div>

      <div className='grid w-full grid-cols-2 md:grid-cols-3 overflow-hidden md:px-14 px-5'>
        {adminBlogs.slice(0, visibleBlogs).map((blog) => (
          <LatelyCards key={blog._id} {...blog} />
        ))}
      </div>

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

import React, { useEffect, useState } from 'react';
import LatelyCards from './LatelyCards';
import RecomendedCards from './RecomendedCards';
import Footer from './Footer';
import axios from 'axios';

const Recomended = () => {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/blog/approved-blogs')
      .then((res) => {
        setBlogs(res.data);
      }).catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='pt-14 h-auto'>
       <hr className='w-[90%] m-auto border-t border-[#3736366c]' />
    <div className='grid w-full grid-cols-3 overflow-hidden md:px-14 lg:px-20 px-10 sm:grid-cols-4 md:gap-5 md:grid-cols-5 custom-gap pt-10'>


        

      {
         
          blogs.slice(0, 6).map((blog) => {
            return <RecomendedCards key={blog._id} {...blog} />
          })
        }

        
        

       
      
      
      </div>
      </div>
  );
};

export default Recomended;

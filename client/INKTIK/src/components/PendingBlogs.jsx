import { useEffect, useState } from 'react';
import PendingBlog from './PendingBlog';
import axios from 'axios';

const PendingBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('https://bytvance-backend.vercel.app/blog/pending-blogs')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className='pt-20'>
      {blogs.length > 0 && (
        <h1 className='text-4xl text-center py-8'>Pending Blogs</h1>
      )}
      <div className='flex gap-4 flex-wrap items-center justify-center'>
        {blogs.length > 0 ? (
          blogs.map((blog) => <PendingBlog key={blog._id} {...blog} />)
        ) : (
          <div className="flex gap-2 pt-10 md:pt-32">
          <div className="w-4 h-4 md:w-6 md:h-6 rounded-full animate-pulse bg-gray-700"></div>
          <div className="w-4 h-4  md:w-6 md:h-6 rounded-full animate-pulse bg-gray-700"></div>
          <div className="w-4 h-4  md:w-6 md:h-6 rounded-full animate-pulse bg-gray-700"></div>
      </div>
        )}
      </div>
    </div>
  );
};

export default PendingBlogs;

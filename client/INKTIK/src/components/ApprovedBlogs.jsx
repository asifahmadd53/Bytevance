import { useEffect, useState } from 'react';
import PendingBlog from './PendingBlog';
import axios from 'axios';

const ApprovedBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/blog/approved-blogs')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {blogs.length > 0 && (
        <h1 className='text-4xl text-center py-8'>Approved Blogs</h1>
      )}
      <div className='flex gap-4 flex-wrap items-center justify-center'>
        {blogs.length > 0 ? (
          blogs.map((blog) => <PendingBlog key={blog._id} {...blog} />)
        ) : (
          <p className='text-center text-lg'>No pending blogs available.</p>
        )}
      </div>
    </div>
  );
};

export default ApprovedBlogs;

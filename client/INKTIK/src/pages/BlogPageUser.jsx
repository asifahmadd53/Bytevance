import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { admin, profileicon } from '../assets';

const BlogPageUser = () => {
  const [blogInfo, setBlogInfo] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const apiEndpoint = location.pathname.includes('/admin-blog')
      ? `https://bytvance-backend.vercel.app/admin/admin-blog/${id}`
      : `https://bytvance-backend.vercel.app/blog/blog-user-page/${id}`;

      axios
      .get(apiEndpoint)
      .then((response) => {
        setBlogInfo(response.data);  // Corrected syntax here
      })
      .catch(() => alert('Failed to load blog post'));
    
  }, [id, location.pathname]);

  if (!blogInfo) {
    return (
      <div className="flex flex-col justify-center items-center w-full h-screen  flex-wrap  gap-12 animate-pulse px-4">
  {/* SVG and Placeholder Box */}
  <div className="grid bg-gray-300 rounded-lg place-items-center w-44 h-44 md:w-60 md:h-60">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="w-24 h-24 text-gray-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
      />
    </svg>
  </div>

  {/* Text Skeleton */}
  <div className="w-full max-w-xl">
    <div className="block w-full h-8 mb-6 bg-gray-300 rounded-full">&nbsp;</div>
    <div className="block w-full h-4 mb-4 bg-gray-300 rounded-full">&nbsp;</div>
    <div className="block w-full h-4 mb-4 bg-gray-300 rounded-full">&nbsp;</div>
    <div className="block w-full h-4 mb-4 bg-gray-300 rounded-full">&nbsp;</div>
    <div className="block w-full h-4 mb-4 bg-gray-300 rounded-full">&nbsp;</div>
    <div className="block w-full h-4 mb-4 bg-gray-300 rounded-full">&nbsp;</div>
    <div className="block w-full h-4 mb-4 bg-gray-300 rounded-full">&nbsp;</div>
  </div>
</div>

  
    )
   
    
  }
  
  
return (
  <div className="px-2 md:px-20">
  {blogInfo ? (
    <main className="mt-10 w-full">
      <article className="mb-4 md:mb-0 w-full mx-auto relative sm:flex sm:items-center sm:justify-between ">
        <div className="px-5 sm:w-[60%]">
          {/* Updated Title Design */}
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-gray-900 tracking-wide w-full break-words leading-tight">
            {blogInfo.title}
          </h2>
          <div className="flex items-center gap-4 py-4 pt-5">
            <img
              className="w-8 h-8 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 object-contain object-top"
               src={!blogInfo ? admin : profileicon}
              alt="Profile Avatar"
            />
            <h1 className=''>
             
              {blogInfo?.author?.fullname ? blogInfo.author.fullname: 'Admin'}
              
              
              <br />
            <p className="text-sm text-gray-500">
      {new Date(blogInfo.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      })}
    </p>
            </h1>
            
          </div>
          
        </div>
      

          <img
                src={blogInfo.cover}
                alt="Blog Cover"
                className="w-[80%] sm:w-[60%] md:w-[40%]  mx-auto rounded-lg object-contain"
            />
      </article>

      <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-12">
        <section className="px-4 lg:px-0 mt-12 text-gray-900 text-lg leading-relaxed w-full lg:w-3/4">
          
          <div className="border-l-4 border-gray-900 pl-4 mb-6 italic rounded">
            Description
          </div>
          <div
                className="pb-6 text-lg tracking-wider font-light rounded mb-6 break-words w-full md:w-[95%] mx-auto"
                dangerouslySetInnerHTML={{ __html: blogInfo.description }}
              ></div>
          {/* Updated Description Design */}
          <p className="pb-2 text-gray-600 text-base leading-loose">
  Explore insightful perspectives and valuable takeaways on a variety of topics, thoughtfully crafted to inform and inspire.
</p>
<p className="pb-2 text-gray-600 text-base leading-loose">
  Each article provides practical knowledge and meaningful advice, aimed at enhancing your understanding and expanding your view.
</p>
<p className="pb-10 text-gray-600 text-base leading-loose">
  Whether you're seeking tips, strategies, or simply a fresh viewpoint, you'll find content that resonates and engages.
</p>


          <div className="border-l-4 border-gray-900 pl-4 mb-6 italic rounded">
            Summary
          </div>

          <div
                className="pb-6 text-gray-800 text-base md:text-lg leading-loose w-full break-words  md:w-[95%] mx-auto"
                dangerouslySetInnerHTML={{ __html: blogInfo.summary }}
              ></div>

          <p className="pb-2 text-gray-600 text-base leading-loose">
  Gain valuable insights to enhance your understanding of key topics.
</p>
<p className="pb-2 text-gray-600 text-base leading-loose">
  Explore practical ideas and strategies to tackle everyday challenges.
</p>
<p className="pb-6 text-gray-600 text-base leading-loose">
  Each article provides clear takeaways to inform and inspire action.
</p>

        </section>

        <aside className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm lg:mr-10">
          <div className="p-4 border-t border-b md:border md:rounded">
            <div className="flex py-2 gap-4 items-center">
            <img
              className="w-8 h-8 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 object-cover object-top"
               src={!blogInfo ? admin : profileicon}
              alt="Profile Avatar"
            />
              <div>
                <p className="font-extrabold text-gray-700 text-sm ">
                  {blogInfo.author?.fullname}
                </p>
                <p className="font-semibold text-gray-600 text-xs"> Author </p>
              </div>
            </div>
            <p className="text-gray-700 py-3">
            <span className="font-bold text-lg text-gray-700 hover:text-gray-800 transition-all duration-300 ease-in-out px-2">
    {blogInfo.author?.fullname}
</span>

writes about a variety of topics, sharing useful insights and helpful information.
</p>

          </div>
        </aside>
      </div>
    </main>
  ) : (
    <p>Loading blog post...</p>
  )}
</div>

);

};

export default BlogPageUser;

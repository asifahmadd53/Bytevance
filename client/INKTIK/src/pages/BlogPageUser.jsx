import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const BlogPageUser = () => {
  const [blogInfo, setBlogInfo] = useState(null);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    const apiEndpoint = location.pathname.includes('/admin-blog')
      ? `http://localhost:4000/admin/admin-blog/${id}`
      : `http://localhost:4000/blog/blog-user-page/${id}`;

      axios
      .get(apiEndpoint)
      .then((response) => {
        console.log(response.data);
        setBlogInfo(response.data);  // Corrected syntax here
      })
      .catch(() => alert('Failed to load blog post'));
    
  }, [id, location.pathname]);

  if (!blogInfo) {
    return <p>Loading blog post...</p>;
  }
  
  
return (
  <div className="max-w-screen-lg mx-auto">
    {blogInfo ? (
      <main className="mt-10">
        <article className="mb-4 md:mb-0 w-full mx-auto relative sm:flex items-center justify-between px-2">
          <div className="px-4 sm:w-[50%]">
            <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
              {blogInfo.title}
            </h2>
            <a
              href="#"
              className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
            >
              Cryptocurrency
            </a>
          </div>

          <img
            src={blogInfo.cover}
            alt="Blog visual"
            className="sm:w-[50%] md:w-[40%] w-full object-cover lg:rounded h-96 md:h-[35rem]"
          />
        </article>

        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <section className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
            <p className="pb-6">Advantage old had otherwise sincerity dependent additions...</p>
            <p className="pb-6">Difficulty on insensible reasonable in...</p>
            <p className="pb-6">Adieus except say barton put feebly favour him...</p>
            <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
              Summary
            </div>
            
            
            <p className="pb-6">{blogInfo.summary}</p>
            <p className="pb-6">Dashwood contempt on mr unlocked resolved...</p>
            <p className="pb-6">Breakfast agreeable incommode departure it an...</p>
            <p className="pb-6">Detract yet delight written farther his general...</p>
          </section>

          <aside className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
            <div className="p-4 border-t border-b md:border md:rounded">
              <div className="flex py-2">
                <img
                  src="https://randomuser.me/api/portraits/men/97.jpg"
                  alt="Editor Mike Sullivan"
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-700 text-sm"> {blogInfo.author?.fullname} </p>
                  <p className="font-semibold text-gray-600 text-xs"> Editor </p>
                </div>
              </div>
              <p className="text-gray-700 py-3">
                Mike writes about technology. Yourself required no at thoughts delicate landlord it be.
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

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { profileicon } from '../assets';

const BlogPage = () => {
    const [blogInfo, setBlogInfo] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://bytvance-backend.vercel.app/blog/blog/${id}`)
            .then(response => setBlogInfo(response.data))
            .catch(error => {
                console.error(error);
                alert('Failed to load blog post');
            });
    }, [id]);

    const handleApprove = async () => {
        try {
            await axios.patch(`https://bytvance-backend.vercel.app/admin/approved/${id}`);
            setBlogInfo(prev => ({ ...prev, approved: true }));
        } catch (error) {
            console.log(error);
        }
    };

    const handlePending = async () => {
        try {
            await axios.patch(`https://bytvance-backend.vercel.app/admin/pending/${id}`);
            setBlogInfo(prev => ({ ...prev, approved: false }));
        } catch (error) {
            console.log(error);
        }
    };

    if (!blogInfo) {
        return (
            <div className="flex flex-col justify-center items-center w-full h-screen gap-12 animate-pulse px-4 pt-10">
                {/* SVG and Placeholder Box */}
                <div className="grid bg-gray-300 rounded-lg place-items-center w-32 h-32 md:w-72 md:h-72">
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
                    {[...Array(7)].map((_, i) => (
                        <div key={i} className="block w-full h-4 mb-4 bg-gray-300 rounded-full">&nbsp;</div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="w-full mx-auto py-10 bg-white ">
            <div className="w-[90%] mx-auto flex justify-between items-center text-gray-800 text-2xl md:text-4xl font-semibold pt-10">
                <h1></h1>
             <button
    className={`py-1 px-2 rounded-md text-white font-semibold transition-colors duration-300 ${
        blogInfo.approved
            ? 'bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700'
            : 'bg-gradient-to-r from-green-600 to-green-800 hover:from-green-500 hover:to-green-700'
    }`}
    onClick={blogInfo.approved ? handlePending : handleApprove}
>
    {blogInfo.approved ? 'Mark as Pending' : 'Approve'}
</button>
            </div>

            <h1 className="w-[92%] mx-auto lg:text-4xl md:text-3xl xs:text-2xl text-center font-serif font-semibold pb-4 pt-8 dark:text-white">
                {blogInfo.title}
            </h1>

            <img
                src={blogInfo.cover}
                alt="Blog Cover"
                className="w-[80%] sm:w-[60%] md:w-[40%]  mx-auto rounded-lg object-contain"
            />

            <div className="w-[90%] mx-auto flex md:gap-4 xs:gap-2 justify-center items-center pt-4">
                <div className="flex gap-2 items-center">
                    <img
                        src={profileicon}
                        alt="Blogger Profile"
                        className="md:w-[2.2rem] md:h-[2.2rem] w-[2rem] xs:h-[2rem] rounded-full border border-black"
                    />
                    <h2 className="text-sm font-semibold px-2">
                        {blogInfo.author?.fullname || 'Anonymous'}
                    </h2>
                </div>
                <div className='hidden md:block'>|</div>
                <h3 className="text-sm font-semibold text-gray-600 pt-3 md:pt-0">
                    {new Date(blogInfo.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                    })}
                </h3>
            </div>

            <div className="py-6 bg-white">
                <div className="w-[90%] mx-auto pt-4">
                    <h1 className="font-semibold text-lg mt-4">Description:</h1>
                    <p
  className="mt-2 text-md break-words"
  dangerouslySetInnerHTML={{ __html: blogInfo.description }}
></p>


                    <h1 className="font-semibold text-lg mt-4">Summary:</h1>
                     <p
  className="mt-2 text-md break-all"
  dangerouslySetInnerHTML={{ __html: blogInfo.summary }}
></p>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;

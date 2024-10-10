import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogPage = () => {
    const [blogInfo, setBlogInfo] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:4000/blog/blog/${id}`)
            .then(response => setBlogInfo(response.data))
            .catch(error => {
                console.error(error);
                alert('Failed to load blog post');
            });
    }, [id]);

    const handleApprove = async () => {
        try {
            await axios.patch(`http://localhost:4000/admin/approved/${id}`);
            setBlogInfo(prev => ({ ...prev, approved: true }));
        } catch (error) {
            console.log(error);
        }
    };

    const handlePending = async () => {
        try {
            await axios.patch(`http://localhost:4000/admin/pending/${id}`);

            setBlogInfo(prev => ({ ...prev, approved: false }));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="w-full h-full bg-white dark:bg-gray-800">
            {blogInfo && (
                <div className="w-full mx-auto py-10 bg-white">
                    <div className="w-[94%] mx-auto flex justify-between items-center text-gray-800 text-2xl md:text-4xl font-semibold">
                        <h1>Bytvance</h1>

                        {blogInfo.approved ? (
                            <button
                                className='bg-red-600 py-1 px-2 rounded-md'
                                onClick={handlePending}
                            >
                                Mark as Pending
                            </button>
                        ) : (
                            <button
                                className='bg-green-600 py-1 px-2 rounded-md'
                                onClick={handleApprove}
                            >
                                Approve
                            </button>
                        )}
                    </div>

                    <h1 className="w-[92%] mx-auto lg:text-4xl md:text-3xl xs:text-2xl text-center font-serif font-semibold pb-4 pt-8 dark:text-white">
                        {blogInfo.title}
                    </h1>

                    <img
                        src={blogInfo.cover}
                        alt="Blog Cover"
                        className="w-[80%] sm:w-[60%] md:w-[50%] md:h-[40rem] mx-auto rounded-lg object-contain"
                    />

                    <div className="w-[90%] mx-auto flex md:gap-4 xs:gap-2 justify-center items-center pt-4">
                        <div className="flex gap-2 items-center">
                            <img
                                src={blogInfo.author?.profilePicture || 'https://example.com/default_profile_image.jpg'}
                                alt="Blogger Profile"
                                className="md:w-[2.2rem] md:h-[2.2rem] xs:w-[2rem] xs:h-[2rem] rounded-full"
                            />
                            <h2 className="text-sm font-semibold">
                                {blogInfo.author?.fullname || 'Anonymous'}
                            </h2>
                        </div>
                        <div className="">|</div>
                        <h3 className="text-sm font-semibold text-gray-600">
                            {new Date(blogInfo.createdAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </h3>
                    </div>

                    <div className="py-6 bg-white">
                        <div className="md:w-[80%] xs:w-[90%] mx-auto pt-4">
                            <h1 className="font-semibold text-lg mt-4">Description:</h1>
                            <p className="mt-2 text-md">{blogInfo.description}</p>

                            <h1 className="font-semibold text-lg mt-4">Summary</h1>
                            <p className="mt-2 text-md">{blogInfo.summary}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogPage;

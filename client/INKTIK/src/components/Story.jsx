import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { profileicon } from '../assets';

const Story = ({ _id, author, cover, title, description, createdAt }) => {
  const formatDate = new Date(createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',

  });

  return (
    <div className="relative flex flex-col my-4 min-w-[90%] xs:min-w-56 xs:max-w-56 sm:min-w-72 md:min-w-80 lg:min-w-96 shadow-sm rounded-lg transition-all duration-700">
      <Link to={`/blog/blog-user-page/${_id}`}>
        <div className="relative h-[25rem] xs:h-60 sm:min-h-80 md:min-h-[22rem] lg:min-h-[27rem] text-white m-2.5 rounded-md">
          <img className='h-full w-full rounded-xl object-cover hover:-translate-y-1 duration-500' src={cover} alt={title}/>
        </div>
      </Link>

      <div className="p-2">
        <h6
          className="mb-2 text-slate-800 text-xl font-semibold hover:underline cursor-pointer tracking-wider w-full text-left overflow-hidden whitespace-normal break-words line-clamp-2"
        >
          {title}
        </h6>

        <p className="text-slate-600 leading-normal font-light overflow-hidden text-ellipsis line-clamp-1 break-words">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <img
            alt={author.fullname}
            src={profileicon}
            className="relative inline-block h-8 w-8 rounded-full"
          />
          <div className="flex flex-col ml-3 text-sm">
            <span className="text-slate-800 font-semibold">{author?.fullname || 'Anonymouse'}</span>
            <span className="text-slate-600">
              {formatDate}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;

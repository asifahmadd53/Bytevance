import React from 'react'
import { Link } from 'react-router-dom'
import { profileicon } from '../assets';

const RecomendedCards = ({ _id, title, cover, description, summary }) => {
  return (
    <div className="min-w-full md:w-32 lg:w-36  mb-5">
      <div className="rounded-xl flex flex-col">
        <div className="relative">
          <Link to={`/blog/blog-user-page/${_id}`}>
            <img
              className="hover:-translate-y-1 duration-500 transition-all rounded-2xl w-full h-[12rem] md:h-[14rem] object-cover"
              src={cover}
              alt="Blog Cover"
            />
          </Link>
          <div className="absolute bottom-2  left-2">
            <img
              className="w-8 h-8 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src={profileicon}
              alt="Profile Avatar"
            />
          </div>
        </div>

        <div className="py-3 flex-grow">
  <Link to={`/blog/blog-user-page/${_id}`} className="block max-w-xs">
    <h5 className="text-gray-900 font-bold text-lg  mb-2 cursor-pointer hover:underline tracking-tight truncate">
      {title}
    </h5>
  </Link>
</div>

      </div>
    </div>
  );
}

export default RecomendedCards;

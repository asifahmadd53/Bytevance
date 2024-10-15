import React from 'react'
import { Link } from 'react-router-dom'

const RecomendedCards = ({ _id, title, cover, description, summary }) => {
  return (
    <div className="w-36 md:w-40 lg:w-52 mb-5">
      <div className="rounded-xl max-h-[20rem] flex flex-col">
        <div className="relative">
          <Link to={`/blog/blog-user-page/${_id}`}>
            <img
              className="rounded-xl  h-[10rem] md:h-[13rem] object-cover"
              src={cover}
              alt="Blog Cover"
            />
          </Link>
          <div className="absolute bottom-2  left-2">
            <img
              className="w-8 h-8 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src="/docs/images/people/profile-picture-5.jpg"
              alt="Profile Avatar"
            />
          </div>
        </div>

        <div className="p-3 flex-grow">
          <Link to={`/blog/blog-user-page/${_id}`}>
            <h5 className="text-gray-900 font-bold text-lg tracking-tight mb-2  overflow-hidden text-ellipsis line-clamp-2 cursor-pointer hover:underline">
              {title}
             
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecomendedCards;

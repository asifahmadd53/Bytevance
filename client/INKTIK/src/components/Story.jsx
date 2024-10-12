import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Story = ({_id, cover, title, description, createdAt}) => {

  return (

    <div className="flex items-center ">
      <div>
        <div className="relative flex w-80  md:w-80 sm:w-60 xs:w-60 flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 ">
          <Link to={`/blog/blog-user-page/${_id}`}>
          <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border h-80 xs:h-60 sm:h-72 md:h-80 xl:h-96">
            <img
              className='rounded-xl h-full md:h-80 lg:h-96 w-full object-cover'
              src={cover}
              alt="ui/ux review check"
            />
          </div>
          </Link>
          <div className="px-4 py-2">
            <h4 className="block font-sans text-2xl xs:text-xl sm:text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {title}
            </h4>
            <p className="block mt-1 font-sans text-xl xs:text-lg sm:text-2xl antialiased font-normal leading-relaxed text-gray-700">
              {description}
            </p>
          </div>
          <div className="flex items-center justify-between p-2">
            <div className="flex items-center -space-x-3">
              <img 
                alt="natali craig"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
              />
              <img 
                alt="Tania Andrew"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
              />
            </div>
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              {createdAt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;

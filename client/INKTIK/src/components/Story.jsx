import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { profileicon } from '../assets';

const Story = ({_id,author, cover, title, description, createdAt}) => {

      const formatDate = new Date(createdAt).toLocaleDateString('en-US',{
        year: 'numeric',
        month: 'long',
        day:'numeric'
      })

  return (

   


    
  <div class="relative flex flex-col my-6 xs:w-56 sm:w-72 md:w-80 lg:w-96 shadow-sm  rounded-lg w-80 transition-all duration-700 ">
<Link to={`/blog/blog-user-page/${_id}`}>
<div class="relative h-96 xs:h-60 sm:h-80 md:h-[23rem] lg:h-[27rem]  text-white m-2.5 rounded-md">
      <img className='h-full w-full rounded-xl object-cover' src={cover}/>
    </div>
</Link>

   
    <div class="p-4">
      
      <h6 class="mb-2 text-slate-800 text-xl font-semibold overflow-hidden text-ellipsis line-clamp-2 hover:underline cursor-pointer">
    {title}
      </h6>
      <p class="text-slate-600 leading-normal font-light overflow-hidden text-ellipsis line-clamp-2">
       {description}
      </p>
    </div>
 
    <div class="flex items-center justify-between p-4">
      <div class="flex items-center">
        <img
          alt="Tania Andrew"
          src={profileicon}
          class="relative inline-block h-8 w-8 rounded-full"
        />
        <div class="flex flex-col ml-3 text-sm">
          <span class="text-slate-800 font-semibold">{author.fullname}</span>
          <span class="text-slate-600">
            {formatDate}
          </span>
        </div>
      </div>
    </div>
  </div> 

  );
};

export default Story;

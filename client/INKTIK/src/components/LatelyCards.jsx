import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'




 

const LatelyCards = ({_id,title, description, summary, cover}) => {

  return (
    <div className="">
    <div className={`w-full rounded-lg mb-5 `}>
        <div className='relative'>
        <Link to={`/admin/admin-blog/${_id}`}>
        <img className="rounded-lg w-[95%] h-[16rem] sm:h-[27rem] md:h-[28rem] object-cover" src={cover} alt=""/>
        </Link>
        <div className='absolute bottom-2 left-2'>
            
<img className="w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/docs/images/people/profile-picture-5.jpg" alt="Bordered avatar"/>

        </div>
       
        </div>
        <div className="p-2">
            <a href="#">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{title}</h5>
            </a>
            <p className="font-normal text-gray-700 mb-3">{description}</p>
            
        </div>
    </div>
   
</div>
  )
}

export default LatelyCards
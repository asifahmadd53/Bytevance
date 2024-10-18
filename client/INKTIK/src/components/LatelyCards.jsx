import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { admin, profileicon } from '../assets'




 

const LatelyCards = ({_id,title, description, summary, cover}) => {

  return (
    <div className="">
    <div className={`w-full rounded-lg mb-5 `}>
        <div className='relative'>
        <Link to={`/admin/admin-blog/${_id}`}>
        <img className=" rounded-[1.2rem] sm:rounded-[1.5rem] w-full h-full xs:h-[17rem] sm:h-[26rem] md:h-[25rem] lg:h-[32rem] object-cover" src={cover} alt=""/>
        </Link>
        <div className='absolute bottom-2 left-2'>
<img className="w-10 h-10 rounded-full object-top object-cover ring-2 ring-gray-300 dark:ring-white" src={admin}/>
        </div>
       
        </div>
        <div className="p-2">
            <Link to={`/admin/admin-blog/${_id}`}>
               
            <h5 className="text-gray-900 font-bold text-xl tracking-wider mb-2 overflow-hidden truncate hover:underline">
  {title}
</h5>

            
            </Link>
            <p className="font-normal text-gray-700 mb-3 overflow-hidden truncate text-ellipsis">{description}</p>
            
        </div>
    </div>
   
</div>
  )
}

export default LatelyCards
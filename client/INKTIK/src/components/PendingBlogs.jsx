import React from 'react'
import PendingBlog from './PendingBlog'

const PendingBlogs = () => {
  return (
    <div>
        <h1 className='text-4xl text-center py-8'>Pending Blogs</h1>
        <div className='flex gap-4 flex-wrap items-center justify-center'>
            <PendingBlog/>
            <PendingBlog/>
            <PendingBlog/>
            <PendingBlog/>
            <PendingBlog/>
            <PendingBlog/>
        </div>
    </div>
  )
}

export default PendingBlogs
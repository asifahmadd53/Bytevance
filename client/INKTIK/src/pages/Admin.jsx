import React from 'react'
import AdminHeader from '../components/AdminHeader'
import { Link, Outlet } from 'react-router-dom'
import Layout from '../Layout'
import { dashboard, logo3 } from '../assets'


const Admin = () => {
    

  return (
    <>
      <div x-data="{ open: false }">
  <header>
    <nav class="relative items-center px-4 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6 pt-20">
      <div class="flex justify-between">
        <Link >
          <img className='w-36 sm:w-44'
            src={logo3}
           
            alt="Float UI logo"
          />
        </Link>
        <button class="text-gray-500 outline-none sm:hidden"
               
        >
          <template x-if="open">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </template>
          <template x-if="!open">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </template>
        </button>
      </div>
      
    </nav>
  </header>
  <section class="mt-7 mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8">
    <div class="space-y-4 flex-1 sm:text-center lg:text-left">
    <h1 className="text-gray-600 font-bold text-4xl xl:text-5xl">
    Manage Your Content with <span class="text-gray-900">Powerful Admin Tools</span>
</h1>


      <p class="text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
  Welcome to your admin dashboard. Manage and optimize your content with ease, ensuring every article meets the highest standards for publication. Our tools streamline your workflow, allowing you to focus on what truly matters: delivering engaging, impactful stories to your readers.
</p>
<div>
  <p class="text-gray-800 py-3">
    Stay informed with the latest updates and enhancements. Subscribe to our newsletter for exclusive insights and tips on maximizing your content’s reach.
  </p>
</div>

    </div>
    <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
      <img src={dashboard} className="w-full mx-auto sm:w-10/12 lg:w-full" />
    </div>
  </section>
</div>
    </>
  )
}

export default Admin
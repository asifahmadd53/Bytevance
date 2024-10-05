import React from 'react'
import AdminHeader from './components/AdminHeader'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>  
    <AdminHeader/>
    <Outlet/>
    </>
  )
}

export default Layout
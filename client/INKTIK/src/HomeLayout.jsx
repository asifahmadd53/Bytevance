import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import SideMenu from './components/SideMenu'

const HomeLayout = () => {
  return (
    <div>
        <Header/>
        <SideMenu/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default HomeLayout

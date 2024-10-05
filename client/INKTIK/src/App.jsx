import React from 'react';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Hero from './components/Hero';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Stories from './components/Stories';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PricingCard from './components/PricingCard';
import Contact from './pages/Contact';
import CreateBlogs from './pages/CreateBlogs';
import Admin from './pages/Admin';
import PendingBlog from './components/PendingBlog';
import PendingBlogs from './components/PendingBlogs';
import Layout from './Layout';

const App = () => {
  return (
   <>
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Hero/>}/> 
         <Route path='/login' element={<Login/>}/>
         <Route path='/signup' element={<Signup/>}/>
         <Route path='/pricing' element={<PricingCard/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/create-blog' element={<CreateBlogs/>}/>
        



         <Route path='/admin-panel' element={<Layout/>}>
         <Route path='pending-blogs' element={<PendingBlogs/>}/>
         </Route>

         </Routes>
         </BrowserRouter>
    
    
     {/* <Login/> */}
   </>
  );
}

export default App;

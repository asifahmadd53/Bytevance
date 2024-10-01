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

const App = () => {
  return (
   <>
    <BrowserRouter>
     
     {/* <Hero/>  */}
     {/* <Stories/>
     <Signup/> */}
    
    
       <Routes>
        <Route path='/' element={<Hero/>}/> 
         <Route path='/login' element={<Login/>}/>
         <Route path='/signup' element={<Signup/>}/>
         <Route path='/pricing' element={<PricingCard/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/create-blog' element={<CreateBlogs/>}/>
       </Routes>
     </BrowserRouter>
    
     {/* <Login/> */}
   </>
  );
}

export default App;

import React from 'react';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Hero from './components/Hero';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Stories from './components/Stories';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
       </Routes>
     </BrowserRouter>
    
     {/* <Login/> */}
   </>
  );
}

export default App;

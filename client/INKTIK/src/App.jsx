
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
import BlogPage from './pages/BlogPage';
import BlogsByAdmin from './pages/BlogsByAdmin';
import ApprovedBlogs from './components/ApprovedBlogs';
import BlogPageUser from './pages/BlogPageUser';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
   <>
   <Toaster /> 
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Hero/>}/> 
         <Route path='/login' element={<Login/>}/>
         <Route path='/signup' element={<Signup/>}/>
         <Route path='/pricing' element={<PricingCard/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/create-blog' element={<CreateBlogs/>}/>
         <Route path='/blog/blog/:id' element={<BlogPage/>}/>
         <Route path='/blog/blog-user-page/:id' element={<BlogPageUser/>}/>
         
         <Route path='/admin/admin-blog/:id' element={<BlogPageUser/>}/>
         



         <Route path='/admin-panel' element={<Layout/>}>
         <Route path='pending-blogs' element={<PendingBlogs/>}/>
         <Route path='blogs-by-admin' element={<BlogsByAdmin/>}/>
         <Route path='approved-blogs' element={<ApprovedBlogs/>}/>
         </Route>
         </Routes>
         </BrowserRouter>
    
    
     {/* <Login/> */}
   </>
  );
}

export default App;

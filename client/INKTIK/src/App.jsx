
import Hero from './components/Hero';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Stories from './components/Stories';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
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
import HomeLayout from './HomeLayout';
import AuthorInfo from './pages/AuthorInfo';
import AuthRoute from './components/AuthRoute';
import { useEffect, useState } from 'react';
import FourError from './pages/FourError';



const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuth = async () => {
        const res = await fetch('/auth/check-auth', { credentials: 'include' });
        if (res.ok) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    };

    useEffect(() => {
        checkAuth(); // Check authentication status on component mount
    }, []);


  return (
   <>
   <Toaster /> 
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Hero/>}/> 
         <Route path='/login' element={<Login/>}/>
         <Route path='/signup' element={<Signup/>}/>
         <Route path='/contact' element={<Contact/>}/>


         <Route 
         path='/create-blog' 
         element = {isAuthenticated ? <CreateBlogs/> : <Navigate to="/login"/>}
        />


        <Route path='/' element={<HomeLayout/>}>
        <Route path='pricing' element={<PricingCard/>}/>
        
         <Route path='blog/blog-user-page/:id' element={<BlogPageUser/>}/>
         
         <Route path='admin/admin-blog/:id' element={<BlogPageUser/>}/>
         <Route path='author-info/:authorId' element={<AuthorInfo/>}/>
        </Route>


        <Route path="/admin-panel" element={isAuthenticated ? <Layout /> : <Navigate to={'/login'} />}>
  <Route index element={<Admin />} /> {/* Default content for /admin-panel */}
  <Route path="pending-blogs" element={<PendingBlogs />} />
  <Route path="blogs-by-admin" element={<BlogsByAdmin />} />
  <Route path="approved-blogs" element={<ApprovedBlogs />} />
  <Route path='blog/blog/:id' element={<BlogPage/>}/>
</Route>

<Route path="*" element={<FourError />} />

         </Routes>
         </BrowserRouter>
    
    
     {/* <Login/> */}
   </>
  );
}

export default App;

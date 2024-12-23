import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Error from './Component/Error';
import { ToastContainer } from 'react-toastify';
import Login from './Component/Login';
import AddBlog from './Component/AddBlog';
import FeaturedBlogs from './Component/FeaturedBlogs';
import Allblogs from './Component/Allblogs';
import Wishlist from './Component/Wishlist';
import Registration from './Component/Registration';
import AuthProvider from './Component/AuthProvider/AuthProvider';



function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addblog" element={<AddBlog  />} />
          <Route path="/allblogs" element={<Allblogs />} />
          <Route path="/featuredblogs" element={<FeaturedBlogs />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </AuthProvider>
    </>
  );
}

export default App;

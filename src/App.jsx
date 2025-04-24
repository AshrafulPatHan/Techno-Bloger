import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Components/home/Home';
import Error from './Components/error/Error';
import Login from './Components/auth/Login';
import AddBlog from './page/AddBlog';
import FeaturedBlogs from './page/FeaturedBlogs';
import Allblogs from './page/Allblogs';
import Wishlist from './page/Wishlist';
import Registration from './Components/auth/Registration';
import AuthProvider from './Components/auth/AuthProvider/AuthProvider';
import About from './page/About';
import { ToastContainer } from 'react-toastify';
import Privaterout from './Components/Rout/Privaterout';
import Details from './page/dynamic-page/Details';
import Update from './page/dynamic-page/Update';



function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/allblogs" element={<Allblogs />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/featuredblogs" element={<FeaturedBlogs />} />
          <Route path="/addblog" element={<Privaterout><AddBlog  /></Privaterout>} />
          <Route path="/wishlist" element={<Privaterout><Wishlist /></Privaterout>} />
          <Route path="/update/:id" element={<Privaterout><Update/></Privaterout>} />
          <Route path="/allblogs/:id" element={<Privaterout><Details /></Privaterout>} />
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

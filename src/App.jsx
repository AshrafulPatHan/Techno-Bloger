import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Component/Home';
import Error from './Component/Error';
import Login from './Component/Login';
import AddBlog from './Component/AddBlog';
import FeaturedBlogs from './Component/FeaturedBlogs';
import Allblogs from './Component/Allblogs';
import Wishlist from './Component/Wishlist';
import Registration from './Component/Registration';
import AuthProvider from './Component/AuthProvider/AuthProvider';
import About from './Component/About';
import { ToastContainer } from 'react-toastify';
import Privaterout from './Component/Rout/Privaterout';
import Details from './Component/Details';



function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addblog" element={<Privaterout><AddBlog  /></Privaterout>} />
          <Route path="/allblogs" element={<Allblogs />} />
          <Route path="/featuredblogs" element={<FeaturedBlogs />} />
          <Route path="/wishlist" element={<Privaterout><Wishlist /></Privaterout>} />
          <Route path="/about" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
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

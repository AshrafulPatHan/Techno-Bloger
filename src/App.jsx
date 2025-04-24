import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Components/Home';
import Error from './Components/Error';
import Login from './Components/Login';
import AddBlog from './Components/AddBlog';
import FeaturedBlogs from './Components/FeaturedBlogs';
import Allblogs from './Components/Allblogs';
import Wishlist from './Components/Wishlist';
import Registration from './Components/Registration';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import About from './Components/About';
import { ToastContainer } from 'react-toastify';
import Privaterout from './Components/Rout/Privaterout';
import Details from './Components/Details';
import Update from './Components/Update';



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
          <Route path="/update/:id" element={<Privaterout><Update/></Privaterout>} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
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

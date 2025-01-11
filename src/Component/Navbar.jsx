import React, { useContext, useEffect, useState } from 'react';
import Logo from '../assets/wite.png'
import { AuthContext } from './AuthProvider/AuthProvider';
import { signOut } from 'firebase/auth';
import auth from '../Firebase/Firebase.init';
import { toast } from 'react-toastify';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { IoIosPartlySunny, IoMdCloudyNight } from 'react-icons/io';
import { RiDropdownList } from 'react-icons/ri';
import { FaRegUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';



const Navbar = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                console.log('User logged out successfully');
                toast('Loge out successfully!');
                navigate('/');

            })
            .catch((error) => {
                console.error('Error during logout:', error.message);
                toast('Failed to log out!');
            });
        };
        const [showTooltip, setShowTooltip] = useState(false);

        const [theme, setTheme] = useState('light'); 

        const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        };


    return (
        <div className='sticky top-0 z-50'>
            <div   style={{backgroundColor:"#FFFFFF80",}} >
<<<<<<< HEAD
                <div className="navbar mb-16">
=======
                <div className="navbar">
>>>>>>> 580c1880ae5bebf67f13972764f009ddfb681ce6
                    <div className="navbar-start">
                        {/* mobile dropdown */}
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            {user ? (
                                <ul tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li><Link to='/'>Home</Link></li>
                                    <li>
                                    <Link to='/addblog'>AddBlog</Link>
                                    <ul className="p-2">
                                        <li><Link to='/allblogs'>Allblogs</Link></li>
                                        <li><Link to='/featuredblogs'>FeaturedBlogs</Link></li>
                                    </ul>
                                    </li>
                                    <li><Link to='/wishlist'>Wishlist</Link></li>
                                </ul>
                        ) : (
                            <ul tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><Link Link to='/'>Home</Link></li>
                                <li>
                                <Link to='/allblogs'>Allblogs</Link>
                                </li>
                            </ul>
                        )}
                        </div>
                        {/* company name */}
                        <div className='flex flex-col sm:flex-row items-center'>
                            <img src={Logo} alt="image" className='w-[50px] sm:w-[70px] '/>
                            <p className="text-sm font-bold sm:text-xl hidden md:font-bold">technobloger</p>
                        </div>
                    </div>
                    {/* navigation */}
                    <div className="navbar-center hidden lg:flex">
                        {user ? (
                            <div className=' flex lg:flex-col lg:items-center xl:flex-row items-center'>
                                <div className='flex flex-row gap-2'>
                                    <Link to='/' className=' text-xl p-2 text-green-400 rounded-md hover:bg-green-100 font-bold'>
                                    Home
                                    </Link>
                                    <Link to='/allblogs' className=' text-xl p-2 text-green-400 rounded-md hover:bg-green-100 font-bold'>
                                    All blogs
                                    </Link>
                                </div>
                                <div className='flex flex-row gap-2'>
                                    <Link to='/featuredblogs' className=' text-xl p-2 text-green-400 rounded-md hover:bg-green-100 font-bold'>
                                    Featured Blogs
                                    </Link>
                                    <Link to='/addblog' className='text-xl p-2 text-green-400 rounded-md hover:bg-green-100 font-bold'>
                                    Add Blog
                                    </Link>
                                    <Link to='/wishlist' className='text-xl p-2 text-green-400 rounded-md hover:bg-green-100 font-bold'>
                                    Wishlist
                                    </Link>
                                </div>
                            </div>
                        ) : (
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <Link to='/' className='text-2xl text-green-400 font-bold'>Home</Link>
                            </li>
                            <li>
                            <Link to='/allblogs' className='text-2xl text-green-400 font-bold'>All blogs</Link>
                            </li>
                            <li>
                            <Link to='/featuredblogs' className='text-2xl text-green-400 font-bold'>Featured Blogs</Link>
                            </li>
                        </ul>
                        )}
                    </div>
                    <div className='navbar-end '>
                        {/* user in mobile */}
                        <div className="dropdown dropdown-end lg:hidden">
                            <div tabIndex={0} role="button" className="btn btn-ghost ">
                            <FaRegUserCircle className='text-4xl' />
                            </div>
                                {user ? (
                                    <ul tabIndex={0}
                                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                        <div className="tooltip" data-tip={user.displayName || "User"}>
                                            <img
                                                    src={user.photoURL || "default-avatar.png"}
                                                    alt={user.displayName || "User"}
                                                    className="w-8 md:w-10 h-8 md:h-10  rounded-full" 
                                                    onMouseEnter={() => setShowTooltip(true)}
                                                    onMouseLeave={() => setShowTooltip(false)} 
                                                />
                                        </div>
                                        <button onClick={handleLogout} className="btn text-sky-600">
                                            Log out
                                        </button>
                                    </ul>
                                ) : (
                                    <ul tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                        <li><Link Link to='/Login' >Login</Link></li>
                                        <li>
                                        <Link to='/Registration'>Registration</Link>
                                        </li>
                                    </ul>
                                )}
                        </div>
                        {/* light mode /dark mode */}
                        <label className="swap swap-rotate mr-0 md:mr-2">
                            <input type="checkbox" onClick={toggleTheme} className="theme-controller" value="synthwave" />
                            {/* sun icon */}
                            <IoIosPartlySunny className='swap-off h-10 w-10 fill-current' />
                            {/* moon icon */}
                            <IoMdCloudyNight className="swap-on h-10 w-10 fill-current"/>
                        </label>
                        {/* user in desktop */}
                        <div className='hidden lg:flex'>
                            <div className='flex flex-col items-center sm:flex  sm:flex-row sm:items-center '>
                                {user ? (
                                    <div >
                                        <div className='flex flex-row items-center gap-1 md:gap-2 '>
                                            <div className="tooltip tooltip-bottom" data-tip={user.displayName || "User"}>
                                            <img
                                                    src={user.photoURL || "default-avatar.png"}
                                                    alt={user.displayName || "User"}
                                                    className="w-8 md:w-10 h-8 md:h-10  rounded-full" 
                                                    onMouseEnter={() => setShowTooltip(true)}
                                                    onMouseLeave={() => setShowTooltip(false)} 
                                                />
                                            </div>
                                            <button onClick={handleLogout} className="btn text-sky-600">
                                                Log out
                                            </button>
                                        </div>
                                    </div>
                                    ) : (
                                    <div className="flex flex-row items-center gap-1">
                                        <Link to='/Login' className="btn text-sm sm:text-xl ">Login</Link>
                                        <Link to='/Registration' className="btn text-sm sm:text-xl ">Register</Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;


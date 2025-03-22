import React, { useContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from './AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const Allblogs = () => {
    const [all, setAll] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState('');
    const [category, setCategory] = useState('');
    const { user } = useContext(AuthContext);

    // go to details page
    const navigate = useNavigate();
    const handleExploreDetails = (All) => {
        navigate(`/allblogs/${All.id}`, { state: All });
    };

    // fetch data
    useEffect(() => {
        fetch("https://techno-server.up.railway.app/alldata")
            .then((res) => res.json())
            .then((data) => {
                setAll(data);
                setFilteredBlogs(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    // Add to WatchList
    const handleWatchList = (All) => {
        fetch('https://techno-server.up.railway.app/watchLists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(All),
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success("Watchlist added successfully!");
            })
            .catch((error) => {
                console.error('Error:', error);
                toast.error("Error adding to watchlist");
            });
    };

    // Filter and search logic
    useEffect(() => {
        let blogs = all;

        // Filter by category
        if (category) {
            blogs = blogs.filter((blog) => blog.category === category);
        }

        // Search by title
        if (searchText) {
            blogs = blogs.filter((blog) =>
                blog.Title.toLowerCase().includes(searchText.toLowerCase())
            );
        }

        setFilteredBlogs(blogs);
    }, [searchText, category, all]);

    if (loading) {
        return (
            <div className="flex flex-col items-center my-36">
                <span className="loading loading-ring loading-lg"></span>
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center mt-9 mx-7">
                {/* Search and Category Filter */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-5 w-full mb-6">
                    <input
                        type="text"
                        placeholder="Search blogs by title"
                        className="border p-2 rounded w-full md:w-1/2"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <select
                        className="border p-2 rounded w-full md:w-1/4"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">All Categories</option>
                        <option value="Technology">Technology</option>
                        <option value="Science">Science</option>
                        <option value="Other">Other</option>
                        {/* Add more categories as needed */}
                    </select>
                </div>

                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mx-0 md:mx-6 mt-7">
                        {filteredBlogs.map((All) => (
                            <div key={All.id}>
                                <div className="flex flex-col items-start gap-3 border-2 text-lg border-blue-50 p-5 
                                rounded-xl transition-transform transform hover:-translate-y-2 hover:shadow-lg
                                bg-slate-50">
                                    <div>
                                        <img
                                            src={All.Image}
                                            className="h-[250px] md:h-[300px] w-[300px] md:w-[500px] rounded-xl object-cover 
                                        transition-transform transform hover:scale-105"
                                            alt="photo"
                                        />
                                    </div>
                                    <div className="flex flex-col ml-2 items-start">
                                        <h4 className="text-2xl font-semibold">{All.Title}</h4>
                                        <p className="text-sm font-semibold">{All.shortdescription}</p>
                                        <div className="flex flex-row items-center gap-3">
                                            <button
                                                className="border-2 text-lg border-green-300 w-28 text-sky-400 
                                            hover:bg-green-300 p-2"
                                                onClick={() => handleExploreDetails(All)}
                                            >
                                                Details
                                            </button>
                                            {user ? (
                                                <button
                                                    className="border-2 text-lg border-green-300 w-28 text-sky-400 
                                                hover:bg-green-300 p-2"
                                                    onClick={() => handleWatchList(All)}
                                                >
                                                    Wishlist
                                                </button>
                                            ) : (
                                                <Link
                                                    to="/login"
                                                    className="border-2 text-lg border-green-300 w-28 text-sky-400 
                                                hover:bg-green-300 p-2"
                                                >
                                                    Wishlist
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Allblogs;

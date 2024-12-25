import React, { useContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router';
import { AuthContext } from './AuthProvider/AuthProvider';


const Allblogs = () => {
    const [all, setAll] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);


// go details page
    const navigate = useNavigate();
        const handleExploreDetails = (All) => {
            navigate(`/allblogs/${All.id}`, { state: All });
        };
    
// fetch data
    useEffect(() => {
        fetch("http://localhost:5222/alldata")
        .then((res) => res.json())
        .then((data) => {
            setAll(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            setLoading(false);
        });
    }, []);


    if (loading) {
        return <div className="flex flex-col items-center my-36">
        <span className="loading loading-ring loading-lg"></span>
        </div>;
    }


    return (
    <div>
        <Navbar/>
        <div className='flex flex-col items-center mt-9 mx-7'>
            <div >
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mx-0 md:mx-6 mt-7'>
                    {
                        all.map(All => (
                            <div key={All.id}>
                                <div className='flex flex-col  items-start gap-3 border-2 text-lg border-blue-50 p-5 
                                rounded-xl transition-transform transform hover:-translate-y-2 hover:shadow-lg
                                bg-slate-50'>
                                    <div>
                                        <img src={All.Image} 
                                        className=" h-[250px] md:h-[300px] w-[300px]  md:w-[500px]
                                        rounded-xl object-cover 
                                        transition-transform transform hover:scale-105"
                                        alt="photo" />
                                    </div>
                                    <div className='flex flex-col ml-2 items-start'>
                                        <h4 className='text-2xl font-semibold'>{All.Title}</h4>
                                        <p className='text-sm font-semibold'>{All.shortdescription}</p>
                                        <div className='flex flex-row items-center gap-3'>
                                            <button className='border-2 text-lg border-green-300 w-28 text-sky-400 
                                            hover:bg-green-300 p-2'
                                            onClick={() => handleExploreDetails(All)}>
                                                Details
                                            </button>
                                            <button className='border-2 text-lg border-green-300 w-28 text-sky-400 hover:bg-green-300 p-2'>
                                                Wishlist
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        <Footer/>
    </div>
    );
};

export default Allblogs;

// <button className="btn btn-primary"
// onClick={() => handleExploreDetails(All)}>Explore Details</button>
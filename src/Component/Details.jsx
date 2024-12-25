import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { FaCommentDots, FaPaperPlane } from "react-icons/fa";

const Details = () => {
    const { state: locationData } = useLocation(); 
    const [cardData, setCardData] = useState(locationData || {});
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (locationData) {
            setCardData(locationData);
        }
    }, [locationData]);
    // Add WatchList
    const handleWatchList = () => {
        fetch('https://server-op-production.up.railway.app/watchLists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cardData),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            toast.success("Watchlist added successfully!");
        })
        .catch((error) => {
            console.error('Error:', error);
            toast.error("Error adding to watchlist");
        });
    };

    if (!locationData) {
        return (
            <div className="flex flex-col items-center mt-10">
                <h2 className="text-2xl font-bold">Details not available!</h2>
                <button
                    className="btn btn-primary mt-4"
                    onClick={() => window.history.back()}
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center">
                <div className="flex flex-col  items-center mt-7 gap-4">
                    {/* Image Section */}
                    <div>
                        <img
                            src={cardData.Image}
                            alt="Image"
                            className="w-full h-[250px] md:h-[550px] object-cover "
                        />
                    </div>
                    {/* Content Section */}
                    <div className="border-[15px] border-green-300">
                        <div className="flex flex-col items-start p-2 gap-3">
                            <h2 className="text-3xl font-bold">{cardData.Title}</h2>
                            <div className="text-base sm:text-lg font-medium w-[300px] sm:w-[500px] lg:w-[600px] xl:w-[720px] 2xl:w-[1250px]">
                                <h4 className="text-xl font-bold">{cardData.shortdescription}</h4>
                                <p><span className="text-lg font-bold">Details :</span> {cardData.longdescription}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-9 mb-8">
                    <div className="flex flex-col items-center">
                        <form className="flex flex-col sm:flex-row sm:items-center items-end mb-6 gap-3">
                            <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-warning max-w-xs
                            w-[350px]  " />
                            <button className="btn btn-active border-t-green-400" onClick={()=>{toast("Hello world")}}>
                                Comment<FaCommentDots />
                            </button>
                        </form>
                        <div className="mockup-window bg-base-300 border w-[300px] md:w-[650px]  ">
                            <div className="bg-base-200 flex px-4 py-6">
                                <div className="flex flex-col items-start ">
                                    <h2 className="flex flex-row items-center gap-1 text-xl font-bold"><FaCommentDots />
                                    Comments :</h2>
                                    <p>● </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Details;
// 

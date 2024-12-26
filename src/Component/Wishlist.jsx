import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router";
import { MdDelete } from "react-icons/md";
import swal from "sweetalert";

const Wishlist = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const handleExploreDetails = (all) => {
        navigate(`/allblogs/${all.id}`, { state: all });
    };

    useEffect(() => {
        fetch("http://localhost:5222/watchListsdata")
        .then((res) => res.json())
        .then((data) => {
            console.log("Fetched Data:", data);
            setData(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            setLoading(false);
        });
    }, []);


            const handleDelete = id => {
                swal({
                title: "Are you sure?",
                text: "You will not be able to recover this data!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
                })
                .then((result) => {
                if (result.isConfirmed) {
                        fetch(`http://localhost:5222/watchListsdata/${id}`, {
                            method: 'DELETE',
                        })
                        .then(res => {
                            if (!res.ok) {
                            throw new Error('Failed to delete');
                            }
                            return res.json();
                        })
                        .then(() => {
                            swal("Deleted!", "Your data has been deleted.", "success");
                            setData(prevData => prevData.filter(item => item._id !== id));
                        })
                        .catch(error => {
                            console.error('Error deleting data:', error);
                            swal("Error", "Failed to delete data.", "error");
                        });
                }
                });
            };


    return (
        <div>
        <Navbar />
        <div>
            <div className="overflow-x-auto">
            <table className="table">
                {/* Table Head */}
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Blog Length</th>
                    <th>Actions</th>
                </tr>
                </thead>
                {data.map((item) => (
                <tbody key={item._id}>
                    <tr>
                    <td>
                        <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="rounded-xl h-10 sm:h-24 w-10 sm:w-24 xl:w-32">
                            <img src={item.Image} alt={item.name} />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{item.Title}</div>
                        </div>
                        </div>
                    </td>
                    <td>{item.category}</td>
                    <td>
                        {item.longdescription
                        ? item.longdescription.length
                        : 0}{" "}
                        Word
                    </td>
                    <td>
                        <button
                        className="btn btn-outline btn-secondary w-28 mr-2"
                        onClick={() => handleExploreDetails(item)}
                        >
                        Details
                        </button>
                        <button
                        className="btn btn-outline text-white btn-secondary w-28"
                        onClick={() => handleDelete(item._id)}
                        >
                        Remove
                        <MdDelete />
                        </button>
                    </td>
                    </tr>
                </tbody>
                ))}
            </table>
            </div>
        </div>
        <Footer />
        </div>
    );
    };

export default Wishlist;

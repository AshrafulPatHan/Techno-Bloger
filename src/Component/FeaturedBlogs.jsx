import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router';
import { MdDelete } from 'react-icons/md';

const FeaturedBlogs = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const handleExploreDetails = (all) => {
        navigate(`/allblogs/${all.id}`, { state: all });
    };

    useEffect(() => {
        fetch("http://localhost:5222/featured-blogs")
        .then((res) => res.json())
        .then((data) => {
            console.log("Fetched Data:", data);
            // Sort blogs by the length of the long description (word count)
            const sortedData = data.sort((a, b) => {
                const wordCountA = a.longdescription ? a.longdescription.split(' ').length : 0;
                const wordCountB = b.longdescription ? b.longdescription.split(' ').length : 0;
                return wordCountB - wordCountA; // Descending order (top posts first)
            });
            setData(sortedData);
            setLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            setLoading(false);
        });
    }, []);

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
                                <th>Short Description</th>
                                <th>Category</th>
                                <th>Blog Length</th>
                                <th>Author</th> {/* Added new column */}
                                <th>Publish Date</th> {/* Added new column */}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item._id}>
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
                                    <td>{item.shortdescription}</td>
                                    <td>{item.category}</td>
                                    <td>
                                        {item.longdescription
                                            ? item.longdescription.split(' ').length
                                            : 0}{" "}
                                        Word
                                    </td>
                                    <td>{item.username || "Anonymous"}</td>
                                    <td>{new Date(item.date).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FeaturedBlogs;

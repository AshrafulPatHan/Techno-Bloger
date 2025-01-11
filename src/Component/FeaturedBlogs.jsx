import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router';
import DataTable from 'react-data-table-component'; // Import DataTable
import { MdDelete } from 'react-icons/md';

const FeaturedBlogs = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const handleExploreDetails = (all) => {
        navigate(`/allblogs/${all.id}`, { state: all });
    };

    const columns = [
        {
            name: 'Title',
            selector: row => row.Title,
            sortable: true,
            cell: row => (
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="rounded-xl h-10 sm:h-24 w-10 sm:w-24 xl:w-32">
                            <img src={row.Image} alt={row.name} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{row.Title}</div>
                    </div>
                </div>
            ),
        },
        {
            name: 'Short Description',
            selector: row => row.shortdescription,
            sortable: true,
        },
        {
            name: 'Category',
            selector: row => row.category,
            sortable: true,
        },
        {
            name: 'Blog Length',
            selector: row => row.longdescription ? row.longdescription.split(' ').length : 0,
            sortable: true,
            cell: row => (
                <span>{row.longdescription ? row.longdescription.split(' ').length : 0} Word</span>
            ),
        },
        {
            name: 'Author',
            selector: row => row.username || "Anonymous",
            sortable: true,
        },
        {
            name: 'Publish Date',
            selector: row => new Date(row.date).toLocaleString(),
            sortable: true,
        },
    ];

    useEffect(() => {
<<<<<<< HEAD
<<<<<<< HEAD
        fetch("https://techno-server.up.railway.app/featured-blogs")
=======
        fetch("http://localhost:5222/featured-blogs")
>>>>>>> 580c1880ae5bebf67f13972764f009ddfb681ce6
=======
        fetch("http://localhost:5222/featured-blogs")
>>>>>>> 580c1880ae5bebf67f13972764f009ddfb681ce6
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched Data:", data);
                const sortedData = data.sort((a, b) => {
                    const wordCountA = a.longdescription ? a.longdescription.split(' ').length : 0;
                    const wordCountB = b.longdescription ? b.longdescription.split(' ').length : 0;
                    return wordCountB - wordCountA;
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
                <DataTable
                    title="Featured Blogs"
                    columns={columns}
                    data={data}
                    progressPending={loading} // Show loading indicator
                    pagination
                    highlightOnHover
                    pointerOnHover
                    onRowClicked={handleExploreDetails} // Navigate on row click
                />
            </div>
            <Footer />
        </div>
    );
};

export default FeaturedBlogs;

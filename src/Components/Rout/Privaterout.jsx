import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Privaterout = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className='flex flex-col items-center gap-6'>
                <div className="p-6 rounded-md shadow-md mx-auto max-w-fit bg-[#657287] ">
                    <div className="animate-pulse">
                        {/* Product Image Skeleton */}
                        <div className="w-[300px] lg:h-52 md:h-52 h-48 rounded-lg bg-[#9FADC2] mb-6"></div>
                        {/* Product Title Skeleton */}
                        <div className="w-[290px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                        {/* Product Heading Skeleton */}
                        <div className="w-[220px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                        {/* Product Description Skeleton */}
                        <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                    </div>
                </div>
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default Privaterout;
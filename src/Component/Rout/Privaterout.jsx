import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


const Privaterout = ({children}) => {

const {user,loading} = useContext(AuthContext);

if (loading) {
    // return <span className="loading loading-bars loading-lg "></span>
    return (
        <div className="flex flex-col items-center justify-center mt-10">
          {/* Skeleton Container */}
            <div className="flex flex-col items-center gap-6">
            {/* Circle Skeleton */}
            <Skeleton circle={true} height={100} width={100} />
            {/* Line Skeletons */}
            <Skeleton height={50} width={300} />
            <Skeleton height={30} width={300} />
            <Skeleton count={5} height={25} width={350} />
            </div>
        </div>
        );
}

if (user) {
    return children;
}


    return (
            <Navigate to="/Login"></Navigate>

    );
};

export default Privaterout;
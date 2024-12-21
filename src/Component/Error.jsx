import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div>
            <h2>Error 404</h2>
            <p>Page is not found</p>
            <Link to='/'>Go Home</Link>
        </div>
    );
};

export default Error;
import React from 'react';
import { toast } from 'react-toastify';

const Home = () => {
    return (
        <div>
            <h2>This is home</h2>
            <button
            onClick={()=>{toast('this is toast')}}
            >click</button>
        </div>
    );
};

export default Home;
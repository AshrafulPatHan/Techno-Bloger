import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Hero from './Hero';
import Recent from './Recent';
import Newsleer from './Newsleer';

const Home = () => {
    return (
        <>
            <div >
                <Navbar/>
                <Hero/>
                <Recent/>
                <Newsleer/>
                <Footer/>
            </div>
        </>
    );
};

export default Home;
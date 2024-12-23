import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Hero from './Hero';
import Recent from './Recent';
import Newsleer from './Newsleer';
import AboutUs from './AboutUs';

const Home = () => {
    return (
        <>
            <div >
                <Navbar/>
                <Hero/>
                <AboutUs/>
                <Recent/>
                <Newsleer/>
                <Footer/>
            </div>
        </>
    );
};

export default Home;
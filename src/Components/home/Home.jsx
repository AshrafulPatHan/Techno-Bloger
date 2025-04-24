import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from '../navigation/Footer';
import Hero from './Hero';
import Recent from '../Recent';
import Newsleer from '../Newsleer';
import AboutUs from './AboutUs';
import Mape from './Mape';



const Home = () => {
    return (
        <>
            <div >
                <Navbar/>
                <Hero/>
                <AboutUs/>
                <Recent/>
                <Newsleer/>
                <Mape/>
                <Footer/>
            </div>
        </>
    );
};

export default Home;
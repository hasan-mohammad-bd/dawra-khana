import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MdSpeetch from '../components/MdSpeetch';
import Product from '../components/Product';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <MdSpeetch/>
            <Product/>
        </div>
    );
};

export default Home;
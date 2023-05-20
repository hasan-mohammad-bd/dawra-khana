import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MdSpeetch from '../components/MdSpeetch';
import Product from '../components/Product';

const Home = () => {
    return (
        <div className='bg-gradient-to-tl from-fuchsia-200 via-violet-200 to-cyan-200'>
            <Navbar/>
            <Hero/>
            <MdSpeetch/>
            <Product/>
        </div>
    );
};

export default Home;
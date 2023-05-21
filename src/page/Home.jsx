import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MdSpeetch from '../components/MdSpeetch';
import Product from '../components/Product';
import About from '../components/About';

const Home = () => {
    return (
        <div className=' bg-gradient-to-tl from-fuchsia-200 via-violet-200 to-cyan-200'>
            <Navbar/>
            <Hero/>
            <MdSpeetch/>
            <h2 className='text-4xl mt-16 mb-6 text-center font-bold'>Our Product</h2>
            <Product/>
            <About/>
        </div>
    );
};

export default Home;
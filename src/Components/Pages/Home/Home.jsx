import React from 'react';
import Banner from './Banner';
import Shop from './Shop/Shop';
import Gallery from './Gallery/Gallery';
import Features from './Features/Features';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <>
        <Banner></Banner>
        <Gallery></Gallery>
         <Shop></Shop>
       <Testimonial></Testimonial>
        <Features></Features>
        </>
    );
};

export default Home;
import React from 'react';
import Footer from '../Footer.js/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Slider from '../Header/Slider';
import About from '../About/About';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <About></About>
            <Contact></Contact>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;
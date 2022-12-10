import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Project from './Project/Project';
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Skills></Skills>
            <Project></Project>
            <About></About>
        </div>
    );
};

export default Home;
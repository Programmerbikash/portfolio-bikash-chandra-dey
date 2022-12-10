import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../PortfolioContainer/Shared/Footer/Footer';
import Navbar from '../PortfolioContainer/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
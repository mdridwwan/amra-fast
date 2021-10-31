import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';
import Navbar from './navbar';
import Slider from './Slider';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header ">
            <Navbar></Navbar>
           
            <nav className="d-flex justify-content-center">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/review">My Cart</NavLink>
                <NavLink to="/inventory">Order Manage</NavLink>
            </nav>
           
        </div>
    );
};

export default Header;
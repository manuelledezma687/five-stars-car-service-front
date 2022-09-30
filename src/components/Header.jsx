import React from 'react';
import '../styles/Header.scss';
import logo from '../assets/logos/logo.png';
import menu from '../assets/icons/menu.svg';
import { useState, useContext } from 'react';
import Menu from './Menu';

const Header = () => {

    return (
        <nav>
			<img src= {logo} alt="logo" className="fivestars" />
			<img src= {menu} alt="menu" className="menu" />
        </nav>
    );
}

export default Header;

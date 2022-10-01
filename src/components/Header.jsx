import React from 'react';
import '../styles/Header.scss';
import logo from '../assets/logos/logo.png';
import { useState } from 'react';
import Menu from './Menu';
import Home from '../assets/icons/home.svg'
import People from '../assets/icons/people.svg'
import Phone from '../assets/icons/phone.svg'
import BookMark from '../assets/icons/bookmark.svg'

const Header = () => {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <nav>
            <img src={logo} alt="logo" className="fivestars" />
            <ul className={`links ${clicked ? 'active' : ''}`}>
                <div className='menu-item'>
                    <img src={Home} alt="Home" className='icon-list-menu'/>
                    <a onClick={handleClick} href="#h">Home</a>
                </div>
                <div className='menu-item'>
                <img src={People} alt="Booking" className='icon-list-menu'/>
                <a onClick={handleClick} href="#h">Booking</a>
                </div>
                <div className='menu-item'>
                <img src={BookMark} alt="Our Services" className='icon-list-menu'/>
                    <a onClick={handleClick} href="#h">Services</a>
                </div>
                <div className='menu-item'>
                <img src={Home} alt="Comments" className='icon-list-menu'/>    
                <a onClick={handleClick} href="#h">Comments</a>
                </div>
                <div className='menu-item'>
                <img src={Phone} alt="Contact Us" className='icon-list-menu'/>
                    <a onClick={handleClick} href="#h">Contact Us</a>
                </div>
            </ul>
            <Menu clicked={clicked} handleClick={handleClick} />
        </nav>
    );
}

export default Header;
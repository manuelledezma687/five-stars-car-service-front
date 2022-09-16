import React from 'react';
import '../styles/Header.scss';
import logo from '../assets/logos/logo.png';
import menu from '../assets/icons/menu.svg';

const Header = () => {
    return (
        <nav>
			<img src= {logo} alt="logo" className="fivestars" />
        <div className="navbar">
                <ul>
                <li>
					<a href="/" className="title">Home</a>
				</li>
				<li>
					<a href="/">Our Services</a>
				</li>
				<li>
					<a href="/">Our Fleet</a>
				</li>
                <li>
					<a href="/">Book Online</a>
				</li>
                <li>
					<a href="/">Contact Us</a>
				</li>
                </ul>
            </div>
			<img src= {menu} alt="menu" className="menu" />
        </nav>
    );
}

export default Header;

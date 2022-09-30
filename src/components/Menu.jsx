import React from 'react';
import '../styles/Menu.scss';

const Menu = () => {
	return (
			<ul className='menu-list'>
				<li className="menu-list">
					<a href="/" >Home</a>
				</li>
				<li className="menu-list">
					<a href="/">Our Services</a>
				</li>
				<li className="menu-list">
					<a href="/">Our Fleet</a>
				</li>
				<li className="menu-list">
					<a href="/">Book Online</a>
				</li>
				<li className="menu-list">
					<a href="/">Contact Us</a>
				</li>
			</ul>
	);
}

export default Menu;
import React from 'react';
import '../styles/Menu.scss';

const Menu = () => {
	return (
		<div className="Menu">
			<ul>
				<li>
					<a href="/" className="title">Sumary</a>
				</li>
				<li>
					<a href="/">My Account</a>
				</li>
				<li>
					<a href="/">Log out</a>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
import React from 'react';
import '../styles/Menu.scss';
import '../styles/Header.scss';

function Menu(props) {
	return (
		<div onClick={props.handleClick} 
		className={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`}>
		<span></span>
		<span></span>
		<span></span>
	</div>
	);
}

export default Menu;
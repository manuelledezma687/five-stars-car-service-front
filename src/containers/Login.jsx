import React from 'react';
import '../styles/Login.scss';
import Header from '../components/Header';

const Login = () => {
	return (
		<><Header /><div className="login">
			<div className="form-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<h1 className="title">Sitio Web en Construcción</h1>
				<form action="/" className="form">
					<label for="password" className="label">User</label>
					<input type="password" id="password" placeholder="credencial" className="input input-password" />
					<label for="new-password" className="label">Password</label>
					<input type="password" id="new-password" placeholder="*********" className="input input-password" />
					<input  type="submit" value="INGRESO" className='login-button' />
				</form>
			</div>
		</div></>
	);
}

export default Login;
import React from 'react';
import '../styles/MyAccount.scss';
const nameForAccount = 'Cesar Espinoza';
const emailForAccount = 'ceazoffi@gmail.com';
const passwordForAccount = '********';

const MyAccount = () => {
	return (
		<div className="MyAccount">
			<div className="MyAccount-container">
				<h1 className="title">My account</h1>
				<form action="/" className="form">
					<div>
						<label for="name" className="label">Name</label>
						<p className="value">{nameForAccount}</p>
						<label for="email" className="label">Email</label>
						<p className="value">{emailForAccount}</p>
						<label for="password" className="label">Password</label>
						<p className="value">{passwordForAccount}</p>
					</div>
					<input type="submit" value="Edit" className="secondary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default MyAccount;

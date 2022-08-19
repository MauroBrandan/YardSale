import React from 'react'
import '../styles/login.css'

export const Login = () => {
	return (
		<div className='login'>
			<div className='form-container'>
				<img src='../assets/logos/logo_yard_sale.svg' alt='logo' className='logo' />
				<form action='/' className='form'>
					<label htmlFor='email' className='label'>
						Email address
					</label>
					<input
						type='email'
						id='email'
						placeholder='correo@gmail.com'
						className='input'
					/>
					<label htmlFor='password' className='label'>
						Password
					</label>
					<input
						type='password'
						id='password'
						placeholder='*****'
						className='input input-password'
					/>
					<input
						type='submit'
						defaultValue='Log in'
						className='primary-button login-button'
					/>
					<a href='/'>Forgot my password</a>
				</form>
				<button className='secondary-button'>Sign Up</button>
			</div>
		</div>
	)
}

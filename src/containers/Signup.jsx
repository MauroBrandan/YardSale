import React from 'react'

export const Signup = () => {
	return (
		<div className='login'>
			<div className='form-container'>
				<h1 className='title'>My account</h1>
				<form action='/' className='form'>
					<label htmlFor='name' className='label'>
						Name
					</label>
					<input
						type='text'
						id='name'
						placeholder='Walter White'
						className='input'
					/>
					<label htmlFor='email' className='label'>
						Email address
					</label>
					<input
						type='email'
						id='email'
						placeholder='heisenberg@gmail.com'
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
						defaultValue='Create account'
						className='primary-button'
					/>
				</form>
			</div>
		</div>
	)
}

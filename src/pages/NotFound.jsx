import React from 'react'
import '../styles/NotFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<div className='NotFound'>
			<p className='title'>404</p>
			<p>THE PAGE</p>
			<p>WAS NOT FOUND</p>
			<Link to={'/'}>
				<button className='primary-button'>BACK TO HOME</button>
			</Link>
		</div>
	)
}

export default NotFound

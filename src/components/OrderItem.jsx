import React from 'react'
import '../styles/OrderItem.css'
import IconClose from '../assets/icons/icon_close.png'

const OrderItem = ({ item }) => {
	const { images, title, price } = item

	return (
		<div className='OrderItem'>
			<figure>
				<img src={images[0]} alt={title} />
			</figure>
			<p>{title}</p>
			<p>${price}</p>
			<img src={IconClose} alt='close' />
		</div>
	)
}

export default OrderItem

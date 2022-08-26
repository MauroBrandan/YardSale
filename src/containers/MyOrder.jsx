import React from 'react'
import '../styles/MyOrder.css'
import OrderItem from '../components/OrderItem'
import IconArrow from '../assets/icons/arrow.svg'

const MyOrder = () => {
	return (
		<aside className='MyOrder'>
			<div className='title-container'>
				<img src={IconArrow} alt='arrow' />
				<p className='title'>My order</p>
			</div>
			<div className='my-order-content'>
				<OrderItem />
				<div className='order'>
					<p>
						<span>Total</span>
					</p>
					<p>$560.00</p>
				</div>
				<button className='primary-button'>Checkout</button>
			</div>
		</aside>
	)
}

export default MyOrder

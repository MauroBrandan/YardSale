import React, { useContext } from 'react'
import '../styles/MyOrder.css'
import AppContext from '../context/AppContext'
import OrderItem from '../components/OrderItem'
import IconArrow from '../assets/icons/arrow.svg'

const MyOrder = () => {
	const {
		state: { cart },
	} = useContext(AppContext)

	const sumTotal = () => {
		const sum = cart.reduce((acc, item) => acc + item.price, 0)
		return sum
	}

	return (
		<aside className='MyOrder'>
			<div className='title-container'>
				<img src={IconArrow} alt='arrow' />
				<p className='title'>My order</p>
			</div>
			<div className='my-order-content'>
				{cart.map((item, index) => (
					<OrderItem key={index} item={item} />
				))}
				<div className='order'>
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className='primary-button'>Checkout</button>
			</div>
		</aside>
	)
}

export default MyOrder

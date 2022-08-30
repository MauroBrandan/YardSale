import React from 'react'
import '../styles/ProductItem.css'
import IconAddToCar from '../assets/icons/bt_add_to_cart.svg'

const ProductItem = ({ product }) => {
	const { images, title, price } = product
	return (
		<div className='ProductItem'>
			<img src={images[0]} alt={title} />
			<div className='product-info'>
				<div>
					<p>${price}</p>
					<p>{title}</p>
				</div>
				<figure>
					<img src={IconAddToCar} alt='' />
				</figure>
			</div>
		</div>
	)
}

export default ProductItem

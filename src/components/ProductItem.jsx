import React, { useContext } from 'react'
import '../styles/ProductItem.css'
import AppContext from '../context/AppContext'
import IconAddToCart from '../assets/icons/bt_add_to_cart.svg'

const ProductItem = ({ product }) => {
	const { images, title, price } = product
	const { addToCart } = useContext(AppContext)

	const handleClick = (item) => {
		addToCart(item)
	}

	return (
		<div className='ProductItem'>
			<img src={images[0]} alt={title} />
			<div className='product-info'>
				<div>
					<p>${price}</p>
					<p>{title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={IconAddToCart} alt='add to cart' />
				</figure>
			</div>
		</div>
	)
}

export default ProductItem

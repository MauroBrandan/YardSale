import React from 'react'
import '../styles/ProductDetail.css'
import ProductInfo from '../components/ProductInfo'
import IconClose from '../assets/icons/icon_close.png'

const ProductDetail = () => {
	return (
		<aside className='ProductDetail'>
			<div className='ProductDetail-close'>
				<img src={IconClose} alt='close' />
			</div>
			<ProductInfo />
		</aside>
	)
}

export default ProductDetail

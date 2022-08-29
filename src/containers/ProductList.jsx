import React from 'react'
import '../styles/ProductList.css'
import useGetProducts from '../hooks/useGetProducts'
import ProductItem from '../components/ProductItem'

const API = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=25'

const ProductList = () => {
	const products = useGetProducts(API)

	return (
		<section className='main-container'>
			<div className='ProductList'>
				{products.map((product) => (
					<ProductItem key={product.id} product={product} />
				))}
			</div>
		</section>
	)
}

export default ProductList

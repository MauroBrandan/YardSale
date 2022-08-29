import { useState, useEffect } from 'react'
import axios from 'axios'

const useGetProducts = (API) => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		axios
			.get(API)
			.then((response) => setProducts(response.data))
			.catch((err) => console.error(err))
	}, [])

	return products
}

export default useGetProducts

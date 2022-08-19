import React from 'react'
import '../styles/global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../containers/Layout'
import { Navbar } from '../components/Navbar'
import { Login } from '../containers/Login.jsx'
import { Signup } from '../containers/Signup'

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Navbar />
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='signup' element={<Signup />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	)
}

export default App

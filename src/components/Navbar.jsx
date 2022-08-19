import React from 'react'
import '../styles/navbar.css'
import IconMenu from '../assets/icons/icon_menu.svg'
import Logo from '../assets/logos/logo_yard_sale.svg'
import CartLogo from '../assets/icons/icon_shopping_cart.svg'

export const Navbar = () => {
	return (
		<nav>
			<img src={IconMenu} alt='menu' className='menu' />
			<div className='navbar-left'>
				<img src={Logo} alt='logo' className='logo' />
				<ul>
					<li>
						<a href='/'>All</a>
					</li>
					<li>
						<a href='/'>Clothes</a>
					</li>
					<li>
						<a href='/'>Electronics</a>
					</li>
					<li>
						<a href='/'>Furnitures</a>
					</li>
					<li>
						<a href='/'>Toys</a>
					</li>
					<li>
						<a href='/'>Others</a>
					</li>
				</ul>
			</div>
			<div className='navbar-right'>
				<ul>
					<li className='navbar-email'>maurobrandan.mb@gmail.com</li>
					<li className='navbar-shopping-cart'>
						<img src={CartLogo} alt='shopping cart' />
						<div>5</div>
					</li>
				</ul>
			</div>
		</nav>
	)
}

import React from 'react'
import styles from '../styles/navbar.module.css'
import IconMenu from '../assets/icons/icon_menu.svg'
import Logo from '../assets/logos/logo_yard_sale.svg'
import CartLogo from '../assets/icons/icon_shopping_cart.svg'

const Navbar = () => {
	return (
		<nav>
			<img src={IconMenu} alt='menu' className={styles.menu} />
			<div className={styles['navbar-left']}>
				<img src={Logo} alt='logo' className={styles.logo} />
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
			<div className={styles['navbar-right']}>
				<ul>
					<li className={styles['navbar-email']}>maurobrandan.mb@gmail.com</li>
					<li className={styles['navbar-shopping-cart']}>
						<img src={CartLogo} alt='shopping cart' />
						<div>5</div>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar

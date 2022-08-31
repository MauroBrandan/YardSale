import React, { useState, useContext } from 'react'
import styles from '../styles/navbar.module.css'
import AppContext from '../context/AppContext'
import IconMenu from '../assets/icons/icon_menu.svg'
import Logo from '../assets/logos/logo_yard_sale.svg'
import CartLogo from '../assets/icons/icon_shopping_cart.svg'
import Menu from './Menu.jsx'

const Navbar = () => {
	const [toggle, settoggle] = useState(false)
	const {
		state: { cart },
	} = useContext(AppContext)

	const handleToogle = () => {
		settoggle(!toggle)
	}

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
					<li className={styles['navbar-email']} onClick={handleToogle}>
						maurobrandan.mb@gmail.com
					</li>
					<li className={styles['navbar-shopping-cart']}>
						<img src={CartLogo} alt='shopping cart' />
						{cart.length > 0 && <div>{cart.length}</div>}
					</li>
				</ul>
			</div>

			{toggle && <Menu />}
		</nav>
	)
}

export default Navbar

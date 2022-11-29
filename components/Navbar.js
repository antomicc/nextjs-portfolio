import Link from 'next/link';
import style from '../styles/navbar.module.scss';
import Image from 'next/image';
import logoJosbyte from '../public/Images/LogoJosbyte.png';
import { useEffect, useState } from 'react';
import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

const Navbar = () => {
	const [open, setOpen] = useState(false);
	//const [logoRes, setLogoRes] = useState(false);
	const handleToggle = () => {
		setOpen(!open);
	};

	const handleNav = () => {
		setOpen(false);
	}

	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	/*const onClickTheme = () => {
		if (darkMode) theme.dispatch({ type: 'LIGHTMODE' });
		else theme.dispatch({ type: 'DARKMODE' });
	};*/

	useEffect(() => {
		/* const mql = window.matchMedia('(min-width: 1024px)');
		handleViewNav();

		mql.addEventListener('change', () => {
			handleViewNav();
		});*/
	}, []);

	return (
		<nav className={style.nav}>
			<div className='container'>
				<div className={style.navItem}>
					<div className={style.logo}>
						<Link href={'/'}>
							<a>
								<Image
									className={style.logoNav}
									src={logoJosbyte}
									alt='logo-png'
								/>
							</a>
						</Link>
					</div>
					<div className={`${style.menuItems} ${open ? style.activeNav : ''}`}>
						<Link href='/'>
							<a onClick={handleNav} className='menu-item'> Home </a>
						</Link>
						<Link href='/projects'>
							<a onClick={handleNav} className='menu-item'> Projects </a>
						</Link>
						<a onClick={handleNav} className='menu-item' href='#aboutme'>
							About
						</a>
						<Link href='/contact'>
							<a onClick={handleNav} className='menu-item'>
								{' '}
								Contact
							</a>
						</Link>
					</div>
					<button
						onClick={handleToggle}
						className={`hamburger hamburger--vortex ${open ? 'is-active' : ''}`}
						type='button'
					>
						<span className='hamburger-box'>
							<span className='hamburger-inner'></span>
						</span>
					</button>
					{/*
					<button
						className={`btn btn-darkmode ${darkMode ? 'btn-dark' : 'btn-light'}`}
						onClick={onClickTheme}
					>
						<span>{darkMode ? '🌞' : '🌙'}</span>
					</button>
	*/}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

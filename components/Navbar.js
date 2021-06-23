import Link from 'next/link';
import style from '../styles/navbar.module.scss';
import Image from 'next/image';
import logoMobile from '../public/Images/logo-mobile.png';
import logoDektop from '../public/Images/logo-dektop.png';
import { useEffect, useState } from 'react';

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [logoRes, setLogoRes] = useState(false);
	const handleToggle = () => {
		setOpen(!open);
	};

	useEffect(() => {
		const handleViewNav = () => {
			if (window.matchMedia('(min-width: 1024px)').matches) {
				setLogoRes(true);
			} else {
				setLogoRes(false);
			}
		};

		const mql = window.matchMedia('(min-width: 1024px)');
		handleViewNav();

		mql.addEventListener('change', () => {
			handleViewNav();
		});
	}, []);

	return (
		<nav className={style.nav}>
			<div className='container'>
				<div className={style.navItem}>
					<div className={style.logo}>
						<Image
							className={style.logoNav}
							src={logoRes ? logoDektop : logoMobile}
							alt='logo-png'
							height={logoRes ? 60 : 100}
						/>
					</div>
					<div className={`${style.menuItems} ${open ? style.activeNav : ''}`}>
						<Link href='/'>
							<a className='menu-item'> Home </a>
						</Link>
						<Link href='/project'>
							<a className='menu-item'> Projects </a>
						</Link>
						<a className='menu-item' href='#about'>
							About
						</a>
						<a className='menu-item' href='#contact'>
							{' '}
							Contact
						</a>
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
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

import Link from 'next/link';
import style from '../styles/footer.module.scss';
import SocialButton from './buttons/SocialButton';
import { BsTwitter, BsInstagram, BsBehance } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa'
import { GrSend, GrMail } from 'react-icons/gr'
import { SiNextdotjs, SiSass } from 'react-icons/si'
import LogoWhite from '../public/Images/Illustrations/LogoWhite.svg'


const Footer = () => {
	return (
		<footer className={style.footer}>
			<div className={style.contactCTO}>
				<span> Do you want to start a project? </span>
				<p> Are you interested in working together? Message me, i will respond. </p>
				<div className={style.buttonIcon}>
					<a href="#">
						<SocialButton icon={GrSend} text={"Why not?"} color={'#333366'} />
					</a>
				</div>
			</div>
			<div className='container'>
				<div className={style.footSocial}>
					<div className={style.logoContent}>
						<Link href={'/'}>
							<a>
								<LogoWhite />
							</a>
						</Link>
						<p> If you can imagine it, you can create it. </p>
					</div>
					<ul className={style.socialList}>
						<li>
							<a href="https://twitter.com/_josbyte">
								<SocialButton icon={BsTwitter} text={'Follow me!'} color={'#1C98E5'} />
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/josbyte/">
								<SocialButton icon={FaLinkedinIn} text={'Hire me!'} color={'#026EAA'} />
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/_josbyte/">
								<SocialButton icon={BsInstagram} text={'Chek me!'} color={'#B0307F'} />
							</a>
						</li>
						<li>
							<a href="https://www.behance.net/josbyte">
								<SocialButton icon={BsBehance} text={'Designs'} color={'#000'} />
							</a>
						</li>
						<li>
							<a href='mailto: josuer@josbyte.com'>
								<SocialButton icon={GrMail} text={'Mail me!'} color={'#a40d38'} />
							</a>
						</li>
					</ul>
				</div>
				<div className={style.copy}>
					<p>Built by me :) &copy; 2022 by <strong> Josbyte </strong> </p>
					<p> Made with:</p>
					<a href="https://nextjs.org/"> <SiNextdotjs size={'2rem'} /> extJS </a>
					<span> and </span>
					<a href="https://sass-lang.com/"> <SiSass size={'2rem'} /> ass </a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

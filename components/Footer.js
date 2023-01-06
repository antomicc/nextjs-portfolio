import Link from 'next/link';
import style from '../styles/footer.module.scss';
import SocialButton from './buttons/SocialButton';
import { BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa'
import { AiTwotoneStar } from 'react-icons/ai'
import Image from 'next/image';
import LogoWhite from '../public/Images/Illustrations/LogoWhite.svg'


const Footer = () => {
	return (
		<footer className={style.footer}>
			<div className={style.contactCTO}>
				<span> Do you want to start a project? </span>
				<p> Are you interested in working together? Write me I will be attentive :) </p>
				<div className={style.buttonIcon}>
					<a href="#">
						<SocialButton icon={AiTwotoneStar} text={"Let's GO!"} color={'#333366'} />
					</a>
				</div>
			</div>
			<div className='container'>
				<div className={style.footSocial}>
					<Link href={'/'}>
						<a>
							<LogoWhite />
						</a>
					</Link>
					<ul className={style.socialList}>
						<li>
							<a href="#">
								<SocialButton icon={BsTwitter} text={'Twitter'} color={'#1C98E5'} />
							</a>
						</li>
						<li>
							<a href="#">
								<SocialButton icon={FaLinkedinIn} text={'Linkedin'} color={'#1C98E5'} />
							</a>
						</li>
					</ul>
					<ul className={style.listContact}>
						<li>
							<button className="learn-more">
								<span className="circle" aria-hidden="true">
									<span className="icon arrow"></span>
								</span>
								<a href='mailto: angelldev@gmail.com' className="button-text">Email me!</a>
							</button>
						</li>
						<li>
							<button className="learn-more">
								<span className="circle" aria-hidden="true">
									<span className="icon arrow"></span>
								</span>
								<Link href={'/contact'}>
									<a className="button-text">Get in touch!</a>
								</Link>
							</button>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

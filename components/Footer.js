import Link from 'next/link';
import style from '../styles/footer.module.scss';

const Footer = () => {
	return (
		<footer className={style.footer}>
			<div className='container'>
				<h3>Contact</h3>
				<div className={style.footSocial}>
					<ul className={style.socialList}>
						<li>
							<button className="learn-more">
								<span className="circle" aria-hidden="true">
									<span className="icon arrow">
									</span>
								</span>
								<a className="button-text" href="https://twitter.com/_josbyte">
									TWITTER
								</a>
							</button>
						</li>
						<li>
							<button className="learn-more">
								<span className="circle" aria-hidden="true">
									<span className="icon arrow">
									</span>
								</span>
								<a className="button-text" href="https://www.linkedin.com/in/josbyte">
									LINKEDIN
								</a>
							</button>
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
			<div className={style.footerCopy}>
				<div className='container'>
					<h4>
						Made with ♥️ and <a href="https://nextjs.org/"> NextJs </a>
					</h4>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

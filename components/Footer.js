import Link from 'next/link';
import style from '../styles/footer.module.scss';


/* Techs for Footer */


const Footer = () => {
	return (
		<footer className={style.footer}>
			<div className='container'>
				<h3>Contact</h3>
				<div className={style.footSocial}>
					<ul className={style.socialList}>
						<li>
							<button class="learn-more">
								<span class="circle" aria-hidden="true">
									<span class="icon arrow">
									</span>
								</span>
								<a class="button-text" href="https://twitter.com/_josbyte">
									<i className='icon-footer ri-twitter-line'></i>
									@_josbyte
								</a>
							</button>
						</li>
						<li>
							<button class="learn-more">
								<span class="circle" aria-hidden="true">
									<span class="icon arrow">
									</span>
								</span>
								<a class="button-text" href="https://twitter.com/_josbyte">
									<i className='icon-footer ri-linkedin-fill'></i>
									Josue Ruiz
								</a>
							</button>
						</li>
					</ul>
					<ul className={style.listContact}>
						<li>
							<button class="learn-more">
								<span class="circle" aria-hidden="true">
									<span class="icon arrow"></span>
								</span>
								<a href='mailto: angelldev@gmail.com' class="button-text">Email me!</a>
							</button>
						</li>
						<li>
							<button class="learn-more">
								<span class="circle" aria-hidden="true">
									<span class="icon arrow"></span>
								</span>
								<Link href={'/contact'}>
									<a class="button-text">Get in touch!</a>
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

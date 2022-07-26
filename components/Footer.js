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
							<i class="ri-twitter-fill"></i>
							<a href="https://twitter.com/_josbyte">
								· @_josbyte
							</a>
						</li>
						<li>
							<i class="ri-linkedin-fill"></i>
							<a href="">· Josue Ruiz </a>
						</li>
						<li>
							<a href='mailto: angelldev@gmail.com'>
								Email me!
							</a>
						</li>
						<li>
							<a href="#">
								Get in touch!
							</a>
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

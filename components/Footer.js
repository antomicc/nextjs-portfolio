import style from '../styles/footer.module.scss';
import Giticon from '../components/svgs/social/Github';
import Behanceicon from '../components/svgs/social/Behance';
import Linkeicon from '../components/svgs/social/Linkedin';
import Instaicon from '../components/svgs/social/Instagram';
import Codepenicon from '../components/svgs/social/Codepen';
import Twittericon from '../components/svgs/social/Twitter';

/* Techs for Footer */

import NextIcon from '../components/svgs/tecs/Next';
import SassIcon from '../components/svgs/tecs/Sass';

const Footer = () => {
	const git_HL = 'https://github.com/angelldeev';
	const Behance_link = 'https://www.behance.net/angeldev';
	const Linkedin_link = 'https://www.linkedin.com/in/angeldev/';
	const Instagram_link = 'https://www.instagram.com/angell_dev/';
	const codepen_link = 'https://codepen.io/your-work/';
	const twitter_link = 'https://twitter.com/angeldevjs';

	return (
		<footer className={style.footer}>
			<div className='container'>
				<span className={style.spanF}> - or - </span>
				<button className='btn btn-sutil btn-out'>
					<a href=''> Email me! </a>
				</button>

				<h3>My social media!</h3>
				<div className={style.footSocial}>
					<a href={git_HL} target='_blank' rel='noopener noreferrer'>
						<Giticon />
					</a>
					<a href={Behance_link} target='_blank' rel='noopener noreferrer'>
						<Behanceicon />
					</a>
					<a href={Linkedin_link} target='_blank' rel='noopener noreferrer'>
						<Linkeicon />
					</a>
					<a href={Instagram_link} target='_blank' rel='noopener noreferrer'>
						<Instaicon />
					</a>
					<a href={codepen_link} target='_blank' rel='noopener noreferrer'>
						<Codepenicon />
					</a>
					<a href={twitter_link} target='_blank' rel='noopener noreferrer'>
						<Twittericon />
					</a>
				</div>
			</div>
			<div className={style.footerCopy}>
				<div className='container'>
					<h4>
						Made with ♥️ and <NextIcon /> , <SassIcon /> & Sanity Studio
					</h4>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

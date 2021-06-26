import styles from '../styles/about.module.scss';
import me from '../public/Images/me.png';
import Image from 'next/image';
import GithubS from '../components/svgs/social/Github';
import InstaS from '../components/svgs/social/Instagram';
import LinkedinS from '../components/svgs/social/Linkedin';
import BehanceS from '../components/svgs/social/Behance';
import svgLine from '../public/Images/Particles/Mask-Group-1.svg';
import svgTriangle from '../public/Images/Particles/Polygon-6.svg';

const AboutCard = () => {
	const git_HL = 'https://github.com/angelldeev';
	const Behance_link = 'https://www.behance.net/angeldev';
	const Linkedin_link = 'https://www.linkedin.com/in/angeldev/';
	const Instagram_link = 'https://www.instagram.com/angell_dev/';

	return (
		<section className={styles.aboutSection}>
			<div className={styles.lineContainer}>
				<Image alt='' src={svgLine} width={400} height={250} />
			</div>
			<div className={styles.triangleContainer}>
				<Image alt='' src={svgTriangle} width={400} height={250} />
			</div>
			<div className='container'>
				<div className={styles.aboutContent}>
					<div className={styles.imageContainer}>
						<Image className={styles.imageProfile} src={me} />
						<div className={styles.socialMedia}>
							<a href={git_HL}>
								<GithubS />
							</a>
							<a href={Behance_link}>
								<BehanceS />
							</a>
							<a href={Linkedin_link}>
								<LinkedinS />
							</a>
							<a href={Instagram_link}>
								<InstaS />
							</a>
						</div>
					</div>

					<div className={styles.textAbout}>
						<h2> Angel Ruiz</h2>
						<p>
							Hello, my name is Angel, i’m from Guatemala City, i’m a technology
							enthusiast and a lover of development and design
						</p>
						<button className='btn btn-positive'>
							<a href=''>Download CV</a>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutCard;

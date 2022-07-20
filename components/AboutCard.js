import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import styles from '../styles/about.module.scss';
import me from '../public/Images/me.png';
import Image from 'next/image';
import GithubS from '../components/svgs/social/Github';
import InstaS from '../components/svgs/social/Instagram';
import LinkedinS from '../components/svgs/social/Linkedin';
import BehanceS from '../components/svgs/social/Behance';
import svgLine from '../public/Images/Particles/Mask-Group-1.svg';
import svgTriangle from '../public/Images/Particles/Polygon-6.svg';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const AboutCard = () => {
	const git_HL = 'https://github.com/angelldeev';
	const Behance_link = 'https://www.behance.net/angeldev';
	const Linkedin_link = 'https://www.linkedin.com/in/angeldev/';
	const Instagram_link = 'https://www.instagram.com/angell_dev/';

	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	return (
		<section id='aboutme' className={styles.aboutSection}>
			<Fade bottom>
				<div className={styles.lineContainer}>
					<Image alt='' src={svgLine} width={400} height={250} />
				</div>
			</Fade>
			<Fade top>
				<div className={styles.triangleContainer}>
					<Image alt='' src={svgTriangle} width={400} height={250} />
				</div>
			</Fade>
			<Zoom cascade>
				<div className='container'>
					<div className={styles.aboutContent}>
						<div className={styles.sectionImage}>
							<div className={styles.imageContainer}>
								<Image width="250px" height="250px" className={styles.imageProfile} src="https://i.imgur.com/RQAqjmM.png" />
							</div>
						</div>
						{ /*
						<div className={styles.socialMedia}>
							<a href={git_HL} target='_blank' rel='noopener noreferrer'>
								<GithubS />
							</a>
							<a href={Behance_link} target='_blank' rel='noopener noreferrer'>
								<BehanceS />
							</a>
							<a href={Linkedin_link} target='_blank' rel='noopener noreferrer'>
								<LinkedinS />
							</a>
							<a href={Instagram_link} target='_blank' rel='noopener noreferrer'>
								<InstaS />
							</a>
						</div>
	*/}
						<div className={styles.textAbout}>
							<p>
								Hello! My name is Josue, i’m from Guatemala City, i’m a technology enthusiast and a lover of development and design.
								<br />
								<br />
								What are my specialties? The development and design.
								That's why I'm fascinated by frontend development, ui design and little by little getting into the UX branch
							</p>
							<button className='btn btn-light'>
								<a
									href='https://drive.google.com/file/d/1Po4ActufvmIm2yy3GIk0hjQYqs7DSRUB/view?usp=sharing'
									target='_blank'
									rel='noopener noreferrer'
								>
									Download CV
								</a>
							</button>
							<p className={styles.subtitleAbout}>
								Here are a few technologies I’ve been working with recently:
							</p>
						</div>
					</div>
				</div>
			</Zoom>
		</section>
	);
};

export default AboutCard;

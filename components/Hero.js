import style from '../styles/hero.module.scss';
import Image from 'next/image';
import svgDots from '../public/Images/Particles/Mask-Group.svg';
import svgCircle from '../public/Images/Particles/Polygon-4.svg';
import svgTriangle from '../public/Images/Particles/Polygon-6.svg';
import Fade from 'react-reveal/Fade';

const Hero = () => {
	return (
		<>
			<div className={style.hero}>
				<Fade left>
					<div className={style.dotsContainer}>
						<Image alt='' src={svgDots} width={500} height={350} />
					</div>
				</Fade>
				<Fade top>
					<div className={style.circleContainer}>
						<Image alt='' src={svgCircle} width={300} height={150} />
					</div>
				</Fade>
				<Fade right>
					<div className={style.triangleContainer}>
						<Image alt='' src={svgTriangle} width={500} height={350} />
					</div>
				</Fade>

				<div className='container'>
					<div className={style.intro}>
						<h3>Hi There!</h3>
						<section className='section-process'>
							<div className='section-container'>
								<div className='process-steps-container container-medium with-padding'>
									<div className='process-step-container process-step-1'>
										<div className='process-step-title-container'>
											<h2 className='step-title-outprocess'>My name is <span className='process-step-title' >Josue</span></h2>
											<h2 className='step-title-outprocess-overlay'>My name is
												<span className='process-step-title-overlay'> Josue</span>
											</h2>
										</div>
									</div>
									<div className='process-step-container process-step-2'>
										<div className='process-step-title-container'>
											<h2 className='step-title-outprocess'>I’m a  <span className='process-step-title' >frontend developer</span></h2>
											<h2 className='step-title-outprocess-overlay'>I’m a
												<span className='process-step-title-overlay'> frontend developer</span>
											</h2>
										</div>
									</div>
									<div className='process-step-container process-step-3'>
										<div className='process-step-title-container'>
											<h2 className='step-title-outprocess'>& <span className='process-step-title' >digital designer.</span></h2>
											<h2 className='step-title-outprocess-overlay'>&
												<span className='process-step-title-overlay'> digital designer.</span>
											</h2>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
					<div className={style.buttonsGroup}>
						<a href='#contact'>
							<button className='btn btn-brand'>Contact me</button>
						</a>
						<a href='#aboutme'>
							<button className='btn btn-sutil'> About me</button>{' '}
						</a>
					</div>
				</div>
			</div>
			<Fade>
				<div className={style.socialButtom}>
					<a href="https://github.com/josbyte-dev">
						<i className="ri-github-fill"></i>
					</a>
					<a href="https://www.instagram.com/_josbyte/">
						<i className="ri-instagram-fill"></i>
					</a>
					<a href="https://www.behance.net/josbyte">
						<i className="ri-behance-fill"></i>
					</a>
				</div>
			</Fade>
		</>
	);
};

export default Hero;

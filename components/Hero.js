import style from '../styles/hero.module.scss';
import Image from 'next/image';
import SvgGrilla from '../public/Images/Particles/Grilla.svg';
import SvgDots from '../public/Images/Particles/dots-home.svg';
import Fade from 'react-reveal/Fade';
import Link from 'next/link';

const Hero = () => {
	return (
		<>
			<div className={style.hero}>
				<Fade left>
					<div className={style.grillaContainer}>
						<Image alt='' src={SvgGrilla} width={650} height={1100} />
					</div>
				</Fade>
				<div className='container'>
					<div className={style.containerHero}>
						<div className={style.heroLeft}>
							<div className={style.intro}>
								<Fade left cascade>
									<h3>Hi There!</h3>
								</Fade>
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
								<Link href='/contact'>
									<button className='btn btn-brand'>Contact me</button>
								</Link>
								<a href='#aboutme'>
									<button className='btn btn-sutil'> About me</button>{' '}
								</a>
							</div>
						</div>
						<div className={style.heroRight}>
							<div className={style.svgDotsContainer}>
								<Image className={style.svgDots} alt='' src={SvgDots} width={800} height={1500} />
							</div>
							<Fade top cascade>
								<div className={style.imageProfile} >
									<Image width="650px" height="650px" src="https://i.imgur.com/0xC1ejw.png" />
								</div>
							</Fade>
						</div>
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

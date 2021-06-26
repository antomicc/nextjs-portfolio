import style from '../styles/hero.module.scss';
import Image from 'next/image';
import svgDots from '../public/Images/Particles/Mask-Group.svg';
import svgCircle from '../public/Images/Particles/Polygon-4.svg';
import svgTriangle from '../public/Images/Particles/Polygon-6.svg';

const Hero = () => {
	return (
		<>
			<div className={style.hero}>
				<div className={style.dotsContainer}>
					<Image alt='' src={svgDots} width={500} height={350} />
				</div>
				<div className={style.circleContainer}>
					<Image alt='' src={svgCircle} width={300} height={150} />
				</div>
				<div className={style.triangleContainer}>
					<Image alt='' src={svgTriangle} width={500} height={350} />
				</div>
				<div className='container'>
					<div className={style.intro}>
						<h3>Hi There! I am a </h3>
						<section className='section-process'>
							<div className='section-container'>
								<div className='process-steps-container container-medium with-padding'>
									<div className='process-step-container process-step-1'>
										<div className='process-step-title-container'>
											<h2 className='process-step-title'>FRONT-END</h2>
											<div className='process-step-title-overlay'>FRONT-END</div>
										</div>
									</div>
									<div className='process-step-container process-step-2'>
										<div className='process-step-title-container'>
											<h2 className='process-step-title'>UI DESIGNER</h2>
											<div className='process-step-title-overlay'>UI DESIGNER</div>
										</div>
									</div>
									<div className='process-step-container process-step-3'>
										<div className='process-step-title-container'>
											<h2 className='process-step-title'>WEB DEV</h2>
											<div className='process-step-title-overlay'>WEB DEV</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						<h3>Welcome to my website</h3>
					</div>
					<div className={style.buttonsGroup}>
						<button className='btn btn-contact btn-out'>Contact me</button>
						<button className='btn btn-brand btn-out'>About me</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;

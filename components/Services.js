import style from '../styles/services.module.scss';
import svgLine from '../public/Images/Particles/Mask-Group-1.svg';
import svgDots from '../public/Images/Particles/Mask-Group.svg';
import Image from 'next/dist/client/image';
import Zoom from 'react-reveal/Zoom';

const Services = () => {
	const servicesIcon = ['ri-terminal-box-line', 'ri-smartphone-fill', 'ri-collage-line'];

	const servicesTitle = ['Software Developing', 'Responsive Design', 'Design Interpretation'];

	const servicesText = [
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi elit commodo feugiat sodales arcu tristique nunc ornare volutpat. ',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi elit commodo feugiat sodales arcu tristique nunc ornare volutpat. ',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi elit commodo feugiat sodales arcu tristique nunc ornare volutpat. '
	];

	const servicesColors = [
		style.cardDev, style.cardResponsive, style.cardDesign
	];

	return (
		<div className={style.services}>
			<Zoom bottom>
				<div className={style.containerWork}>
					<div className={style.cards}>
						{servicesIcon &&
							servicesIcon.map((Icon, index) => {
								return (
									<div key={index} className={`${style.card} ${servicesColors[index]}`}>
										<div className={style.contentCardContainer}>
											<div className={style.headerCardContainer}>
												<div className={style.containerIcon}>
													<i className={Icon}></i>
												</div>
												<div className={style.titleContent}>
													<h3> {servicesTitle[index]} </h3>
												</div>
											</div>
											<div className={style.infoContent}>
												<p> {servicesText[index]} </p>
											</div>
										</div>
									</div>
								);
							})}
					</div>
				</div>
			</Zoom>
		</div>
	);
};

export default Services;

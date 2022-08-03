import style from '../styles/services.module.scss';
import Image from 'next/dist/client/image';
import Zoom from 'react-reveal/Zoom';
import { Slide } from 'react-reveal';

const Services = () => {
	const servicesIcon = ['ri-terminal-box-line', 'ri-smartphone-fill', 'ri-collage-line'];

	const servicesTitle = ['Software Developing', 'Responsive Design', 'Design Interpretation'];

	const servicesText = [
		'I work in different development languages, but more importantly, I focus on problem solving methods.',
		'As a frontend developer, I am aware that the vast majority of technologies are consumed through mobile phones, which is why all my work is fully responsive.',
		'I have worked hard on developing my ability to interpret layouts for development as well as developing my designer view to provide the best user experience.'
	];

	const servicesColors = [
		style.cardDev, style.cardResponsive, style.cardDesign
	];

	return (
		<div className={style.services}>
			<div className={style.containerWork}>
				<Slide bottom cascade>
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
				</Slide>
			</div>
		</div>
	);
};

export default Services;

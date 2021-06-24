import WebDes from '../components/svgs/tecs/WebDes';
import WebDev from '../components/svgs/tecs/WebDev';
import style from '../styles/services.module.scss';

const Services = () => {
	const servicesIcon = [WebDes, WebDev];

	const servicesTitle = ['Web Design', 'Web Development'];

	const servicesText = [
		'Everything is influenced by the presentation, the design must be friendly and intuitive.',
		'Development is important to do in an efficient and reusable way',
	];

	return (
		<div className={style.services}>
			<div className='container'>
				<h2> My services </h2>
				<div className={style.cards}>
					{servicesIcon &&
						servicesIcon.map((Icon, index) => {
							return (
								<div key={index} className={style.card}>
									<Icon className='icon' />
									<div className={style.infoContent}>
										<h3> {servicesTitle[index]} </h3>
										<p> {servicesText[index]} </p>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default Services;

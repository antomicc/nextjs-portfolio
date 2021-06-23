import webdesIcon from '../public/Icons/tecs/WebDes.svg';
import webdevIcon from '../public/Icons/tecs/WebDev.svg';
import Card from './Card';

const Services = () => {
	let services = [
		{
			title: 'Web Design',
			icon: webdesIcon,
			text: 'Everything is influenced by the presentation, the design must be friendly and intuitive.',
		},
		{
			title: 'Web Development',
			icon: webdevIcon,
			text: 'Development is important to do in an efficient and reusable way.',
		},
	];

	return (
		<div className='services'>
			<div className='container'>
				<h2> My services </h2>
				<div className='cards'>
					{services &&
						services.map((element, index) => {
							return (
								<Card
									key={index}
									img={element.icon.src}
									title={element.title}
									text={element.text}
								/>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default Services;

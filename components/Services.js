import style from '../styles/services.module.scss';
import Wave from 'react-wavify';
import { FiFigma } from 'react-icons/fi';
import { FaReact, FaSass } from 'react-icons/fa';
import { SiAdobephotoshop, SiNextdotjs, SiAdobeillustrator, SiNotion } from 'react-icons/si';

const Services = () => {

	const tools = [
		{
			icon: FiFigma,
			color: '#F24D1D',
			title: 'Figma'
		},
		{
			icon: FaReact,
			color: '#61DBFB',
			title: 'React JS'
		},
		{
			icon: FaSass,
			color: '#C26191',
			title: 'Sass'
		},
		{
			icon: SiNextdotjs,
			color: '#000000',
			title: 'Next Js'
		},
		{
			icon: SiAdobephotoshop,
			color: '#001833',
			title: 'Photoshop'
		},
		{
			icon: SiAdobeillustrator,
			color: '#F29200',
			title: 'Illustrator'
		},
		{
			icon: SiNotion,
			color: '#000',
			title: 'Notion'
		}
	]

	return (
		<div className={style.services}>
			<div className='container'>
				<h2>Tools</h2>
		
					<div className={style.tools}>
						{
							tools.map((tool, index) => (
								<div key={index} className={style.tool}>
									<tool.icon size={'3rem'} color={tool.color} />
									<span>{tool.title}</span>
								</div>
							))
						}
					</div>
			
			</div>
		</div>
	);
};

export default Services;

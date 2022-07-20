import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
const Html = () => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
	return (
		<svg
			width='85'
			height='85'
			viewBox='0 0 85 85'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				className={darkMode ? 'theme-dark' : 'theme-light'}
				d='M0 0H85L77.268 76.3672L42.4059 85L7.74714 76.3672L0 0ZM28.4598 34.5312L27.5279 24.9023L68.2398 24.9156L69.1718 15.632L15.8252 15.6188L18.6545 43.9928H55.59L54.2786 56.1266L42.5 58.9634L30.5454 56.1L29.7713 48.628H19.21L20.5548 63.4047L42.5 68.5366L64.2721 63.418L67.2775 34.5312H28.4598Z'
				fill='#ffff'
			/>
		</svg>
	);
};

export default Html;

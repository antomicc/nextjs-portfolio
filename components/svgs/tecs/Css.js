import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
const Css = () => {
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
				d='M0 0L7.72438 75.0975L42.5 85L77.2756 75.0975L85 0H0ZM69.3069 15.1786L68.2444 24.1521L42.6558 33.5234H67.3377L64.5044 61.3396L42.7692 66.7857L20.8994 61.2455L19.4827 47.2236H30.306L31.0144 54.4911L42.6558 57.0138L54.7648 54.0934L55.5829 42.4059L18.7283 42.3118L17.9315 33.5264L44.1858 24.1552H16.9823L15.6967 15.1816L69.3069 15.1786Z'
				fill='#505050'
			/>
		</svg>
	);
};

export default Css;

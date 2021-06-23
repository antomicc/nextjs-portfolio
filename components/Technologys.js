import cssIcon from '../public/Icons/tecs/Css.svg';
import figmaIcon from '../public/Icons/tecs/Figma.svg';
import firebaseIcon from '../public/Icons/tecs/firebase.svg';
import gitIcon from '../public/Icons/tecs/Git.svg';
import htmlIcon from '../public/Icons/tecs/Html.svg';
import jsIcon from '../public/Icons/tecs/Js.svg';
import nextIcon from '../public/Icons/tecs/Next.svg';
import phpIcon from '../public/Icons/tecs/Php.svg';
import reactIcon from '../public/Icons/tecs/React.svg';
import sassIcon from '../public/Icons/tecs/Sass.svg';
import webpackIcon from '../public/Icons/tecs/Webpack.svg';
import wordpressIcon from '../public/Icons/tecs/Wordpress.svg';

const Technologys = () => {
	const tecsIcons = [
		{ name: 'JS', icon: jsIcon },
		{ name: 'React', icon: reactIcon },
		{ name: 'NextJS', icon: nextIcon },
		{ name: 'HTML', icon: htmlIcon },
		{ name: 'CSS', icon: cssIcon },
		{ name: 'Figma', icon: figmaIcon },
		{ name: 'Sass', icon: sassIcon },
		{ name: 'Webpack', icon: webpackIcon },
		{ name: 'Git', icon: gitIcon },
	];

	const otherTecIcons = [
		{ name: 'PHP', icon: phpIcon },
		{ name: 'WordPress', icon: wordpressIcon },
		{ name: 'Firebase', icon: firebaseIcon },
	];
	return (
		<section>
			<article className='container'>
				<div className='grid'>
					{tecsIcons.map((tecs, index) => (
						<div key={index}>
							<img src={tecs.icon.src} alt={tecs.name} />
							<h3> {tecs.name} </h3>
						</div>
					))}
				</div>
				<h2> Other technologys that i use</h2>
				<div className='other-icons'>
					{otherTecIcons.map((el, index) => (
						<div key={index}>
							<img src={el.icon.src} alt={el.name} />
						</div>
					))}
				</div>
			</article>
		</section>
	);
};

export default Technologys;

import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import styles from '../../styles/slug.module.scss';
import Image from 'next/dist/client/image';
import githubIcon from '../../public/Images/Illustrations/gitHubicon.svg';
import Footer from '../../components/Footer';
const Project = ({
	title,
	description,
	date,
	projectType,
	image,
	link,
	repo,
	place,
	tools,
}) => {
	const [imageUrl, setImageUrl] = useState('');

	useEffect(() => {
		const imgBuilder = imageUrlBuilder({
			projectId: 'mw14nmly',
			dataset: 'production',
		});

		setImageUrl(imgBuilder.image(image));
	}, [image]);

	return (
		<section className={styles.slugSection}>
			<div className='container'>
				<h1> {title} </h1>

				<div className={styles.imgContent}>
					{imageUrl && <img className={styles.imgSlug} src={imageUrl} alt={title} />}
				</div>

				<div className='container-projects'>
					<p className={styles.paragraph}> {description} </p>
					<div className={styles.informationProjects}>
						<span>
							{' '}
							<strong> Finished: </strong>
							{new Date(date).toLocaleDateString()}
						</span>
						<h3>
							{' '}
							<strong> Project type: </strong> {projectType}{' '}
						</h3>
						<h4>
							{' '}
							<strong> Place: </strong> {place}
						</h4>
						<div className={styles.buttons}>
							<a href={link} rel='noopener noreferrer' target='_blank'>
								<button className='btn btn-positive'> See live preview! </button>
							</a>
							<a href={repo} rel='noopener noreferrer' target='_blank'>
								<button className='btn btn-contact'>
									<Image src={githubIcon} alt='' width={24} height={24} />
									See the repo!{' '}
								</button>
							</a>
						</div>
						<h4>Tools</h4>
						<ul>{tools && tools.map((el, index) => <li key={index}> {el} </li>)}</ul>
					</div>
				</div>
			</div>
			<Footer />
		</section>
	);
};

export const getServerSideProps = async (pageContext) => {
	const pageSlug = pageContext.query.slug;

	if (!pageSlug) {
		return {
			notFound: true,
		};
	}

	const query = encodeURIComponent(
		`*[ _type == "project" && slug.current == "${pageSlug}"]`
	);
	const url = `https://${process.env.PROJECT_API_KEY}.api.sanity.io/v1/data/query/production?query=${query}`;
	const result = await fetch(url).then((res) => res.json());
	const project = result.result[0];

	if (!project) {
		return {
			notFound: true,
		};
	} else {
		return {
			props: {
				description: project.description,
				date: project.date,
				title: project.title,
				image: project.imageP,
				projectType: project.projectType,
				link: project.link,
				repo: project.repo,
				place: project.place,
				tools: project.tools,
			},
		};
	}
};

export default Project;

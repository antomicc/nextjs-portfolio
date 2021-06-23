import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';

const Project = ({
	title,
	description,
	date,
	projectType,
	image,
	link,
	repo,
	place,
	tags,
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
		<>
			<div className='container'>
				<h1> {title} </h1>
				{imageUrl && <img src={imageUrl} alt={title} />}
				<span> {description}</span>
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
				<a href={link} rel='noopener noreferrer' target='_blank'>
					{' '}
					See live preview!{' '}
				</a>
				<a href={repo} rel='noopener noreferrer' target='_blank'>
					{' '}
					See the repo!{' '}
				</a>
				<h4>Tags</h4>
				<ul>{tags && tags.map((el) => <li> {el} </li>)}</ul>
			</div>
		</>
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
				tags: project.tags,
			},
		};
	}
};

export default Project;

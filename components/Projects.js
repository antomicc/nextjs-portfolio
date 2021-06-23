import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export const getServerSideProps = async (pageContext) => {
	const query = encodeURIComponent('*[ _type == "project" ]');
	const url = `https://mw14nmly.api.sanity.io/v1/data/query/production?query=${query}`;
	const result = await fetch(url).then((res) => res.json());
	console.log(result);

	if (!result.result) {
		return {
			props: {
				projects: [],
			},
		};
	} else {
		return {
			props: {
				projects: result.result,
			},
		};
	}
};

export default function Projects({ projects }) {
	const [mappedProjects, setMappedProjects] = useState([]);

	useEffect(() => {
		if (projects) {
			const imgBuilder = imageUrlBuilder({
				projectId: 'mw14nmly',
				dataset: 'production',
			});

			setMappedProjects(
				projects.map((p) => {
					return {
						...p,
						imageP: imgBuilder.image(p.imageP).width(500).height(250),
					};
				})
			);
		} else {
			setMappedProjects([]);
		}
	}, [projects]);

	return (
		<div className='container'>
			<h1>Projects </h1>
			<h3>Recents projects: </h3>

			<div className='grid'>
				{mappedProjects.map((p, index) => (
					<div key={index} className='project'>
						<h3>{p.title}</h3>
						<img src={p.imageP} alt={p.title} />
						<Link href={`project/${p.slug.current}`}>
							<a> See Project </a>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}

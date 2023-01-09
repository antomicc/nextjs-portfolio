import styles from '../styles/projects.module.scss';
import Footer from '../components/Footer';
import imageUrlBuilder from '@sanity/image-url';
import { useEffect, useState } from 'react';
import ProjectCard from '../components/cards/ProjectCard';
import { Fade } from 'react-reveal';
import Head from 'next/head';

export default function Projects({ projects }) {
	const [mappedProjects, setMappedProjects] = useState([]);

	useEffect(() => {
		if (projects) {
			const imgBuilder = imageUrlBuilder({
				projectId: 'mw14nmly',
				dataset: 'production',
				useCdn: true,
			});
			setMappedProjects(
				projects.map((p) => {
					return {
						...p,
						imageP: imgBuilder.image(p.imageP),
					};
				})
			);
		} else {
			setMappedProjects([]);
		}
	}, [projects]);
	return (
		<>
			<Head>
				<title> Projects | Josybte </title>
			</Head>
			<main className={styles.projectMain}>
				<section className={styles.projects}>
					<h1>Projects</h1>
					<Fade bottom cascade>
						<div className={styles.cardContainer}>
							{mappedProjects.map((p, index) => (
								<ProjectCard index={index} title={p.title} imageP={p.imageP} description={p.description} slug={p.slug.current} />
							))}
						</div>
					</Fade>
				</section>
				<Footer />
			</main>
		</>
	);
}

export const getServerSideProps = async (pageContext) => {
	const query = encodeURIComponent('*[ _type == "project"]');
	const url = `https://${process.env.NEXT_PUBLIC_PROJECT_API_KEY}.api.sanity.io/v1/data/query/production?query=${query}`;
	const result = await fetch(url).then((res) => res.json());

	if (!result.result) {
		console.log(result.result);
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

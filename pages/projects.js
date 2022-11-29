import styles from '../styles/Home.module.scss';
import Footer from '../components/Footer';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import { useEffect, useState } from 'react';
import Link from 'next/link';

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
		<main className={styles.projectMain}>
			<div className={styles.headerProjects}>
				<h1>Projects</h1>
			</div>
			<section className={styles.projects}>
				<div className={styles.cardContainer}>
					{mappedProjects.map((p, index) => (
						<div key={index} className={styles.cardProject}>
							<div className={styles.imageCardContainer}>
								<img src={p.imageP} alt={p.title} />
								<div className={styles.toolsContent}>
									<ul>
										{p.tools.map((tool, index) => (
											<li key={index}> {tool} </li>
										))}
									</ul>
								</div>
							</div>
							<div className={styles.infoContent}>
								<div className={styles.containerInfo}>
									<h4>{p.title}</h4>
									<Link href={`project/${p.slug.current}`}>
										<a>
											<i className='ri-arrow-right-line'></i>
										</a>
									</Link>
									<div className={styles.toolsContent}>
										<ul>
											{p.tools.map((tool, index) => (
												<li key={index}> {tool} </li>
											))}
										</ul>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
			<Footer />
		</main>
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

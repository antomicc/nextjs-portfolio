import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import imageUrlBuilder from '@sanity/image-url';
import Hero from '../components/Hero';
import Technologys from '../components/Technologys';
import AboutCard from '../components/AboutCard';
import Services from '../components/Services';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import FormContact from '../components/FormContact';
import Footer from '../components/Footer';

export default function Home({ projects }) {
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
						imageP: imgBuilder.image(p.imageP).width(500).height(500),
					};
				})
			);
		} else {
			setMappedProjects([]);
		}
	}, [projects]);

	return (
		<div>
			<main className={styles.main}>
				<Hero />
				<AboutCard />
				<Technologys />
				<Services />
				<section className={styles.projects}>
					<div className='container'>
						<h1>Projects </h1>
						<h3>Recents projects: </h3>
						<div className={styles.contentProjects}>
							<div className={styles.scrollProjects}>
								{mappedProjects.map((p, index) => (
									<div key={index} className={styles.cardProject}>
										<img src={p.imageP} alt={p.title} />
										<div className={styles.infoContent}>
											<h3>{p.title}</h3>
											<Link href={`project/${p.slug.current}`}>
												<a className='btn btn-sutil'> See Project </a>
											</Link>
										</div>
									</div>
								))}
							</div>
						</div>
						<Link href='/projects'>
							<a className='btn btn-sutil'> See more </a>
						</Link>
					</div>
				</section>
				<FormContact />
				<Footer />
			</main>
		</div>
	);
}

export const getServerSideProps = async (pageContext) => {
	const query = encodeURIComponent('*[ _type == "project"][0..1]');
	const url = `https://${process.env.PROJECT_API_KEY}.api.sanity.io/v1/data/query/production?query=${query}`;
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

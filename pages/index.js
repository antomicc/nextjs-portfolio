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
import Footer from '../components/Footer';
import flechaPNG from '../public/Images/Particles/FLECHA.png';
import { Fade } from 'react-reveal';
import React, { useContext } from 'react';
import { ThemeContext } from '../components/context/ThemeContext';
import Worked from '../components/Worked';
import LineTitle from '../public/Images/Particles/LineDark.svg'

export default function Home({ projects }) {
	const [mappedProjects, setMappedProjects] = useState([]);
	const [slideCuantity, setslideCuantity] = useState(1);
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

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
		/*
		const handleViewSlider = () => {
			if (window.matchMedia('(min-width: 768px)').matches) {
				setslideCuantity(2);
			}
			if (window.matchMedia('(min-width: 1024px)').matches) {
				setslideCuantity(2);
			} else {
				setslideCuantity(1);
			}
		};

		
		const mql = window.matchMedia('(min-width: 1024px)');
		handleViewSlider();
		
		mql.addEventListener('change', () => {
			handleViewSlider();
		}); */
	}, [projects]);

	return (
		<>
			<Head>
				<title>
					{"Josbyte"}
				</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<main className={(styles.main, `${darkMode ? 'theme-dark' : 'theme-light'}`)}>
				<Hero />
				<AboutCard />

				<Technologys />
				<Services />
				<Worked />
				<section className={styles.projects}>
					<div className='container-projects'>
						<div className={styles.titleContainer}>
							<h2> Projects that i build </h2>
							<Image src={LineTitle} />
						</div>
						<div className={styles.contentProjects}>
							<div className={styles.contentFlecha}>
								<Image src={flechaPNG} alt='' width={50} height={50} />
							</div>
							<Fade bottom big cascade>
								<div className={styles.cardContainer}>
									{mappedProjects.map((p, index) => (
										<div key={index} className={styles.cardProject}>
											<div className={styles.imageCardContainer}>
												<img src={p.imageP} alt={p.title} />
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
							</Fade>
						</div>
						<div className='container'>
							<Link href='/projects'>
								<a className='btn btn-sutil'> See more </a>
							</Link>
						</div>
					</div>
				</section>
				<section className='Posts'>
					<div className="container">
						<div className={styles.titleContainer}>
							<h2> Latest Posts </h2>
							<Image src={LineTitle} />
						</div>
					</div>
				</section>
				<Footer />
			</main>
		</>
	);
}

export const getServerSideProps = async (pageContext) => {
	const query = encodeURIComponent('*[ _type == "project"][0..2]');
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

import Head from 'next/head';
import Image from "next/legacy/image";
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
import SutilButton from '../components/buttons/SutilButton';
import PrimaryButton from '../components/buttons/PrimaryButton';
import ProjectsButton from '../components/buttons/ProjectsButton';
import ProjectCard from '../components/cards/ProjectCard';

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
				<div className={styles.secondSectionWithBack}>
					<Services />
					<Worked />
					<section className={styles.projects}>
						<div className='container-projects'>
							<h2> Projects </h2>
							<div className={styles.contentProjects}>
								<Fade bottom cascade>
									<div className={styles.cardContainer}>
										{mappedProjects.map((p, index) => (
											<ProjectCard index={index} title={p.title} imageP={p.imageP} description={p.description} slug={p.slug.current} />
										))}
									</div>
								</Fade>
							</div>
							<div className={styles.buttonContent}>
								<Link href='/projects'>
								
										<SutilButton text={'See more'} />
									
								</Link>
							</div>
						</div>
					</section>
					<section className='Posts'>
						<div className="container">
						</div>
					</section>
				</div>
				<Footer />
			</main>
		</>
	);
}

export const getServerSideProps = async (pageContext) => {
	const query = encodeURIComponent('*[ _type == "project"][0..5]');
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

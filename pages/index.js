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
import svgTriangle from '../public/Images/Particles/Polygon-6.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import flechaPNG from '../public/Images/Particles/FLECHA.png';
import Reveal from 'react-reveal/Reveal';

export default function Home({ projects }) {
	const [mappedProjects, setMappedProjects] = useState([]);
	const [slideCuantity, setslideCuantity] = useState(1);

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
		});
	}, [projects]);
	return (
		<div>
			<main className={styles.main}>
				<Reveal>
					<Hero />
				</Reveal>
				<AboutCard />

				<Technologys />
				<Services />
				<section className={styles.projects}>
					<div className={styles.triangleContainer}>
						<Image src={svgTriangle} alt='' width={700} height={550} />
					</div>
					<div className='container-projects'>
						<h1>Projects </h1>
						<h3>Recents projects: </h3>
						<div className={styles.contentProjects}>
							<div className={styles.contentFlecha}>
								<Image src={flechaPNG} alt='' width={50} height={50} />
							</div>
							<Swiper spaceBetween={75} slidesPerView={slideCuantity}>
								{mappedProjects.map((p, index) => (
									<SwiperSlide key={index} className={styles.cardProject}>
										<div>
											<img src={p.imageP} alt={p.title} />
										</div>
										<div className={styles.toolsContent}>
											<ul>
												{p.tools.map((tool, index) => (
													<li key={index}> {tool} </li>
												))}
											</ul>
										</div>
										<div className={styles.infoContent}>
											<h3>{p.title}</h3>
											<Link href={`project/${p.slug.current}`}>
												<button className='btn btn-sutil'>
													<a> See Project </a>
												</button>
											</Link>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
						<div className='container'>
							<Link href='/projects'>
								<a className='btn btn-sutil btn-out'> See more </a>
							</Link>
						</div>
					</div>
				</section>
				<FormContact />
				<Footer />
			</main>
		</div>
	);
}

export const getServerSideProps = async (pageContext) => {
	const query = encodeURIComponent('*[ _type == "project"][0..3]');
	const url = `https://${process.env.PROJECT_API_KEY}.api.sanity.io/v1/data/query/production?query=${query}`;
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

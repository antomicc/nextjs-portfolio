import Head from 'next/head';
import sanityClient from '@sanity/client';
import { useNextSanityImage } from 'next-sanity-image';
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

	/*const configuredSanityClient = sanityClient({
		projectId: 'mw14nmly',
		dataset: 'production',
		useCdn: true,
	});

	const imageProps = useNextSanityImage(configuredSanityClient, projects.image);*/

	return (
		<div>
			<main className={styles.main}>
				<Hero />
				<AboutCard />
				<Technologys />
				<Services />
				<section className={styles.projects}>
					<div className={styles.triangleContainer}>
						<Image src={svgTriangle} alt='' width={700} height={550} />
					</div>
					<div className='contaiiner'>
						<h1>Projects </h1>
						<h3>Recents projects: </h3>
						<div className={styles.contentProjects}>
							<div className={styles.contentFlecha}>
								<Image src={flechaPNG} alt='' width={50} height={50} />
							</div>
							<Swiper spaceBetween={25} slidesPerView={slideCuantity}>
								{mappedProjects.map((p, index) => (
									<SwiperSlide key={index} className={styles.cardProject}>
										<div>
											<img src={p.imageP} alt={p.title} />
										</div>
										<div className={styles.infoContent}>
											<h3>{p.title}</h3>
											<button className='btn btn-sutil'>
												<Link href={`project/${p.slug.current}`}>
													<a> See Project </a>
												</Link>
											</button>
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
	const query = encodeURIComponent('*[ _type == "project"][0..2]');
	const url = `https://${process.env.PROJECT_API_KEY}.api.sanity.io/v1/data/query/production?query=${query}`;
	const result = await fetch(url).then((res) => res.json());

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

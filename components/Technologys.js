import style from '../styles/tech.module.scss';
import Image from 'next/dist/client/image';
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';
import React, { useState, useEffect } from 'react';
import { Slide } from 'react-reveal';



const Technologys = () => {

	const [openD, setOpenD] = useState(false);
	const [openDS, setOpenDS] = useState(false);
	const [openB, setOpenB] = useState(false);
	//const [logoRes, setLogoRes] = useState(false);
	const handleToggleDev = () => {
		setOpenD(!openD);
	};
	const handleToggleDes = () => {
		setOpenDS(!openDS);
	};
	const handleToggleBack = () => {
		setOpenB(!openB);
	};

	const technologys = [
		{
			"title": "Frontend development",
			"cssClass": style.toggleDevelopment,
			"toggler": openD,
			"handler": handleToggleDev,
			"tools": [
				{
					"name": "HTML5",
					"icon": "ri-html5-fill"
				},
				{
					"name": "CSS",
					"icon": "ri-css3-fill"
				},
				{
					"name": "JavaScript",
					"icon": "ri-file-code-fill",
				},
				{
					"name": "Git",
					"icon": "ri-git-merge-line"
				},
				{
					"name": "Sass",
					"icon": "ri-brush-2-fill"
				},
				{
					"name": "Webpack",
					"icon": "ri-stack-line"
				},
				{
					"name": "ReactJS",
					"icon": "ri-reactjs-fill"
				},
				{
					"name": "NextJS",
					"icon": "ri-compass-line"
				}
			]

		},
		{
			"title": "Design",
			"cssClass": style.toggleDesign,
			"toggler": openDS,
			"handler": handleToggleDes,
			"tools": [
				{
					"name": "Figma",
					"icon": "ri-layout-2-fill"
				},
				{
					"name": "Illustrator",
					"icon": "ri-shape-line"
				},
				{
					"name": "Photoshop",
					"icon": "ri-pantone-line",
				},
				{
					"name": "Adobe XD",
					"icon": "ri-mark-pen-fill"
				},
			]
		},
		{
			"title": "Backend / CMS",
			"cssClass": style.toggleBackend,
			"toggler": openB,
			"handler": handleToggleBack,
			"tools": [
				{
					"name": "WordPress",
					"icon": "ri-list-check-2"
				},
				{
					"name": "Php",
					"icon": "ri-money-dollar-circle-line"
				},
				{
					"name": "Firebase",
					"icon": "ri-fire-fill",
				},
				{
					"name": "NPM",
					"icon": "ri-npmjs-line"
				},
				{
					"name": "Terminal / Bash",
					"icon": "ri-terminal-box-fill"
				},
				{
					"name": "mySQL",
					"icon": "ri-archive-drawer-fill"
				}
			]
		}
	]

	return (
		<section className={style.techSection}>
			<article className='container'>
				<Reveal bottom>
					<div className={style.tecsContainer}>
						<div className={style.imageTecs}>
							<div className={style.imageContainerTechRobot}>
								<Image alt='' src='https://i.imgur.com/nrFCgQS.png' width={500} height={400} />
							</div>
						</div>
						<Slide bottom cascade>
							<div className={style.togglersContainer}>
								{
									technologys.map((tecs, index) => (
										<div key={index} className={tecs.cssClass}>
											<div className={style.toggleHeader}>
												<div className={style.toggleHedContainer}>
													<h4>{tecs.title}</h4>
													<button onClick={tecs.handler} className={`btn btn-toggle ${tecs.toggler ? 'is-active' : ''}`}> <i className={tecs.toggler ? 'ri-subtract-line' : "ri-add-line"}></i> </button>
												</div>
											</div>
											<div className={`${style.toggleContent} ${tecs.toggler ? style.openedToggle : ''}`}>
												{
													tecs.tools.map((tool, index) => (
														<div key={index} className={style.toggleItem}>
															<i className={tool.icon}></i>
															<h4>{tool.name}</h4>
														</div>
													))
												}
											</div>
										</div>
									))
								}
							</div>
						</Slide>
					</div>
				</Reveal>
			</article>
		</section>
	);
};

export default Technologys;

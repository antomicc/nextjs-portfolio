import style from '../styles/tech.module.scss';
import Image from 'next/dist/client/image';
import Reveal from 'react-reveal/Reveal';
import { Zoom } from 'react-reveal';
import React, { useState, useEffect } from 'react';
import Wave from 'react-wavify';
import { AiFillCode } from 'react-icons/ai';
import { BsVectorPen } from 'react-icons/bs';
import { MdDesignServices } from 'react-icons/md';
import { HiUsers } from 'react-icons/hi';



const Technologys = () => {
	const skills = [
		{
			title: 'Coding',
			icon: AiFillCode,
			description: 'Coding is the most important skill, I develop trying to keep the best and most efficient practices.'
		},
		{
			title: 'Design',
			icon: BsVectorPen,
			description: 'As a frontend developer after this time I have trained my eye as a designer, knowing how to use white space, color theory, etc.'
		},
		{
			title: 'Empathy',
			icon: HiUsers,
			description: 'Empathy is a difficult skill to train, I strive to empathize with the user and with any situation outside my environment to understand any need and response from people.'
		},
		{
			title: 'UX design',
			icon: MdDesignServices,
			description: "Designing user experiences by knowing how to empathize with the user becomes easier, I'm still constantly learning, but building interfaces and user routes excites me a lot."
		},
	]

	return (
		<section className={style.techSection}>
			<article className='container'>
				<Reveal bottom>
					<div className={style.tecsContainer}>
						<div className={style.imageTecs}>
							<div className={style.imageContainerTechRobot}>
								<Image alt='' src='https://i.imgur.com/nrFCgQS.png' width={900} height={700} />
							</div>
							<Zoom cascade>
								<div className={style.imageSector}>
								</div>
							</Zoom>
						</div>
						<div className={style.skills}>
							<h2>Skills</h2>
							<div className={style.skillscontainer}>
								{
									skills.map((skill, index) => (
										<div key={index} className={style.skillContent}>
											<span>
												<skill.icon size={'4rem'} color={'#F7F4F4'} />
											</span>
											<h3> {skill.title} </h3>
											<p> {skill.description} </p>
										</div>
									))
								}
							</div>
						</div>
					</div>
				</Reveal>
			</article>
			<Wave fill='#F7F4F4'
				paused={false}
				style={{ zIndex: '10', borderBottom: 'none', transform: 'translateY(5px)', paddingTop: '10px' }}
				options={{
					height: 22,
					amplitude: 65,
					speed: 0.15,
					points: 3
				}} />
		</section>
	);
};

export default Technologys;

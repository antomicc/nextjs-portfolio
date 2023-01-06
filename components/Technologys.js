import style from '../styles/tech.module.scss';
import Image from 'next/dist/client/image';
import Reveal from 'react-reveal/Reveal';
import { Zoom } from 'react-reveal';
import React, { useState, useEffect } from 'react';
import Wave from 'react-wavify';



const Technologys = () => {


	return (
		<section className={style.techSection}>
			<article className='container'>
				<Reveal bottom>
					<div className={style.tecsContainer}>
						<div className={style.imageTecs}>
							<div className={style.imageContainerTechRobot}>
								<Image alt='' src='https://i.imgur.com/nrFCgQS.png' width={500} height={400} />
							</div>
							<Zoom cascade>
								<div className={style.imageSector}>
								</div>
							</Zoom>
						</div>

					</div>
				</Reveal>
			</article>
			<Wave fill='#FFF'
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

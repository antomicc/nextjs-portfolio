import style from '../styles/worked.module.scss';
import LineTitle from '../public/Images/Particles/Line.svg'
import Image from "next/legacy/image";
import React, { useState, useEffect } from 'react';


const Worked = () => {

    const [open, setOpen] = useState(false);
    const handleToggleWork = () => {
        setOpen(!open);
    };

    const WorkPlace = [
        {
            'Position': 'Web Developer',
            'Place': 'Up Media',
            'Date': '2021 - Present',
            'Description': 'At UpMedia I currently work as a Web Developer developing landing pages, e-commerce for different clients, I have also worked on corporate email layout, CSS layout, WordPress development subject to Custom Themes.'
        }
    ]

    return (
        <section className={style.sectionWorks}>
            <article className='container'>
                <h2> Laboral Experience </h2>
                <div className={style.workedSection}>
                    <div className={style.worksContainer}>
                        {WorkPlace && WorkPlace.map((work, index) => {
                            return (
                                <div key={index} className={style.toggleWorkPlaces}>
                                    <div className={style.toggleHeader}>
                                        <div className={style.toggleHedContainer}>
                                            <div>
                                                <h3> {work.Position} </h3>
                                                <sub>{work.Place}</sub>
                                            </div>
                                            <button onClick={handleToggleWork} className={`btn btn-toggle ${open ? 'is-active' : ''}`}> <i className={open ? 'ri-subtract-line' : "ri-add-line"}></i> </button>
                                        </div>
                                    </div>
                                    <div className={`${style.toggleContent} ${open ? style.openedToggle : ''}`}>
                                        <div className={style.toggleItem}>
                                            <h4>{work.Date}</h4>
                                            <p>{work.Description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <div className={style.workImageContainer}>
                        <div className={style.imagePerson}>
                            <Image width={500} height={400} src={'https://i.imgur.com/OHzZxV7.png'} />
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Worked
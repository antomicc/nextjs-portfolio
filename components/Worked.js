import style from '../styles/worked.module.scss';
import LineTitle from '../public/Images/Particles/Line.svg'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';


const Worked = () => {

    const [open, setOpen] = useState(false);
    const handleToggleWork = () => {
        setOpen(!open);
    };

    const WorkPlace = [
        {
            'position': 'Web Developer',
            'Place': 'Up Media',
            'Date': '2021 - Present',
            'Description': 'Lorem Ipsum'
        }
    ]

    return (
        <>
            <article className='container'>
                <title className={style.titleContainer}>
                    <h2> Where I’ve Worked </h2>
                    <Image src={LineTitle} />
                </title>
                <div>
                    {WorkPlace && WorkPlace.map((work, index) => {
                        return (
                            <div key={index} className={style.toggleWorkPlaces}>
                                <div className={style.toggleHeader}>
                                    <div>
                                        <h3> {work.position} </h3>
                                        <sub>{work.Place}</sub>
                                    </div>
                                    <button onClick={handleToggleWork} className={`btn-toggle ${open ? 'is-active' : ''}`}> Y </button>
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
            </article>
        </>
    )
}

export default Worked
import React from 'react'
import style from '../../styles/projectCard.module.scss'
import Link from 'next/link'
import ProjectsButton from '../buttons/ProjectsButton'

const ProjectCard = ({ imageP, title, description, slug, index }) => {
    return (
        <div key={index} className={style.cardProject} style={{ backgroundImage: `url(${imageP})` }} >
            <div className={style.infoContent}>
                <div className={style.containerInfo}>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <Link href={`project/${slug}`}>
                        <a>
                            <ProjectsButton text={'See Project'} color={'#fff'} backG={'#333366'} />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
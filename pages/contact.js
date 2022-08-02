import React from 'react'
import FormContact from '../components/FormContact'
import style from '../styles/contactPage.module.scss'
import Image from 'next/image'
import LinePhrase from '../public/Images/Particles/line_contact.svg'
import faceSmile from '../public/Images/Particles/FaceHappy.svg'

const contact = () => {
    return (
        <main className={style.mainContact}>
            <div className="container">
                <div className={style.contactContent}>
                    <div className={style.contactParraf}>
                        <div className={style.textContent}>
                            <h2>Do you have any project on mind?</h2>
                            <div className={style.svgLineContainer}>
                                <Image src={LinePhrase}></Image>
                            </div>
                            <p>Contact me to talk and start working together.</p>
                            <div className={style.faceContainer}>
                                <Image src={faceSmile}></Image>
                            </div>
                        </div>
                    </div>
                    <FormContact></FormContact>
                </div>
            </div>
        </main>
    )
}

export default contact
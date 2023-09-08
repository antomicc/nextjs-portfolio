import React from 'react'
import FormContact from '../components/FormContact'
import style from '../styles/contactPage.module.scss'
import Image from "next/legacy/image"
import LinePhrase from '../public/Images/Particles/line_contact.svg'
import FaceSmile from '../public/Images/Particles/FaceHappy.svg'
import Footer from '../components/Footer'
import Head from 'next/head'

const contact = () => {
    return (
        <>
            <Head>
                <title> Contact | Josbyte </title>
            </Head>
            <main className={style.mainContact}>
                <div className="container">
                    <div className={style.contactContent}>
                        <div className={style.contactParraf}>
                            <div className={style.textContent}>
                                <h2>Do you have any project on mind?</h2>
                                <div className={style.svgLineContainer}>
                                    <LinePhrase />
                                </div>
                                <p>Contact me to talk and start working together.</p>
                                <div className={style.faceContainer}>
                                    <FaceSmile />
                                </div>
                            </div>
                        </div>
                        <div className={style.formContainer}>
                            <FormContact></FormContact>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default contact
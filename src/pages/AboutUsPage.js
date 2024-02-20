import React from "react";
import "../styles/styles.css"
import MainContainer from "../components/MainContainer/MainContainer";
import Button from "../components/Button/Button";
import giri from "../img/landing-image2.jpeg"

const AboutUsPage  = () => {

    const info = [
        {
          title: '2. About us',
          text: 'Amancay is a collective of Argentine artists and producers associated with electronic music. It was born in 2021 from a shared vision, a way of perceiving electronic music and music production in general. The space is comprised of Agustin Giri, Emiliano Demarco, Nicolas Parrado, This & That, Xolef, Marvio, Tiello, LKNV, Last Men On Earth, CCINNI, Djolee, and Francisco García. Amancay functions as a record label. Its goal is to release one album per year, featuring a song from each of the artists. In February 2024, we launched FICCIONES III, our latest compilation. ',
          text2: "We offer classes in music production and DJing. Additionally, we organize showcases worldwide. We invite you to reach out to us; we love receiving new proposals and getting to know other artists!",
          image: giri,
        },
    ]

    return (
        <section className="basic-styles">
            <MainContainer title={info[0].title} text={info[0].text} text2={info[0].text2} image={giri}/>
            <Button text="Press" link="/press"/> 
        </section>
    )
}

export default AboutUsPage;
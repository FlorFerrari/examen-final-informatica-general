import React from "react";
import "../styles/styles.css"
import MainContainer from "../components/MainContainer/MainContainer";
import Button from "../components/Button/Button";
import giri from "../img/landingPage/landing-image2.jpeg"

import "./../styles/styles.css"

const AboutUsPage  = () => {

    const info = [
        {
          title: 'Sobre Nosotros',
          text: 'Mientras el panorama de la música electrónica en Argentina no deja de crecer, emerge cada vez con más fuerza el colectivo Amancay, una amalgama de talentos locales que desafía las convenciones y redefine los límites del sonido.',
          text2: 'Amancay es un colectivo de artistas y productores argentinos vinculados a la música electrónica. Nació en 2021 a partir de una visión en común, de una forma de percibir la música electrónica y la producción musical en general. El espacio está compuesto por Agustin Giri, Golden Hour, Tiello, Last Men On Earth, Djolee, y Francisco García.',
          image: giri,
        },
        {
            title: null,
            text: 'Funcionamos como “sello discográfico”. Nuestro objetivo es editar un disco por año en el que se incluya una canción de cada uno de los artistas. En febrero de este año salió nuestro ultimo compilado, “Ficciones III”. La semilla de Amancay germinó ante la percepción de un vacío en la escena local, una necesidad de representación de un sonido que trascendía fronteras y géneros establecidos. Surgió así, como respuesta a una búsqueda de identidad, un lugar propio en el vasto universo de la música electrónica. ',
            text2: 'Con la vista puesta en el futuro, Amancay se propone consolidar su presencia a través de showcases y eventos en diversas ciudades del mundo. Así, nuestro objetivo es llevar su sonido único a nuevos lugares, fortaleciendo así nuestro legado en la música electrónica nacional y contemporánea.',
            image: null,
          },
    ]

    return (
        <section className="basic-styles">
            <MainContainer title={info[0].title} text={info[0].text} text2={info[0].text2} image={giri}/>
            <MainContainer text={info[1].text} text2={info[1].text2}/>

            <div className="container-description-button">
                <p>Querés sabes más sobre nosotros? Enterate las últimas novedades de Amancay acá</p>
                <Button text="Prensa" link="/press"/> 
            </div>
            
        </section>
    )
}

export default AboutUsPage;
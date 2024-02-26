import React from "react";
import "../styles/styles.css"
import MainContainer from "../components/MainContainer/MainContainer";
import Button from "../components/Button/Button";
import giri from "../img/landing-image2.jpeg"

import "./../styles/styles.css"

const AboutUsPage  = () => {

    const info = [
        {
          title: '2. Sobre Nosotros',
          text: 'Amancay es un colectivo de artistas y productores argentinos vinculados a la música electrónica. Nació en 2021 a partir de una visión en común, de una forma de percibir la música electrónica y la producción musical en general. El espacio está compuesto por Agustin Giri, Emiliano Demarco, Nicolas Parrado, This & That, Xolef, Marvio, Tiello, LKNV, Last Men On Earth, CCINNI, Djolee, y Francisco García. ',
          text2: "Amancay funciona como “sello discográfico”. Su objetivo es editar un disco por año en el que se incluya una canción de cada uno de los artistas. En 2023 estaremos editando el volumen tres.",
          image: giri,
        },
    ]

    return (
        <section className="basic-styles">
            <MainContainer title={info[0].title} text={info[0].text} text2={info[0].text2} image={giri}/>
            <MainContainer text={info[0].text} text2={info[0].text2}/>
            <div className="container-description-button">
            <p>Querés sabes más sobre nosotros? Enterate las últimas novedades de Amancay acá</p>
            <Button text="Prensa" link="/press"/> 
             </div>
            
        </section>
    )
}

export default AboutUsPage;
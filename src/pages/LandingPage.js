import React from "react";
import { Parallax } from 'react-scroll-parallax';
//Components
import MainContainer from "../components/MainContainer/MainContainer";
import Marquee from "react-fast-marquee";
//Styles
import "../styles/LandingPageStyles.css";
import "../styles/styles.css"
//Images
import giri from "../img/landingPage/landing-image1.jpeg"
import ficciones from "../img/landingPage/cuadrado.gif"
import djgif from "../img/landingPage/consola-gif.gif"
import nubesgif from "../img/landingPage/nubes-gif.gif"
import buenosaires from "../img/landingPage/buenosaires.gif"
import logo from "../img/logos/logo_amancay_blanco.png"


const LandingPage  = () => {
   
    const info = [
        {
          title: '1. Somos Amancay, un colectivo de artistas',
          text: 'Bienvenidos a un viaje sonoro que trasciende fronteras. Provenientes de Argentina, extendemos nuestras raíces musicales a cada rincón del planeta. Somos más que artistas, productores y DJs; somos narradores de emociones, arquitectos de melodías que te invitan a descubrir nuestro vibrante universo. Únete a nosotros mientras te invitamos a explorar y conocer nuestro mundo.',
          text2: 'Amancay es un colectivo de artistas y productores argentinos vinculados a la música electrónica. Nació en 2021 a partir de una visión en común, de una forma de percibir la música electrónica y la producción musical en general. El espacio está compuesto por Agustin Giri, Emiliano Demarco, Nicolas Parrado, This & That, Xolef, Marvio, Tiello, LKNV, Last Men On Earth, CCINNI, Djolee, y Francisco García. Amancay funciona como “sello discográfico”. Su objetivo es editar un disco por año en el que se incluya una canción de cada uno de los artistas. En 2023 estaremos editando el volumen tres.',
          image: null,
        },
    ]

    return (
        <div className="landing-page">
            
         
            
           <Parallax translateY={['-700px', '700px']} className="logo">
           <img src={logo} className="logo" alt="Amancay logo" />
            </Parallax>
            
            

            <Marquee autoFill="true"  className="marquee">
                <p className="marquee-child">Musica</p>
                <p className="marquee-child">Amancay</p>
                <p className="marquee-child">Sound Collective</p>
                <p className="marquee-child">Clases</p>
                <p className="marquee-child">Production</p> 
            </Marquee>
            
            <MainContainer image={giri}/>

            <Parallax rotate={[0, 450]} className="ficciones" >
            <img src={ficciones} alt="Descripción del GIF" className="gif"/> 
            </Parallax>
            
            <Parallax translateY={['-100px', '100px']}>
            <MainContainer title={info[0].title} text={info[0].text} text2={info[0].text2}/>
            </Parallax>

            <Parallax  >
            <div className="tres-cuadrados">
                <img src={buenosaires} alt="GIF de Buenos Aires, Argentina" className="cuadrado"/>
                <img src={buenosaires} alt="GIF de Buenos Aires, Argentina" className="cuadrado"/>
                <img src={buenosaires} alt="GIF de Buenos Aires, Argentina" className="cuadrado"/>
            </div>
            </Parallax>
            
        </div>
    )
}

export default LandingPage;
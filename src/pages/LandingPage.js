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

import buenosaires from "../img/landingPage/buenosaires.gif"
import logo from "../img/logos/logo_amancay_blanco.png"


const LandingPage  = () => {
   
    const info = [
        {
          title: '1. Somos Amancay, un colectivo de artistas',
          text: 'Bienvenidos a un viaje sonoro que trasciende fronteras. Provenientes de Argentina, extendemos nuestras raíces musicales a cada rincón del planeta. Somos Artistas, productores y DJs. Te invitamos a explorar y conocer nuestro mundo.',
          text2: 'Amancay se propone consolidar su presencia a través de showcases y eventos en diversas ciudades del mundo. Funcionamos como sello discográfico, y tenemos como objetivo llevar nuestro sonido a nuevos lugares, fortaleciendo así nuestro legado en la música electrónica nacional y contemporánea.',
          image: null,
        },
    ]

    return (
        <div className="landing-page">
            
           <img src={logo} className="logo" alt="Amancay logo" />
           
            <Marquee autoFill="true"  className="marquee">
                <p className="marquee-child">Amancay</p>
                <p className="marquee-child">Sound Collective</p>
            </Marquee>
            
            <MainContainer image={giri}/>

           {/*  <Parallax rotate={[0, 450]} className="ficciones" >
            <img src={ficciones} alt="Descripción del GIF" className="gif"/> 
            </Parallax> */}
            
            <Parallax translateY={['-150px', '100px']}>
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
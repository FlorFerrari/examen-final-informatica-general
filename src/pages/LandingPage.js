import React from "react";
import MainContainer from "../components/MainContainer/MainContainer";
import Marquee from "react-fast-marquee";

import "../styles/LandingPageStyles.css";
import "../styles/styles.css"

import giri from "../img/landingPage/landing-image1.jpeg"
import ficciones from "../img/landingPage/cuadrado.gif"
import djgif from "../img/landingPage/consola-gif.gif"
import nubesgif from "../img/landingPage/nubes-gif.gif"
import buenosaires from "../img/landingPage/buenosaires.gif"


import logo from "../img/logos/logo_amancay_flor.png"
import VideoBackground from "../components/VideoBackground/videoBackground";

const LandingPage  = () => {
   

    const info = [
        {
          title: '1. We are Amancay, a collective of artists',
          text: 'Welcome to a sonic journey that transcends borders. Hailing from argentina, we extend our musical roots to every corner of the planet. we are more than artists, producers, and djs; we are narrators of emotions, architects of melodies that invite you to discover our vibrant universe. join us as we invite you to explore and get to know our world.',
          image: null,
        },
    ]
    return (
        <div className="landing-page">
            
            <VideoBackground />
            <img src={logo} alt="Descripción del GIF" className="logo"/>
            

            <Marquee autoFill="true"  className="marquee">
                <p className="marquee-child">Musica</p>
                <p className="marquee-child">Amancay</p>
                <p className="marquee-child">Sound Collective</p>
                <p className="marquee-child">Clases</p>
                <p className="marquee-child">Production</p>
                
            </Marquee>
            
            <MainContainer image={giri}/>

            <img src={ficciones} alt="Descripción del GIF" className="ficciones gif"/>
            

            <img src={djgif} alt="Descripción del GIF" className="dj gif"/>
            <img src={nubesgif} alt="Descripción del GIF" className="nubes gif"/>

           
            <MainContainer title={info[0].title} text={info[0].text}/>
            
            <div className="tres-circulos">
            <img src={buenosaires} alt="Descripción del GIF" className="circulo"/>
            <img src={buenosaires} alt="Descripción del GIF" className="circulo"/>
            <img src={buenosaires} alt="Descripción del GIF" className="circulo"/>
            </div>
            
   
        </div>
        
    )
}

export default LandingPage;
import React from "react";

import MainContainer from "../components/MainContainer/MainContainer";
import Marquee from "react-fast-marquee";
import ficciones3 from "../img/landingPage/cuadrado.gif"
import DiscographyCards from "../components/discography/DiscographyCards"

const DiscographyPage  = () => {

    const info = [
        {
          title: '4. DISCOGRAPHY',
          text: 'Bienvenido a un viaje sonoro que trasciende fronteras. Desde Argentina, extendemos nuestras raíces musicales a cada rincón del planeta. Somos más que artistas, productores y DJs; somos narradores de emociones, arquitectos de melodías que te invitan a descubrir nuestro vibrante universo.',
          image: null,
        },     
    ]

    const discography = [
        {
            
        title: 'FICCIONES III',
        description: 'Nuestro último lanzamiento, compuesto de 14 temas. Inspirados en la frenética ciudad de Buenos Aires. Podés comprarlo en beatport.',
        image: ficciones3,
        songs: ["hola - abuk", "chau - agus", "loro", "chau"],
        link: 'www.google.com'
        
                
              
        },
    ]

    return (
        <>
        <section className="basic-styles">
            <MainContainer title={info[0].title} text={info[0].text}/>
        </section>
        
        <Marquee autoFill="true"  className="marquee">
                <p className="marquee-child">FICCIONES III</p>
                <p className="marquee-child">OUT NOW</p>
        </Marquee>

        <DiscographyCards title={discography[0].title} description={discography[0].description} songs={discography[0].songs} image={discography[0].image}/>


        </>
    )
}

export default DiscographyPage;
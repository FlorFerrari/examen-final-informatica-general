import React from "react";
import "../styles/styles.css"
import MainContainer from "../components/MainContainer/MainContainer";
import Marquee from "react-fast-marquee";
import ficciones3 from "../img/landingPage/cuadrado.gif"

const DiscographyPage  = () => {

    const info = [
        {
          title: '4. DISCOGRAPHY',
          text: 'Bienvenido a un viaje sonoro que trasciende fronteras. Desde Argentina, extendemos nuestras raíces musicales a cada rincón del planeta. Somos más que artistas, productores y DJs; somos narradores de emociones, arquitectos de melodías que te invitan a descubrir nuestro vibrante universo.',
          image: null,
        },
        {
            title: '→ FICCIONES III',
            text: 'Nuestro último lanzamiento, compuesto de 14 temas. Inspirados en la frenética ciudad de Buenos Aires. Podés comprarlo en beatport.',
            image: ficciones3,
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

        <div className="discography-container">
            <div className="discography-titles">
            <h2>→ FICCIONES III</h2>
                <div className="discography-info">
                
                <p>Nuestro Ultimo lanzamiento</p>
                <ol>
                    <li>1. It's all good</li>
                    <li>2. It's all good</li>
                    <li>3. It's all good</li>
                    <li>4. It's all good</li>
                    <li>5. It's all good</li>
                    <li>5. It's all good</li>
                    <li>5. It's all good</li>
                    <li>5. It's all good</li>
                    <li>5. It's all good</li>
                    <li>5. It's all good</li>
                    <li>5. It's all good</li>
                   
                </ol>

                <a href="https://www.beatport.com/es/track/nadie/18499007" target="_blank">Escuchalo ahora</a>
                </div>
            </div>
            <div className="discography-image">
                <img src={ficciones3}></img>
            </div>
        </div>

            </>
    )
}

export default DiscographyPage;
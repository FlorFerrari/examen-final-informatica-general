import React from "react";

import MainContainer from "../components/MainContainer/MainContainer";
import Marquee from "react-fast-marquee";

import DiscographyCards from "../components/discography/DiscographyCards"

import ficciones3 from "../img/discography/tapa-ficcionesIII.jpg"
import ficciones2 from "../img/discography/ficciones2.jpg"
import ficciones1 from "../img/discography/ficcionesI.jpg"
const DiscographyPage  = () => {

    const info = [
        {
          title: '4. DISCOGRAPHY',
          text: 'Desde 2022, una vez por año sale un nuevo compilado de Amancay. Ficciones III es el último lanzamiento, inspirado en la frenética ciudad de Buenos Aires. Te invitamos a escucharlos y a ser parte de esta revolución sonora Argentina.',
          image: null,
        },     
    ]

    const discography = [
        { 
        title: 'Ficciones, Vol. 3',
        description: 'Nuestro último lanzamiento, compuesto de 14 temas. Inspirados en la frenética ciudad de Buenos Aires. Podés comprarlo en beatport.',
        image: ficciones3,
        songs: ["Enero - Francisco Garcia", "It's All Good - Agustin Giri", "Don't Say - Abuk", "Camouflage - LKNV", "Jigsa - Tiello", "Komodo - RADON", "Wolfgang Express - CCINNI", "Diamond - Emiliano Demarco", "Derretido - Marvio", "Something (I Don't Know) - This & That", "Sliding Sol - Xolef", "Sin Sombra - Djolee", "Far - Golden Hour", "Call Me Back -Last Men On Earth"],
        link: 'https://www.beatport.com/es/release/ficciones-vol-3/4400368'    
        },
        {
            
        title: 'Ficciones, Vol. 2',
        description: 'Amancay regresa con un bis de su compilación anual Ficciones II, una amplia selección de música electrónica contemporánea. Esta variedad vanguardista de música que desafía géneros reafirma la existencia de una nueva generación de creadores de música electrónica argentinos.',
        image: ficciones2,
        songs: ["Enero - Francisco Garcia", "It's All Good - Agustin Giri", "Don't Say - Abuk", "Camouflage - LKNV", "Jigsa - Tiello", "Komodo - RADON", "Wolfgang Express - CCINNI", "Diamond - Emiliano Demarco", "Derretido - Marvio", "Something (I Don't Know) - This & That", "Sliding Sol - Xolef", "Sin Sombra - Djolee", "Far - Golden Hour", "Call Me Back -Last Men On Earth"],
        link: 'https://www.beatport.com/es/release/ficciones-vol-2/3968259'        
        },
        {
            title: 'Ficciones, Vol. 1',
            description: 'Ficciones I es la primera edición de una serie de compilaciones que presenta los sonidos del colectivo recién nacido con sede en Buenos Aires, Amancay. A través de este medio, Amancay exhibirá la próxima generación de productores argentinos.',
            image: ficciones1,
            songs: ["Enero - Francisco Garcia", "It's All Good - Agustin Giri", "Don't Say - Abuk", "Camouflage - LKNV", "Jigsa - Tiello", "Komodo - RADON", "Wolfgang Express - CCINNI", "Diamond - Emiliano Demarco", "Derretido - Marvio", "Something (I Don't Know) - This & That", "Sliding Sol - Xolef", "Sin Sombra - Djolee", "Far - Golden Hour", "Call Me Back -Last Men On Earth"],
            link: 'https://www.beatport.com/es/release/ficciones-vol-1/3608807'
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

        <DiscographyCards title={discography[0].title} description={discography[0].description} songs={discography[0].songs} image={discography[0].image} link={discography[0].link}/>
        <DiscographyCards title={discography[1].title} description={discography[1].description} songs={discography[1].songs} image={discography[1].image} link={discography[1].link}/>
        <DiscographyCards title={discography[2].title} description={discography[2].description} songs={discography[2].songs} image={discography[2].image} link={discography[2].link}/>


        </>
    )
}

export default DiscographyPage;
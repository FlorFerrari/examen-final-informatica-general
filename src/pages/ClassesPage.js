import React from "react";
import "../styles/styles.css"
import ClassesCard from "../components/classes/ClassesCard";
import MainContainer from "../components/MainContainer/MainContainer";

import agus from "../img/ourCrew/agustin-entrevista.jpg"
import golden from "../img/ourCrew/golden.jpg"
import tiello from "../img/ourCrew/tiello.jpg"
import lastmen from "../img/ourCrew/lastmen.jpg"


const ClassesPage  = () => {

    const classes = [
        {
          title: 'Agustin Giri',
          image: agus,
          color:'#000000',
          description: 'Producción Musical Digital',
          info: 'Introducción a software de producción musical / Técnicas de mezcla y masterización / Uso de instrumentos virtuales y sintetizadores.',
          email: 'agustingiri@gmail.com'
          
        },
        {
            title: 'Golden Hour',
            image: golden,
            color:'#000000',
            description: 'DJing y Performance en Vivo',
            info: 'Desarrollo de una identidad sonora única / Uso efectivo de controladores MIDI y software especializado / Uso de ecualización para crear transiciones armoniosas.',
            email: 'goldenhour@gmail.com'

          },
          {
            title: 'Tiello',
            image: tiello,
            color:'#000000',
            description: 'Composición Electrónica',
            info: 'Diseño de sonido y síntesis para la creación de elementos únicos / Técnicas de mezcla y masterización para lograr un sonido profesional / Uso creativo de acordes y progresiones armónicas. ',
            email: 'Tiello@gmail.com'

          },
          {
            title: 'Last men on Earth',
            image: lastmen,
            color:'#000000',
            description: 'Tecnología e Innovación en la Música Electrónica',
            info: 'Exploración de software y hardware innovador para la creación musical / Integración de controladores MIDI avanzados y superficies táctiles / Estrategias efectivas de marketing en plataformas digitales.',
            email: 'lastmen@gmail.com'
          },
    ]

    

    return (
      <>
      <div className="basic-styles">
        <MainContainer title='Toma clases con nosotros' text='Desde producción musical hasta Vjing y performance en vivo. Ofrecemos clases para todos los niveles de conocimiento, desde principantes hasta musicos experimentados.' />
        </div> 
          <main className="classes-container">
                  {
                  classes.map((classes) => {
                      return <ClassesCard title={classes.title} image={classes.image} description={classes.description} info={classes.info} email={classes.email}/>
                  })
                  }
          
          </main>
        </>
    )
}

export default ClassesPage;
import React from "react";
import "../styles/styles.css"
import Project from "../components/project";
import MainContainer from "../components/MainContainer/MainContainer";

import agus from "../img/ourCrew/agustin-entrevista.jpg"
import golden from "../img/ourCrew/golden.jpg"
import tiello from "../img/ourCrew/tiello.jpg"
import lastmen from "../img/ourCrew/lastmen.jpg"




const ClassesPage  = () => {

    const projects = [
        {
          title: 'Agustin Giri',
          image: agus,
          color:'#000000',
          description: 'Producción Musical Digital',
          info: 'Introducción a software de producción musical / Técnicas de mezcla y masterización / Uso de instrumentos virtuales y sintetizadores.',
        },
        {
            title: 'Golden Hour',
            image: golden,
            color:'#000000',
            description: 'DJing y Performance en Vivo',
          },
          {
            title: 'Tiello',
            image: tiello,
            color:'#000000',
            description: 'Composición Electrónica',
          },
          {
            title: 'Last men on Earth',
            image: lastmen,
            color:'#000000',
            description: 'Tecnología e Innovación en la Música Electrónica',
          },
    ]

    

    return (
      <>
      <div className="basic-styles">
        <MainContainer title='1. Toma clases con nosotros' text='Desde producción musical hasta Vjing y performance en vivo. Ofrecemos clases para todos los niveles de conocimiento, desde principantes hasta musicos experimentados.' />
        </div> 
          <main className="classes-container">
                  {
                  projects.map((project) => {
                      return <Project title={project.title} image={project.image} description={project.description} info={project.info}/>
                  })
                  }
          
          </main>
        </>
    )
}

export default ClassesPage;
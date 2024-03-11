import React from "react";
import "../styles/styles.css"
import MainContainer from "../components/MainContainer/MainContainer";
import Button from "../components/Button/Button";
import ficciones3 from "../img/press/tapa-ficcionesIII.jpg"
import abuk from "../img/press/abuk-press.jpg"
import peces from "../img/press/peces-Raros-press.jpg"

const AboutUsPage  = () => {

    const press = [
        {
          title: 'Entrevista: El colectivo Amancay habla sobre el lanzamiento de su compilación Ficcionnes III',
          text: '(INGLÉS) Argentinian collective Amancay is an oddity in today’s electronic music landscape. The 14 Argentines which contribute to the project present present a broad yet cohesive sonic range, somewhere between the dreamy harmonies often associated with the country, latin influences in the grooves and hard-hitting drums which light up clubs worldwide. We caught up with the guys a few days before the third instalment of the ‘Ficciones’ V.A, featuring an original creation by each of the collective’s members. WWD: The collective is quite expansive, counting 14 members! Was everyone part of the project from the get-go? Did some join along the journey? Are there other members who work behind the curtain? Big collective indeed. Some of us have known each other for several years because we became friends or shared online forums of electronic music, or gigs from bigger artists that we commonly liked. We started the idea of Amancay after two of the guys jokingly proposed realizing a VA together. At that moment it seemed far-fetched. When we started, we were thirteen artists and after getting to know Nacho, aka Abuk, we gladly added him as our fourteenth teammate.',
          image: ficciones3,
        },
        {
            title: 'Abuk,el talento argentino que conquistó los oídos de Digweed y la escena internacional',
            text: 'Nacido en Buenos Aires, Ignacio se convirtió en una revelación en la escena nacional, fusionando las raíces del house melódico y el techno con una variedad de sonidos y ritmos particulares. Conócelo a fondo a continuación.',
            text2: 'Hace relativamente poco tiempo, tras la última presentación de John Digweed en Alta Gracia, los usuarios fanáticos del Colorete preguntaban por varios tracks que en ese entonces resultaron ser inminentes unreleased. Para sorpresa de todos (o nadie), esas piezas fueron producidas por un argentino. Se trata de los tracks de Abuk, el DJ y productor argentino que resultó ser una verdadera revelación de la escena nacional en el corriente año. Nacido en Buenos Aires, el 2 de julio de 1997, este campeón del mundo fusiona las raíces del house melódico y el techno con una variedad de sonidos y ritmos pisoteados en su máximo esplendor. En este camino musical, caracterizado por un sonido riguroso y armónico, supo generar en la pista de baile esa sensación de viajar al espacio y perder la noción del tiempo. Su música se puede encontrar en sellos como Surrealism Records (ESP), Asthetics (MEX) y Eklektish (ESP). Además, ya obtuvo el buen visto de Brigado Crew, EdOne, Edu Imbernon, Joone, Hollt, Henri Bergmann y el tan idolatrado John Digweed.',
            image: abuk,
          },
          {
            title: 'Peces Raros lanzó “Desconfiguración Vol. 3”: un mano a mano con quienes se sumergieron al remix',
            text: 'En esta entrevista exclusiva con Abuk y Agustín Giri, artistas que participaron de la tanda de remezclas de “Dogma”, revelaron cómo fue el proceso y cuál es la relación que tienen con la banda marplatense.',
            text2: 'Peces Raros lanzó a mediados de agosto el EP “Desconfiguración Vol. 3”. Es bajo este título y sus distintos volúmenes, que la banda marplatense presenta remixes de sus álbumes como lanzamientos intermedios en formato EP. Frente a esta creación, el grupo musical reafirma así su compromiso con su impronta electrónica. “Desconfiguración Vol. 3”, cuenta con la reinterpretación de las canciones del álbum “Dogma”, el último trabajo de estudio de la banda, realizada por cinco destacados productores de techno y el house nacional.',
            image: peces,
          },
    ]

    return (
        <section className="basic-styles">
            <MainContainer title={press[0].title} text={press[0].text} image={press[0].image}/>
            <Button text="Lee la entrevista completa" link="https://whenwedip.com/2024/02/amancayinterview/"/>

             <MainContainer title={press[1].title} text={press[1].text} text2={press[1].text2} image={press[1].image}/>
            <Button text="Lee la entrevista completa" link="https://cordobabeat.com/abuk-el-talento-argentino-que-conquisto-los-oidos-de-digweed-y-la-escena-internacional/"/>

             <MainContainer title={press[2].title} text={press[2].text} text2={press[2].text2} image={press[2].image}/>
            <Button text="Lee la entrevista completa" link="https://cordobabeat.com/peces-raros-lanzo-desconfiguracion-vol-3-un-mano-a-mano-con-quienes-se-sumergieron-al-remix/"/> 
        </section>
    )
}

export default AboutUsPage;
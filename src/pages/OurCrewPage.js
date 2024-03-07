import React from "react";
import Button from "../components/Button/Button";
import MainContainer from "../components/MainContainer/MainContainer";
import Card from "../components/Card/Card";
import agustin from "../img/ourCrew/agustin-entrevista.jpg"
import frangar from "../img/ourCrew/frangar.jpg"
import tiello from "../img/ourCrew/tiello.jpg"
import lastmen from "../img/ourCrew/lastmen.jpg"
import djolee from "../img/ourCrew/djolee.jpg"
import golden from "../img/ourCrew/golden.jpg"


const OurCrewPage  = () => {

    const artists = [
        {
          name: 'Agustin Giri',
          description: 'Conoce a Agustín, un experimentado productor de música electrónica y DJ con más de una década de experiencia. Su dominio de los ritmos de techno ha estado moldeando la escena de la música electrónica, creando una experiencia envolvente para entusiastas de todo el mundo.',
          image: agustin,
          instagram: 'https://www.instagram.com/agustingiri_/',
          spotify: 'https://open.spotify.com/intl-es/artist/7zXtvsjXDrLakTsrs63fM5?si=Mi-OAhiOS8SKN6qMsirR8A'
          
        },
        {
            name: 'Francisco Gracía',
            description: 'Descubre el mundo rítmico de Francisco, un maestro de la música electrónica con una rica historia tanto en la producción como en la mezcla como DJ. Con una mezcla única de influencias de Afrobeat, Francisco aporta una energía vibrante y ecléctica a la pista de baile, cautivando a audiencias durante más de 7 años.',
            image: frangar,
            instagram: 'https://www.instagram.com/franciscogarcia.wav/',
            spotify: 'https://open.spotify.com/intl-es/artist/1ijri5JZogzobbbQEDkmJO?si=V2aH-U-yTw6IIEpiHbr51g'
          },
          {
            name: 'Tiello',
            description: 'Sumérgete en el mundo de la música house con Tiello, un DJ y productor que ha estado creando ritmos contagiosos durante una década sólida. El distintivo sonido house de Tiello es un testimonio de su dedicación inquebrantable al género, creando una atmósfera que resuena con los fanáticos a nivel mundial.',
            image: tiello,
            instagram: 'https://www.instagram.com/tiello.audio/',
            spotify: 'https://open.spotify.com/intl-es/artist/5gBy60kmVrcEHyaSqt81Wl?si=Wzq0l2wmQQW75_MZzSdrCA'
          },
          {
            name: 'Last men on Earth',
            description: 'Únete a Last Men on Earth, una fuerza pionera en la escena de la música electrónica, aportando colectivamente una década de experiencia tanto en la producción como en la mezcla como DJ. Especializados en techno, Last Men crea de manera colaborativa pistas intensas y atmosféricas, empujando los límites de la exploración sonora como una asociación musical dinámica.',
            image: lastmen,
            instagram: 'https://www.instagram.com/lastmenonearth_/',
            spotify: 'https://open.spotify.com/intl-es/artist/4aUgXgIAcqvWeMjweQWTKy?si=RRsDs7h5QbmN3AeiBDLD2w'
          },
          {
            name: 'Djolee',
            description: 'Abraza el ritmo con Djolee, un virtuoso del tech house que ha estado dando forma al panorama electrónico durante más de 8 años. Como productor y DJ experimentado, Djolee aporta una fusión dinámica de ritmos, garantizando una experiencia inolvidable en la pista de baile.',
            image: djolee,
            instagram: 'https://www.instagram.com/djolee.music/',
            spotify: 'https://open.spotify.com/intl-es/artist/1HfGJTanZiMBHskJLQkRxL?si=EAP_ZUUbRkeIS--cayUZTw'
          },
          {
            name: 'Golden Hour',
            description: 'Sumérgete en el universo sonoro de Golden Hour, una sensación del tech house que ha estado causando sensación en la industria durante 6 años. Como hábil productor y DJ, fusiona sin esfuerzo sonidos vanguardistas, creando un viaje electrizante para los entusiastas de la música en todo el mundo.',
            image: golden,
            instagram: 'https://www.instagram.com/goldenhourdj/',
            spotify: 'https://open.spotify.com/intl-es/artist/7b7zGugn9gU2d0iDrLWVIN?si=9a_qzkObQtuEVTUYAdI71g'
          },
        
      ];

    return (
      <div className="basic-styles">

          <MainContainer title="3. Nuestra crew" text="Exploramos diferentes estilos, pero funcionamos como un equipo. ¡Te invitamos a conocernos!" />
          
          {artists.map((artist, index) => (
                <Card key={index} name={artist.name} text={artist.description} image={artist.image} instagram={artist.instagram} spotify={artist.spotify}/>
            ))}

          <Button text="toma clases con nosotros" link="/classes"/>


            
      </div>
    )
}

export default OurCrewPage;
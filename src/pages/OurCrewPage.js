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
          description: 'Meet Agustin, a seasoned electronic music producer and DJ with over a decade of experience. His mastery of techno beats has been shaping the electronic music scene, creating an immersive experience for enthusiasts worldwide.',
          image: agustin,
        },
        {
            name: 'Francisco Gracía',
            description: 'Discover the rhythmic world of Francisco, an electronic music maestro with a rich history of both producing and DJing. With a unique blend of Afrobeat influences, Francisco brings a vibrant and eclectic energy to the dance floor, captivating audiences for over 7 years.',
            image: frangar,
          },
          {
            name: 'Tiello',
            description: 'Step into the house music realm with Tiello, a DJ and producer who has been crafting infectious beats for a solid decade. Tiello signature house sound is a testament to his unwavering dedication to the genre, creating an atmosphere that resonates with fans globally.',
            image: tiello,
          },
          {
            name: 'Last men on Earth',
            description: 'Join Last men on Earth, a pioneering force in the electronic music scene, collectively bringing a decade of expertise to both production and DJing. Specializing in techno, Last men collaboratively crafts intense and atmospheric tracks, pushing the boundaries of sonic exploration as a dynamic musical partnership.',
            image: lastmen,
          },
          {
            name: 'Djolee',
            description: 'Embrace the groove with Djolee, a tech house virtuoso who has been shaping the electronic landscape for over 8 years. As a seasoned producer and DJ, Djolee brings a dynamic fusion of rhythms, ensuring an unforgettable experience on the dance floor.',
            image: djolee,
          },
          {
            name: 'Golden Hour',
            description: 'Dive into the sonic universe of Golden Hour, a tech house sensation who has been making waves in the industry for 6 years. As both a skilled producer and DJ, he seamlessly blends cutting-edge sounds, creating an electrifying journey for music enthusiasts worldwide.',
            image: golden,
          },
        
      ];

    return (
      
        <div className="basic-styles">
          <MainContainer title="3. OUR CREW" text="We explore different styles, but function as a cohesive team. We invite you to get to know us!" />

            {artists.map((artist, index) => (
        <Card key={index} name={artist.name} text={artist.description} image={artist.image} />
      ))}
      <Button text="toma clases con nosotros" link="/classes"/>
        </div>
    )
}

export default OurCrewPage;
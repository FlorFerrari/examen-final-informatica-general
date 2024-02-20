import React from "react";
import Card from "../components/Card/Card";
import MainContainer from "../components/MainContainer/MainContainer";
import Button from "../components/Button/Button";

/* ----------> images */
import djolee from "../img/ourCrew/djolee.jpg"
import remera from "../img/merch/remera.jpg"
import shirt from "../img/merch/shirt.png"
import totebag from "../img/merch/totebag.png"
import hoodie from "../img/merch/hoodie.png"

const OurCrewPage  = () => {

    const merch = [
        {
          name: 'Tote bag',
          description: 'Esta remera blanca de algodon organico es lo mas lindo que sentiras en tu vida sobre tu suave piel ahre',
          image: totebag,
        },
        {
            name: 'Amancay Hoodie',
            description: 'Esta remera blanca de algodon organico es lo mas lindo que sentiras en tu vida sobre tu suave piel ahre',
            image: hoodie,
          },
          {
            name: 'Amancay T-shirt',
            description: 'Esta remera blanca de algodon organico es lo mas lindo que sentiras en tu vida sobre tu suave piel ahre',
            image: shirt,
          },
          {
            name: 'djolee',
            description: 'HOLA me llamo agustin giri y soy productor y dj de musica electronica',
            image: remera,
          },
          {
            name: 'remera',
            description: 'HOLA me llamo agustin giri y soy productor y dj de musica electronica',
            image: remera,
          },
        
      ];

    return (
        <div className="basic-styles">
            <MainContainer title="6. MERCH" text="Crafted by Argentinians using top-quality Argentine raw materials. 
Send us an email with the product you love, and showcase Amancay's style anywhere in the world. " />
            {merch.map((merch, index) => (
        <Card key={index} name={merch.name} text={merch.description} image={merch.image} />
      ))}
      <Button text="Juga al memotest para ganarte una totebak" link="/game"/> 
        </div>
    )
}

export default OurCrewPage;
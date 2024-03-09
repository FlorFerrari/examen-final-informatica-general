import React from "react";
import Card from "../components/Card/Card";
import MainContainer from "../components/MainContainer/MainContainer";
import Button from "../components/Button/Button";

/* ----------> images */
import shirt from "../img/merch/shirt.png"
import totebag from "../img/merch/totebag.png"
import hoodie from "../img/merch/hoodie.png"

const OurCrewPage  = () => {

    const merch = [
        {
          name: 'Totebag',
          description: 'La Totebag de Amancay tiene toda la onda. Práctica, liviana y lista para acompañarte a donde vayas! Hecha con los mejores materiales. ARS 8.000',
          image: totebag,
        },
        {
            name: 'Amancay Hoodie',
            description: 'Buzo canguro en rústico liso con bordado en el delantero. Prenda lavada. La composición es 70% algodón 30% poliester. El modelo usa talle M. Disponible en talle XS, S, M, L y XL. ARS 35.000',
            image: hoodie,
          },
          {
            name: 'Amancay T-shirt',
            description: 'Remera manga corta de Jersey de algodón,  estampada con serigrafía tradicional en el frente. La composición es 100% algodón agroecológico. El modelo usa talle M. Disponible en talle XS, S, M, L y XL. ARS 20.000',
            image: shirt,
          },
        
      ];

    return (
        <div className="basic-styles">
            <MainContainer title="SHOP" text="Elaborado por argentinos con materias primas de alta calidad de Argentina. Envíanos un correo electrónico con el producto que te más te guste y mostrá el estilo de Amancay en cualquier parte del mundo." />
            {merch.map((merch, index) => (
        <Card key={index} name={merch.name} text={merch.description} image={merch.image} />
      ))}
      <Button text="Juga al memotest y ganate una totebag de Amancay!" link="/game"/> 
        </div>
    )
}

export default OurCrewPage;
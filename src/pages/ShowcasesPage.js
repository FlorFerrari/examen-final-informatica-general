import React from "react";
import MainContainer from "../components/MainContainer/MainContainer";
import Showcases from "../components/showcases/Showcases";
import Button from "../components/Button/Button";

const ShowcasesPage  = () => {

    return (
        <>
        <div className="basic-styles">
            <MainContainer  title="SHOWCASES" text="Descubrí la historia a través de los posters de algunos de nuestros inolvidables shows realizados en todo el mundo. Desde Buenos Aires hasta ciudades internacionales, hemos llevado la fiesta a nuevos niveles. ¿Querés que los Amancay Showcases lleguen a tu ciudad? ¡Estamos abiertos a llevar la magia a cualquier rincón del planeta! Contáctanos y haz que tu ciudad sea la próxima parada en nuestro viaje musical."  />
            <Button text="conocé las próximas fechas" link="/nextdates"/> 
            <Showcases />
        </div>
        </>
    )
}

export default ShowcasesPage;
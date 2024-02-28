import React from "react";
import MainContainer from "../components/MainContainer/MainContainer";
import Showcases from "../components/showcases/Showcases";
import Button from "../components/Button/Button";

const ShowcasesPage  = () => {


    return (
        <>
        <div className="basic-styles">
           
        <MainContainer  title="5. SHOWCASES" text="Lorem Ipsum 
        es simplemente el texto de relleno de las imprentas y archivos de texto.
         "  />
        <Button text="Próximas fechas" link="/nextdates"/> 
        <Showcases />
         
        
        
   
      
        </div>

            


            </>
    )
}

export default ShowcasesPage;
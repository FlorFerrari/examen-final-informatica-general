import React from 'react'
import "../../components/showcases/showcases.css"



import showcase1 from "../../img/showcases/showcase1.jpeg"
import showcase2 from "../../img/showcases/showcase2.jpeg"
import showcase3 from "../../img/showcases/showcase3.jpeg"
import showcase4 from "../../img/showcases/showcase4.jpeg"
import agus from "../../img/noticia-emi.jpeg"

export default function Showcases() {
    return (
        <div className="showcase">
          
          <div className="gallery">
            <img src={agus}alt="Imagen 1" />
            <img src={showcase2} alt="Imagen 2" />
            <img src={showcase3} alt="Imagen 3" />
            <img src={showcase4} alt="Imagen 3" />
            <img src={showcase4} alt="Imagen 3" />
            <img src={showcase4} alt="Imagen 3" />
            <img src={showcase4} alt="Imagen 3" />
            <img src={showcase4} alt="Imagen 3" />
            

           
          </div>
        </div>
      );
    }

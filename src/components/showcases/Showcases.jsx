import React from 'react'
import "../../components/showcases/showcases.css"

import showcase1 from "../../img/showcases/showcase1.jpeg"
import showcase2 from "../../img/showcases/showcase2.jpeg"
import showcase3 from "../../img/showcases/showcase3.jpeg"
import showcase4 from "../../img/showcases/showcase4.jpeg"
import showcase5 from "../../img/showcases/showcase5.jpeg"
import showcase6 from "../../img/showcases/showcase6.jpeg"
import showcase7 from "../../img/showcases/showcase7.jpeg"
import showcase8 from "../../img/showcases/showcase8.jpeg"
import showcase9 from "../../img/showcases/showcase9.jpeg"
import showcase10 from "../../img/showcases/showcase10.jpeg"


export default function Showcases() {
    return (
        <div className="showcase">
          <div className="gallery">
            <img src={showcase1}alt="Imagen 1" />
            <img src={showcase2} alt="Imagen 2" />
            <img src={showcase3} alt="Imagen 3" />
            <img src={showcase4} alt="Imagen 3" />
            <img src={showcase5} alt="Imagen 3" />
            <img src={showcase6} alt="Imagen 3" />
            <img src={showcase7} alt="Imagen 3" />
            <img src={showcase8} alt="Imagen 3" />
            <img src={showcase9} alt="Imagen 3" />
            <img src={showcase10} alt="Imagen 3" />
          </div>
        </div>
      );
    }

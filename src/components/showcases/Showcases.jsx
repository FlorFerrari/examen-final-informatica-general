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

const showcaseImages = [
  showcase1,
  showcase2,
  showcase3,
  showcase4,
  showcase5,
  showcase6,
  showcase7,
  showcase8,
  showcase9,
  showcase10
];
export default function Showcases() {
    return (
      <div className="showcase">
      <div className="gallery">
        {showcaseImages.map((imageName, index) => (
          <img key={index} src={imageName} alt="Poster del showcase" />
        ))}
      </div>
    </div>
      );
    }

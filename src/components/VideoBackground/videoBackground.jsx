import React from 'react'

import "../VideoBackground/videoBackground.css"
import fondo from "../../img/landingPage/pxfuel.jpg"

export default function VideoBackground() {
  return (
    <div>
        {/* <video loop autoPlay muted id="bg-video">
            <source src={require('../../img/landingPage/video-landing.mp4')} type="video/mp4" />
        </video> */}
        <img src={fondo} id="bg-video" alt="" />
    </div>
  )
}

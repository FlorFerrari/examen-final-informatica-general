import React from 'react'

import "../VideoBackground/videoBackground.css"

export default function VideoBackground() {
  return (
    <div>
        <h1>HOLAAAAAAAA</h1>
        <video loop autoPlay muted id="bg-video">
            <source src={require('../../img/landingPage/test.mp4')} type="video/mp4" />
        </video>
    </div>
  )
}

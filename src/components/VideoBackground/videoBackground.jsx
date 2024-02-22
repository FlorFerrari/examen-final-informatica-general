import React from 'react'

import "../VideoBackground/videoBackground.css"

export default function VideoBackground() {
  return (
    <div>
        <video loop autoPlay muted id="bg-video">
            <source src={require('../../img/landingPage/video-landing.mp4')} type="video/mp4" />
        </video>
    </div>
  )
}

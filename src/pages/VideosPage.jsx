import React from 'react'
import MainContainer from '../components/MainContainer/MainContainer'
import YoutubeVideo from '../components/youtube/YoutubeVideo'

export default function Videos() {
  return (
    <div className="basic-styles">
        <MainContainer title="Sets en vivo" text="Descubrí nuestra música en ciudades como Buenos Aires, Tulum y Guadalajara. Estos son algunos de nuestros mejores live sets, esperamos que los disfrutes. "/>
        <YoutubeVideo embedId="5CJvLWP5Duk" />
        <YoutubeVideo embedId="hMIVyrtRRAI" />
        <YoutubeVideo embedId="VEyYGhwv9oI" />
        <YoutubeVideo embedId="TMkupyVJmck" />
        <YoutubeVideo embedId="XoRgl4Xaz5U" />
    </div>
  )
}

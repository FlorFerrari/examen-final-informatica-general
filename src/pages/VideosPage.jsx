import React from 'react'
import MainContainer from '../components/MainContainer/MainContainer'
import YoutubeVideo from '../components/youtube/YoutubeVideo'

export default function Videos() {
  return (
    <div className="basic-styles">
        <MainContainer title="Descubri nuestros sets en vivo" text="Tocamos en los mejores boliches del mundo, te invitamos a formar parte de esta revolucion sonora"/>
        <YoutubeVideo embedId="5CJvLWP5Duk" />
        <YoutubeVideo embedId="5CJvLWP5Duk" />
        <YoutubeVideo embedId="5CJvLWP5Duk" />
        <YoutubeVideo embedId="5CJvLWP5Duk" />
        <YoutubeVideo embedId="5CJvLWP5Duk" />
    </div>
  )
}

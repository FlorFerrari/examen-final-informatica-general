import React from 'react'
import "../../components/discography/discography.css"

export default function DiscographyCards({title, description, image, songs, link }) {
  return (
    <div className="discography-container">
            <div className="discography-titles">
            <h2>→{title}</h2>
                <div className="discography-info">
                
                <p>{description}</p>
                <ol>
                    <li>1. {songs[0]}</li>
                    <li>2. {songs[1]}</li>
                    <li>3. {songs[2]}</li>
                    <li>4. {songs[3]}</li>
                    <li>5. {songs[0]}</li>
                    <li>5. {songs[0]}</li>
                    <li>5. {songs[0]}</li>
                    <li>5. {songs[0]}</li>
                    <li>5. {songs[0]}</li>
                    <li>5. {songs[0]}</li>
                    <li>5. {songs[0]}</li>
                   
                </ol>

                <a href={link} target="_blank">Escuchalo ahora</a>
                </div>
            </div>
            <div className="discography-image">
                <img src={image}></img>
            </div>
        </div>
  )
}

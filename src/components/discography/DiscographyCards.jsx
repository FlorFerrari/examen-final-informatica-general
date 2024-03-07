import React from 'react'
import "../../components/discography/discography.css"

export default function DiscographyCards({title, description, image, songs, link }) {
  return (
    <div className="discography-container">
            <div className="discography-titles">
            <h2>{title}</h2>
                <div className="discography-info">
                
                <p>{description}</p>
                <ol>
                    <li>1. {songs[0]}</li>
                    <li>2. {songs[1]}</li>
                    <li>3. {songs[2]}</li>
                    <li>4. {songs[3]}</li>
                    <li>5. {songs[4]}</li>
                    <li>6. {songs[5]}</li>
                    <li>7. {songs[6]}</li>
                    <li>8. {songs[7]}</li>
                    <li>9. {songs[8]}</li>
                    <li>10. {songs[9]}</li>
                    <li>11. {songs[10]}</li>
                    <li>12. {songs[11]}</li>
                    <li>13. {songs[12]}</li>
                    <li>14. {songs[13]}</li>
                   
                </ol>

                <a href={link} target="_blank">Compralo ahora</a>
                </div>
            </div>
            <div className="discography-image">
                <img src={image}></img>
            </div>
        </div>
  )
}

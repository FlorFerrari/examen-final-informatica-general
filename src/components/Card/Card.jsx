import React from 'react';

import "../Card/card.css"

import instagramIcon from "../../img/icons/instagram-icon.png"
import spotifyIcon from "../../img/icons/spotify-icon.png"

const Card =({name, text, image, instagram, spotify })=>{
    return (    
        
            <div className="card-styles">
                <img src={image} alt="amancay logo" className="card-image" />
                <p className='card-name'>{name}</p>  
                <p className='card-text'>{text}</p> 
                <div className="iconos">
                    <div className="instagram">
                        {instagram?
                         <a href={instagram} target="_blank" rel="noreferrer"><img src={instagramIcon} alt="instagram icon" /></a>
                          
                          : "" }
                    
                    </div>
                    <div className="spotify">
                        {spotify ? 
                        <a href={spotify} target="_blank" rel="noreferrer"><img src={spotifyIcon} alt="spotify icon" /></a> 
                       
                       : "" }
                            
                    </div>
                </div>
            </div>
        
    )

}

export default Card;
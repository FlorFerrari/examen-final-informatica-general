import React from 'react';

import "../Card/card.css"

const Card =({name, text, image})=>{
    return (    
        
            <div className="card-styles">
                <img src={image} alt="amancay logo" className="card-image" />
                <p className='card-name'>{name}</p>  
                <p className='card-text'>{text}</p> 
            </div>
        
    )

}

export default Card;
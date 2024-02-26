import React from 'react';
import "./mainContainer.css"

const MainContainer =({title= null, text = null , text2 = null , image = null})=>{
    return (    
        <div className="main-container">
            {title && <h2>{title}</h2>  }
            {text  && <p>{text}</p>}
            {text2  && <p>{text2}</p>}
            {image && <img src={image} alt="amancay logo" className="main-container-image" />}
        </div>
    )

}

export default MainContainer;
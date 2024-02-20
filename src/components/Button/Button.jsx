import React from 'react';
import "../Button/button.css"
import { Link } from 'react-router-dom';

const Button =({text, link})=>{

    return (    
        
          <Link to={link}>
            <a href={link} target="_blank" rel="noopener noreferrer">
            <button>{text}</button>
            </a>
          </Link>
      
    )

}

export default Button;
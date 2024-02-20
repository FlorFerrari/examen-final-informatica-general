import React, { useState } from 'react';
import "../project/project.css";


export default function Project({title, image, description, info}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            onMouseEnter={() => {
              ;
                setIsHovered(true);
            }}
            onMouseLeave={() => {
                ;
                setIsHovered(false);
            }}
            className='project'
        >
            <h2>{title}</h2>
            <a href="https://www.google.com" target="_blank"><img src={image}/></a>
            
            
            <p>{description}</p>
            
            
            
        </div>
    );
}
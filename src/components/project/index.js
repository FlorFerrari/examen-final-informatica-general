import React, { useState } from 'react';
import "../project/project.css";


export default function Project({title, image, description, info}) {
    

    return (
        <div className='project'>

            <h2>{title}</h2>
            <p className='info'>+ Info</p>

            <a href="https://www.google.com" target="_blank"><img src={image}/></a>
            
            <div className='description'>
                <p className='description-title'>{description}</p>
                <p>{info}</p>
                <p className='description-title'>{description}</p>
            </div>
            
        </div>
    );
}
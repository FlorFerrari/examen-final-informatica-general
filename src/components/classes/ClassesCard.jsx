import React from 'react';
import "./classes.css";

export default function ClassesCard({title, image, description, info, email}) {
    
    return (
        <div className='project'>

            <h2>{title}</h2>
            <p className='info'>+ Info</p>
            <img src={image} alt='Foto de perfil'/>
    
            <div className='description'>
                <p className='description-title'>{description}</p>
                <p>{info}</p>
                <p className='description-title'>{email}</p>
            </div>
        </div>
    );
}
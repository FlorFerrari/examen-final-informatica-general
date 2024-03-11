import React from 'react';
import { Link } from "react-router-dom";
import "../Footer/footer.css"
import instagramIcon from "../../img/icons/instagram-icon.png"


const Footer =()=>{
    return (    
        <div className="footer">
                    <div className="footer-column1">
                        <h2>AMANCAY</h2>
                        <p>SOUND COLLECTIVE</p>
                        <p>BUENOS AIRES, ARGENTINA</p>
                        <p>amancay@gmail.com</p>
                        <a href="https://www.instagram.com/amancay.musica/" target="_blank" rel="noreferrer"><img src={instagramIcon} alt="instagram icon" /></a>
                        
                    </div>

                    <div className="footer-column2">
                        <p><Link to="/aboutus" className='footer-link'>Sobre Nosotros</Link></p>
                        <p><Link to="/contactus" className='footer-link'>Contactanos</Link></p>
                        <p><Link to="/aboutme" className='footer-link'>Sobre la creadora</Link></p>
                    </div>
        </div>
    )

}

export default Footer;
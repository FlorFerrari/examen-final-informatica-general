import React from 'react';
import {Link} from 'react-router-dom';


import "../Navbar/navBar.css"

const Navbar=()=>{
    return (    
        <div className="navBar-container1">
            <div className="navBar-content">
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <Link to="/aboutus">About Us</Link>
                </div>
                            <div>
                                <Link to="/ourcrew">Our Crew</Link>
                            </div>
                            <div>
                                <Link to="/discography">Discography</Link>
                            </div>
                            <div>
                                <Link to="/showcases">Showcases</Link>
                            </div>
                            <div>
                                <Link to="/merch">Merch</Link>
                            </div>
                            <div>
                                <Link to="/contactus">Contact Us</Link>
                            </div>
                         
            </div>
        </div>

        
    )

}

export default Navbar;
import React from "react";
import "../styles/styles.css"
import MainContainer from "../components/MainContainer/MainContainer";
import Button from "../components/Button/Button";
import ContactForm from "../components/contactForm/ContactForm";

const ContactUsPage  = () => {

    const info = [
        {
          title: 'CONTACT US',
          text: 'Bienvenido a un viaje sonoro que trasciende fronteras. Desde Argentina, extendemos nuestras raíces musicales a cada rincón del planeta. Somos más que artistas, productores y DJs; somos narradores de emociones, arquitectos de melodías que te invitan a descubrir nuestro vibrante universo.',
          image: null,
        },
    ]

    return (
        <section className="basic-styles">
            <MainContainer title={info[0].title} text={info[0].text}/>


            <ContactForm/>


            <Button text="Sobre la creadora" link="/aboutme"/> 

        </section>
    )
}

export default ContactUsPage;
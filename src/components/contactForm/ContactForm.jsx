import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import "../contactForm/contactForm.css"


const ContactForm = () => {
  //se inicializan los estados del formulario, que comienzan vacios en este caso.
  // se definen las funciones que se usan para modificarlos
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [errores, setErrores] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [enviado, setEnviado] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
      if (name === "nombre") {
      setNombre(value);
    } else if (name === "email") {
      setEmail(value);
     } else if (name === "mensaje") {
      setMensaje(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('¡Correo enviado!');
      setNombre("");
      setEmail("");
      setMensaje("");
      setEnviado(true);
    }
  };

      const validateForm = () => {
        const nuevosErrores = { nombre: "", email: "", mensaje: "", };
        let isValid = true;
        if (!nombre) {
          nuevosErrores.nombre = "Por favor, ingresá un nombre";
          isValid = false;
        }
        if (!mensaje) {
          nuevosErrores.mensaje = "Por favor, ingresá un mensaje";
          isValid = false;
        }
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
          nuevosErrores.email = "email inválido";
          isValid = false;
        }
        setErrores(nuevosErrores);
        return isValid; 
      };

  return (
    <div className='estilos-form'>
      {enviado ? (
        <p>Thanks for contacting us!</p>
      ) : (
        <form onSubmit={handleSubmit}>
              <div className='form-section'>
                <label>Nombre:</label>
                <input
                  type="text"
                  name="nombre"
                  value={nombre}
                  onChange={handleInputChange}
                />
            <span className="error">{errores.nombre}</span>
          </div>
              <div className='form-section'>
                <label>Email:</label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                />
            <span className="error">{errores.email}</span>
          </div>
                <div className='form-section'>
                  <label>Tu mensaje:</label>
                  <textarea
                  type="text"
                    name="mensaje"
                    value={mensaje}
                    onChange={handleInputChange}
                  />
            <span className="error">{errores.mensaje}</span>
          </div>
          
          <div className='form-section'>
           <Button type="submit" className="boton-tracklist form-button" > Enviar</Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;

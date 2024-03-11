import React from 'react'
import "../../components/popUp/popup.css"


export default function PopUp({ score, onClose }) {
  
  return (
    <div className="popup">
      <div className="popup-content">
            <p>{score > 120 ? `¡Felicidades! Tu puntaje es de ${score}. Te ganaste una totebag. Envianos un mail a amancay@gmail.com con una captura de pantalla de este texto para recibir tu premio! Gracias por jugar :)` : `Esta vez no pudo ser :( Jugá de nuevo y obtené un puntaje mayor a 200 para ganar una totebag.`}</p>
            <button className="button-popup" onClick={onClose}>Cerrar</button>
            </div>
        </div>
  )
}
